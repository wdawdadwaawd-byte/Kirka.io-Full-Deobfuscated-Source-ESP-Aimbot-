#  — Kirka.io Userscript · Full Deobfuscation

> **Original script:** cracky.io (Kirka.io edition v0.5.1)  
> **Deobfuscated by:** anonimbiri-IsBack, WASDW (deobfuscation)  
> **Purpose:** Educational / research — reverse engineering study

---

## What is this?

`cracky.io USER - Kirka.io` is a paid Tampermonkey userscript sold via the cracky.io platform.  
It provides ESP, Aimbot, and various game manipulation features for the browser FPS game **Kirka.io**.

The script is distributed as a heavily obfuscated single file (`obf.js`, ~1.4 MB).  
This repository contains the **fully deobfuscated and human-readable source**.

---

## Files

| File | Size | Lines | Description |
|------|------|-------|-------------|
| `obf.js` | 1396 KB | 53 | Original obfuscated script |
| `deobf_readable.js` | 55 KB | 648 | Outer layer — access gate & key system |
| `deobf_inner.js` | 960 KB | 3148 | Inner layer — full cheat engine |

---

## Obfuscation Layers

The script uses a **two-layer obfuscation** scheme:

### Layer 1 — Encrypted payload (outer)

```
obf.js
 └─ 463 base64 chunks  →  sorted by index  →  joined  →  base64 decode
     └─ XOR decrypt
         key:   32-byte hardcoded key
         xor:   byte[i] = raw[i] ^ key[i % 32] ^ ((i * 31 + 17) & 0xFF)
         verify: FNV-1a hash check (expected: 1152938501)
     └─ new Function("...") → executes Layer 2
```

### Layer 2 — Runtime obfuscation (inner)

```
Inner string (964 KB of JS code) containing:
 ├─ _0x* hex variable names        (~4000+ identifiers)
 ├─ 0xFF hex number literals
 ├─ ![] instead of false
 ├─ !![] instead of true
 ├─ obj['property'] bracket access
 ├─ \x27 / \x20 string escapes
 ├─ string concatenation ('a'+'b')
 └─ Webpack mangled property names  (WmnWMwwN, WMWmnww, wwWMmNn ...)
```

---

## Deobfuscation Steps Applied

### Stage 1 — Decrypt
- Parsed 463 indexed base64 chunks
- Sorted by numeric index, joined, base64 decoded
- XOR decrypted with 32-byte key + rolling index
- Verified FNV-1a integrity hash ✓

### Stage 2 — AST transforms (Babel)
- `0xFF` → decimal (`255`)
- `![]` → `false`, `!![]` → `true`, `+[]` → `0`, `void 0` → `undefined`
- `obj['property']` → `obj.property` (dot notation)
- `?.['property']` → `?.property` (optional chaining)
- `'foo' + 'bar'` → `'foobar'` (string folding)
- `\x27` / `\x20` string escapes → actual characters

### Stage 3 — Variable rename
- Scope-aware rename of all `_0x*` identifiers via Babel scope API
- Context-based naming: `fn_N` for functions, `obj_N` for objects, `arr_N` for arrays, `nil_N` for nulls, etc.
- Text-level fallback (`g_N`) for any identifiers missed by scope traversal

### Stage 4 — Inner script extraction
- Located the `new Function("...")` call in the outer layer
- Extracted the 964 KB inner code string
- Applied all the same AST + rename passes to the inner code
- Saved as a separate readable file (`deobf_inner.js`)

### Stage 5 — Formatting
- Both files formatted with **prettier** (print width 120, 2-space indent)

---

## Features (from source)

```
ESP
 ├─ Boxes (corners / full)
 ├─ Player names
 ├─ Distances
 ├─ Tracers
 ├─ Health bars (width, shadow, theme)
 ├─ Visibility colors (visible / occluded)
 └─ Teammate ESP toggle

Aimbot
 ├─ FOV circle (angle / pixel mode)
 ├─ Smoothing
 ├─ Aim point (head / torso)
 ├─ Legit aim mode
 ├─ Flick speed
 ├─ ADS stability
 ├─ Aim randomness + tremor
 ├─ Target priority (crosshair / closest / health)
 ├─ Target lock
 └─ Team check / wall check

Combat
 ├─ Auto fire + fire tolerance
 ├─ No recoil / recoil compensation
 └─ Rapid fire (multiplier: 1–20)

Movement
 ├─ Instant dash
 └─ Auto reload / instant reload

GUI
 ├─ ClickGUI (Insert key)
 ├─ Array list
 ├─ Watermark
 ├─ Theme system (cotton-candy, ocean-pastel, ember, sakura, mint ...)
 ├─ Custom colors (primary / secondary / surface)
 └─ Preset save / load
```

---

## Access / Key System (cracky.io)

The outer layer (`deobf_readable.js`) implements cracky.io's access gate:

- User must watch **2 YouTube videos** (cracky.io channels) for **15 seconds each**
- Then visit a **Boostellar link** (`bstlar.com/12949/...`) which generates a key
- Key is valid for **12 hours**, then requires renewal
- 10 rotating Boostellar URLs with SHA-256 digest verification

This is how cracky.io monetizes the free script — ad revenue via Boostellar + YouTube watch time.

---

## Tools Used

- **Node.js** v24
- **@babel/parser** — AST parsing
- **@babel/traverse** — AST traversal & transforms
- **@babel/generator** — code generation
- **@babel/types** — AST node helpers
- **prettier** — final formatting

---

## License

```
MIT License

Copyright (c) 2025 anonimbiri-IsBack
Copyright (c) 2025 WASDW (deobfuscation)

The deobfuscation work (tooling, methodology, readable output) is released under MIT.
The underlying game logic remains the intellectual property of cracky.io.
This repository is provided for educational and research purposes only.
```
