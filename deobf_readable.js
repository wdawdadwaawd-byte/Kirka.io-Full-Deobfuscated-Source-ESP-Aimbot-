// ==UserScript==
// @name         cracky.io USER - Kirka.io
// @namespace    urn:cracky.io:kirka-userscript:user
// @version      0.5.1
// @description  Kirka edition: Cracky-style ClickGUI, frame-synchronized ESP, and configurable aimbot.
// @match        https://kirka.io/*
// @run-at       document-idle
// @match        https://www.youtube.com/*
// @match        https://youtube.com/*
// @connect      www.youtube.com
// @connect      youtube.com
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addValueChangeListener
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @grant        GM_setClipboard
// @sandbox      JavaScript
// @noframes
// @license      MIT
// ==/UserScript==
/*
MIT License

Copyright (c) 2025 anonimbiri-IsBack, WASDW (deobfuscation)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
const CrackyAccess = (() => {
  'use strict';

  // Inner script injected at runtime via new Function()
  const KIRKA_TOOLKIT_CODE = __INNER_SCRIPT__;

  const obj_watchSeconds_1 = {
      watchSeconds: 15,
      videosPerChannel: 1,
      renewalHours: 12,
      channels: [
        {
          handle: 'heisthacksjp',
          id: 'UCCAPrOgw3d1MaQOXETLMCyQ',
        },
        {
          handle: 'crackyio',
          id: 'UCXqwGR8MUYLcnNbjnEGW63A',
        },
      ],
      keys: [
        {
          url: 'https://bstlar.com/12949/pHGy0XecQQ',
          digest: '3eef80985aa33cac25c9299d4112a06949f90b6b127e47cc736d4d2ea45f93f3',
        },
        {
          url: 'https://bstlar.com/12949/8uzi4f0rYz',
          digest: '01508a57a231f7d6d1c08077ea3e6a9390028b04473fa6dba31f44165c013e69',
        },
        {
          url: 'https://bstlar.com/12949/BeYwoMb3NW',
          digest: '3b11424886654296cc9af31a68787b67d39d44355f5575ba914a1e7fac84be04',
        },
        {
          url: 'https://bstlar.com/12949/o2aRos3XII',
          digest: '3b82bd20dd1dd5c5301d60a9702480598643041e4f4de6ee172095b74740ce52',
        },
        {
          url: 'https://bstlar.com/12949/i8OCqunxia',
          digest: '75a740c87961bee778217ad6fc4f1817ffece71e8af2a07d03c85c88be4cfd77',
        },
        {
          url: 'https://bstlar.com/12949/SEM8UI3aPB',
          digest: '1b91f786ff506e1643fe60d0967a12efe5e2420d2fd3c0189d679b565168dabe',
        },
        {
          url: 'https://bstlar.com/12949/Gi606ilawN',
          digest: '1b91f786ff506e1643fe60d0967a12efe5e2420d2fd3c0189d679b565168dabe',
        },
        {
          url: 'https://bstlar.com/12949/XvHV3IqcCG',
          digest: '2486ed5a01fa84ff088ea9f612b7ae1d68b669c60ed9434df646254a19dd324d',
        },
        {
          url: 'https://bstlar.com/12949/pQ4HnYcWs1',
          digest: '965e312e89dd8cc122966e7915f3fb908ab38e84acd6cf605229bb1237939743',
        },
        {
          url: 'https://bstlar.com/12949/5vTBd4bHat',
          digest: '2b44913576dbeb0767b1b6bcfe7cfa71d7a3dd3da279c19d1459bdc68b5e3fbf',
        },
      ],
      storagePrefix: 'crackyio_kirka_access_v2_',
    },
    v_2 = obj_watchSeconds_1.renewalHours * 60 * 60 * 1000,
    v_3 = 15 * 60 * 1000,
    v_4 = obj_watchSeconds_1.storagePrefix || 'crackyio_access_v2_';
  let arr_5 = [],
    no_6 = false,
    nil_7 = null,
    nil_8 = null,
    no_9 = false,
    nil_10 = null,
    nil_11 = null,
    str_12 = '',
    no_13 = false,
    no_14 = false,
    str_15 = '';
  const fn_16 = (v_39, v_40) => {
      try {
        return GM_getValue(v_4 + v_39, v_40);
      } catch (v_41) {
        throw new Error('Tampermonkey storage unavailable: ' + v_41.message);
      }
    },
    fn_17 = (v_42, v_43) => GM_setValue(v_4 + v_42, v_43),
    fn_18 = () => {
      const fn_16Ret_44 = fn_16('key', {});
      if (
        obj_watchSeconds_1.renewalHours === 12 &&
        fn_16Ret_44.renewalHours == null &&
        Number.isFinite(fn_16Ret_44.anchor) &&
        Number.isInteger(fn_16Ret_44.grantedCycle) &&
        fn_16Ret_44.grantedCycle >= 0
      ) {
        const obj_anchor_45 = {
          anchor: fn_16Ret_44.anchor + fn_16Ret_44.grantedCycle * 48 * 3600000,
          grantedCycle: 0,
          slotOffset: fn_16Ret_44.grantedCycle % obj_watchSeconds_1.keys.length,
          renewalHours: 12,
        };
        return (fn_17('key', obj_anchor_45), obj_anchor_45);
      }
      return fn_16Ret_44;
    },
    fn_19 = (v_46, v_47) => (Number.isFinite(v_46.anchor) ? Math.max(0, Math.floor((v_47 - v_46.anchor) / v_2)) : 0),
    fn_20 = (v_48, v_49) =>
      Number.isFinite(v_48.anchor) && v_49 >= v_48.anchor && v_48.grantedCycle === fn_19(v_48, v_49),
    fn_21 = (v_50, v_51) =>
      (fn_19(v_50, v_51) + (Number.isInteger(v_50.slotOffset) && v_50.slotOffset >= 0 ? v_50.slotOffset : 0)) %
      obj_watchSeconds_1.keys.length,
    fn_22 = (v_52) => {
      const fn_16Ret_53 = fn_16('watch_' + v_52.id, {});
      return fn_16Ret_53.channelId === v_52.channelId && fn_16Ret_53.seconds >= obj_watchSeconds_1.watchSeconds;
    },
    fn_23 = () =>
      !no_14 &&
      no_6 &&
      fn_20(fn_18(), Date.now()) &&
      arr_5.length === obj_watchSeconds_1.channels.length * obj_watchSeconds_1.videosPerChannel &&
      arr_5.every(fn_22);
  function fn_24(v_54, v_55) {
    const parseFromStringRet_56 = new DOMParser().parseFromString(v_54, 'application/xml');
    if (parseFromStringRet_56.querySelector('parsererror')) throw new Error('Invalid feed for @' + v_55.handle);
    const fn_57 = (v_60, v_61) => v_60.getElementsByTagNameNS('*', v_61)[0]?.textContent || '',
      fn_57Ret_58 = fn_57(parseFromStringRet_56.documentElement, 'channelId');
    if (fn_57Ret_58 !== v_55.id && 'UC' + fn_57Ret_58 !== v_55.id)
      throw new Error('Feed owner does not match @' + v_55.handle);
    const sliceRet_59 = [...parseFromStringRet_56.getElementsByTagNameNS('*', 'entry')]
      .map((v_62) => ({
        id: fn_57(v_62, 'videoId'),
        title: fn_57(v_62, 'title'),
        published: Date.parse(fn_57(v_62, 'published')),
        channelId: fn_57(v_62, 'channelId'),
        handle: v_55.handle,
      }))
      .filter((v_63) => /^[\w-]{11}$/.test(v_63.id) && v_63.channelId === v_55.id && Number.isFinite(v_63.published))
      .sort((v_64, v_65) => v_65.published - v_64.published)
      .slice(0, obj_watchSeconds_1.videosPerChannel);
    if (sliceRet_59.length !== obj_watchSeconds_1.videosPerChannel)
      throw new Error('No latest upload found for @' + v_55.handle);
    return sliceRet_59;
  }
  function fn_25(v_66) {
    return new Promise((v_67, v_68) => {
      GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://www.youtube.com/feeds/videos.xml?channel_id=' + v_66.id,
        anonymous: true,
        timeout: 20000,
        onload: (v_69) => {
          try {
            if (v_69.status !== 200) throw new Error('YouTube feed returned HTTP ' + v_69.status);
            v_67(fn_24(v_69.responseText, v_66));
          } catch (v_70) {
            v_68(v_70);
          }
        },
        onerror: () =>
          v_68(new Error('Could not fetch @' + v_66.handle + '. Check Tampermonkey\x27s youtube.com permission.')),
        ontimeout: () => v_68(new Error('YouTube feed timed out for @' + v_66.handle)),
      });
    });
  }
  async function fn_26(v_71 = false) {
    if (no_13) return;
    no_13 = true;
    try {
      const fn_16Ret_72 = fn_16('feeds', null);
      if (
        !v_71 &&
        fn_27(fn_16Ret_72) &&
        Date.now() - fn_16Ret_72.fetchedAt < v_3 &&
        Date.now() >= fn_16Ret_72.fetchedAt
      )
        arr_5 = fn_16Ret_72.videos;
      else {
        const v_73 = await Promise.all(obj_watchSeconds_1.channels.map(fn_25));
        ((arr_5 = v_73.flat()),
          fn_17('feeds', {
            fetchedAt: Date.now(),
            videos: arr_5,
          }));
      }
      ((no_6 = true), (str_12 = ''), fn_34());
    } catch (v_74) {
      str_12 = String(v_74.message || v_74);
    } finally {
      ((no_13 = false), fn_35());
      if (!no_6 && !no_14) setTimeout(() => fn_26(true), 30000);
    }
  }
  function fn_27(v_75) {
    return (
      Number.isFinite(v_75?.fetchedAt) &&
      Array.isArray(v_75.videos) &&
      v_75.videos.length === obj_watchSeconds_1.channels.length * obj_watchSeconds_1.videosPerChannel &&
      obj_watchSeconds_1.channels.every(
        (v_76) =>
          v_75.videos.filter(
            (v_77) => v_77.channelId === v_76.id && v_77.handle === v_76.handle && /^[\w-]{11}$/.test(v_77.id),
          ).length === obj_watchSeconds_1.videosPerChannel,
      )
    );
  }
  function fn_28(v_78) {
    GM_openInTab(v_78, {
      active: true,
      insert: true,
      setParent: true,
    });
  }
  function fn_29(v_79) {
    (fn_17('request_' + v_79.id, {
      channelId: v_79.channelId,
      handle: v_79.handle,
      expiresAt: Date.now() + 3600000,
    }),
      fn_28('https://www.youtube.com/watch?v=' + v_79.id + '&crackyio_task=1'));
  }
  async function fn_30(v_80, v_81 = Date.now()) {
    const fn_18Ret_82 = fn_18(),
      v_83 = obj_watchSeconds_1.keys[fn_21(fn_18Ret_82, v_81)],
      v_84 = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(String(v_80).trim())),
      dataview_85 = new DataView(v_84);
    let str_86 = '';
    for (let n0_88 = 0; n0_88 < dataview_85.byteLength; n0_88++)
      str_86 += dataview_85.getUint8(n0_88).toString(16).padStart(2, '0');
    if (v_83 !== obj_watchSeconds_1.keys[fn_21(fn_18(), Date.now())])
      throw new Error('The link rotated while validating. Open the new link and retry.');
    if (str_86 !== v_83.digest) throw new Error('This key does not match the current Boostellar link.');
    const v_87 = Number.isFinite(fn_18Ret_82.anchor) ? fn_18Ret_82.anchor : v_81;
    if (v_81 < v_87) throw new Error('Your system clock precedes key activation. Check the date and time.');
    return (
      fn_17('key', {
        anchor: v_87,
        grantedCycle: fn_19(
          {
            anchor: v_87,
          },
          v_81,
        ),
        slotOffset: fn_18Ret_82.slotOffset || 0,
        renewalHours: obj_watchSeconds_1.renewalHours,
      }),
      v_87 +
        (fn_19(
          {
            anchor: v_87,
          },
          v_81,
        ) +
          1) *
          v_2
    );
  }
  function fn_31(v_89, v_90, v_91) {
    const createElementRet_92 = document.createElement(v_89);
    if (v_90 !== undefined) createElementRet_92.textContent = v_90;
    if (v_91) createElementRet_92.className = v_91;
    return createElementRet_92;
  }
  function fn_32(v_93, v_94) {
    const fn_31Ret_95 = fn_31('button', v_93);
    return ((fn_31Ret_95.type = 'button'), fn_31Ret_95.addEventListener('click', v_94), fn_31Ret_95);
  }
  function fn_33() {
    if (nil_10 || !document.documentElement) return;
    const fn_31Ret_96 = fn_31('style');
    ((fn_31Ret_96.textContent =
      '\x0a#cracky-access,#cracky-access *,#cracky-access-pill,#cracky-watch{font-family:\x27Segoe UI\x27,Arial,sans-serif!important;box-sizing:border-box;text-transform:none;letter-spacing:normal;text-shadow:none;}\x0a#cracky-access{--ca-p:var(--cracky-primary,#ffb7d5);--ca-b:var(--cracky-secondary,#a9dcff);font-size:13px!important;line-height:1.5;color:#f5f6ff;}\x0a#cracky-access{position:fixed;inset:0;background:#070b18c9;backdrop-filter:blur(12px);z-index:2147483647;display:grid;place-items:center;padding:16px;}\x0a#cracky-access[hidden],#cracky-access-pill[hidden]{display:none!important;}\x0a#cracky-access .ca-card{width:min(100%,440px);max-height:calc(100vh - 32px);overflow:auto;border:1px solid #ffffff20;border-radius:14px;background:#161a23;padding:20px;box-shadow:0 22px 80px #0009;text-align:left;}\x0a#cracky-access h2{margin:0 0 6px;font-size:24px!important;font-weight:700;background:linear-gradient(110deg,var(--ca-p),var(--ca-b));background-clip:text;color:transparent;}\x0a#cracky-access .ca-brand{display:flex;align-items:center;gap:12px;margin-bottom:14px;}\x0a#cracky-access .ca-brand h2{margin:0;}\x0a#cracky-access .cracky-logo{display:block;width:44px;height:48px;flex:0 0 44px;object-fit:contain;background:#fff;border-radius:9px;}\x0a#cracky-access p{font-size:12px!important;color:#aab2c3;margin:0 0 16px;line-height:1.6;}\x0a#cracky-access .ca-task{padding:12px 0;border-top:1px solid #ffffff12;margin:0;}\x0a#cracky-access .ca-title{font-size:13px!important;font-weight:600;margin-bottom:5px;overflow-wrap:anywhere;}\x0a#cracky-access .ca-video-title{font-size:11px!important;color:#aab2c3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:12px;}\x0a#cracky-access .ca-meta{font-size:11px!important;color:#aab2c3;}\x0a#cracky-access .ca-progress{width:100%;height:3px;border-radius:3px;background:#ffffff16;margin:10px 0;overflow:hidden;}\x0a#cracky-access .ca-progress-fill{height:100%;background:linear-gradient(90deg,var(--ca-p),var(--ca-b));transition:width .25s;}\x0a#cracky-access .ca-row{display:flex;align-items:center;justify-content:space-between;gap:10px;}\x0a#cracky-access button,#cracky-access-pill{border:1px solid #ffffff22;border-radius:6px;padding:8px 10px;background:#ffffff08;color:#eef0f6;cursor:pointer;font-size:11px!important;font-weight:600;line-height:1.3;min-height:32px;box-shadow:none;}\x0a#cracky-access button:hover{border-color:var(--ca-b);}\x0a#cracky-access button:disabled{opacity:.5;cursor:default;}\x0a#cracky-access button:focus-visible,#cracky-access input:focus-visible{outline:2px solid var(--ca-b);outline-offset:3px;}\x0a#cracky-access input{min-width:0;width:100%;background:#0e1118;color:#fff;border:1px solid #ffffff20;border-radius:6px;padding:9px;font-size:12px!important;line-height:1.4;margin:0;}\x0a#cracky-access label{display:block;margin:14px 0 7px;font-size:11px!important;color:#aab2c3;}\x0a#cracky-access .ca-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;}\x0a#cracky-access .ca-error{color:#ffb7bc;overflow-wrap:anywhere;font-size:11px!important;line-height:1.5;}\x0a#cracky-access .ca-error:empty{display:none;}\x0a#cracky-access .ca-foot{font-size:10px!important;color:#929bab;margin:14px 0 0;}\x0a#cracky-access-pill{position:fixed;right:16px;bottom:16px;z-index:2147483646;background:#171d2ef5;}\x0a#cracky-watch{position:fixed;right:20px;bottom:90px;z-index:2147483647;background:#151d30f5;border:1px solid #a9dcff55;border-radius:12px;padding:12px 16px;max-width:320px;pointer-events:none;}\x0a@media(max-width:480px){#cracky-access .ca-card{padding:20px;}#cracky-access h2{font-size:22px!important;}}\x0a'),
      document.documentElement.append(fn_31Ret_96),
      (nil_10 = fn_31('section')),
      (nil_10.id = 'cracky-access'),
      nil_10.setAttribute('role', 'dialog'),
      nil_10.setAttribute('aria-modal', 'true'),
      nil_10.setAttribute('aria-labelledby', 'cracky-access-title'));
    const fn_31Ret_97 = fn_31('div', undefined, 'ca-card'),
      fn_31Ret_98 = fn_31('h2', 'cracky.io');
    fn_31Ret_98.id = 'cracky-access-title';
    const fn_31Ret_99 = fn_31('div', undefined, 'ca-brand');
    if (str_15) {
      const fn_31Ret_110 = fn_31('img', undefined, 'cracky-logo');
      ((fn_31Ret_110.src = str_15),
        (fn_31Ret_110.alt = 'cracky.io'),
        (fn_31Ret_110.width = 550),
        (fn_31Ret_110.height = 600),
        (fn_31Ret_110.draggable = false),
        (fn_31Ret_110.decoding = 'async'),
        fn_31Ret_99.append(fn_31Ret_110));
    }
    (fn_31Ret_99.append(fn_31Ret_98),
      fn_31Ret_97.append(
        fn_31Ret_99,
        fn_31(
          'p',
          'Open both latest videos for 15 seconds, then enter your ' +
            obj_watchSeconds_1.renewalHours +
            '-hour key. Completed videos stay saved.',
        ),
      ));
    const fn_31Ret_100 = fn_31('div');
    ((fn_31Ret_100.id = 'cracky-video-tasks'), fn_31Ret_97.append(fn_31Ret_100));
    const fn_31Ret_101 = fn_31('div', undefined, 'ca-task');
    fn_31Ret_101.append(fn_31('div', obj_watchSeconds_1.renewalHours + '-hour key', 'ca-title'));
    const fn_31Ret_102 = fn_31('div', undefined, 'ca-meta');
    ((fn_31Ret_102.id = 'cracky-key-info'), fn_31Ret_101.append(fn_31Ret_102));
    const fn_31Ret_103 = fn_31('div', undefined, 'ca-actions');
    (fn_31Ret_103.append(fn_32('Get key ↗', () => fn_28(obj_watchSeconds_1.keys[fn_21(fn_18(), Date.now())].url))),
      fn_31Ret_103.append(
        fn_32('Copy link', () => {
          try {
            (GM_setClipboard(obj_watchSeconds_1.keys[fn_21(fn_18(), Date.now())].url, 'text'),
              (str_12 = 'Link copied. Open it in your other browser, then return here with the key.'));
          } catch (v_111) {
            str_12 = 'Could not copy the link: ' + v_111.message;
          }
          fn_35();
        }),
      ),
      fn_31Ret_101.append(fn_31Ret_103));
    const fn_31Ret_104 = fn_31('label', 'Paste your key');
    fn_31Ret_104.htmlFor = 'cracky-key-input';
    const fn_31Ret_105 = fn_31('input');
    ((fn_31Ret_105.id = 'cracky-key-input'),
      (fn_31Ret_105.type = 'text'),
      (fn_31Ret_105.autocomplete = 'off'),
      (fn_31Ret_105.spellcheck = false));
    const fn_32Ret_106 = fn_32('Unlock', async () => {
      fn_32Ret_106.disabled = true;
      try {
        (await fn_30(fn_31Ret_105.value), (str_12 = ''), (fn_31Ret_105.value = ''));
      } catch (v_112) {
        str_12 = String(v_112.message || v_112);
      } finally {
        ((fn_32Ret_106.disabled = false), fn_35());
      }
    });
    fn_31Ret_105.addEventListener('keydown', (v_113) => {
      v_113.key === 'Enter' && (v_113.preventDefault(), fn_32Ret_106.click());
    });
    const fn_31Ret_107 = fn_31('div', undefined, 'ca-row');
    (fn_31Ret_107.append(fn_31Ret_105, fn_32Ret_106),
      fn_31Ret_101.append(fn_31Ret_104, fn_31Ret_107),
      fn_31Ret_97.append(fn_31Ret_101));
    const fn_31Ret_108 = fn_31('div', '', 'ca-error');
    ((fn_31Ret_108.id = 'cracky-access-error'),
      fn_31Ret_108.setAttribute('role', 'status'),
      fn_31Ret_108.setAttribute('aria-live', 'polite'),
      fn_31Ret_97.append(fn_31Ret_108));
    const fn_31Ret_109 = fn_31('div', undefined, 'ca-actions');
    (fn_31Ret_109.append(
      fn_32('Play without script', () => {
        ((nil_10.hidden = true), (nil_11.hidden = false));
      }),
    ),
      fn_31Ret_97.append(
        fn_31Ret_109,
        fn_31(
          'p',
          'Videos can be paused or in the background. Use this browser with the USER script enabled on YouTube. Uploads update automatically.',
          'ca-foot',
        ),
      ),
      nil_10.append(fn_31Ret_97),
      (nil_11 = fn_32('cracky.io · locked', () => {
        ((nil_10.hidden = false), (nil_11.hidden = true));
      })),
      (nil_11.id = 'cracky-access-pill'),
      (nil_11.hidden = true),
      document.documentElement.append(nil_10, nil_11),
      fn_34());
  }
  function fn_34() {
    const v_114 = nil_10?.querySelector('#cracky-video-tasks');
    if (!v_114) return;
    v_114.replaceChildren();
    if (!no_6) {
      v_114.append(fn_31('p', 'Fetching the latest uploads…'));
      return;
    }
    for (const v_115 of arr_5) {
      const fn_31Ret_116 = fn_31('div', undefined, 'ca-task');
      ((fn_31Ret_116.dataset.videoId = v_115.id), fn_31Ret_116.append(fn_31('div', '@' + v_115.handle, 'ca-title')));
      const fn_31Ret_117 = fn_31('div', v_115.title, 'ca-video-title');
      ((fn_31Ret_117.title = v_115.title), fn_31Ret_116.append(fn_31Ret_117));
      const fn_31Ret_118 = fn_31('div', undefined, 'ca-progress');
      (fn_31Ret_118.setAttribute('role', 'progressbar'),
        fn_31Ret_118.setAttribute('aria-label', 'Time on video page'),
        fn_31Ret_118.setAttribute('aria-valuemin', '0'),
        fn_31Ret_118.setAttribute('aria-valuemax', String(obj_watchSeconds_1.watchSeconds)),
        fn_31Ret_118.append(fn_31('div', undefined, 'ca-progress-fill')));
      const fn_31Ret_119 = fn_31('div', '', 'ca-meta');
      fn_31Ret_119.classList.add('ca-time');
      const fn_31Ret_120 = fn_31('div', undefined, 'ca-row');
      (fn_31Ret_120.append(
        fn_31Ret_119,
        fn_32('Open video ↗', () => fn_29(v_115)),
      ),
        fn_31Ret_116.append(fn_31Ret_118, fn_31Ret_120),
        v_114.append(fn_31Ret_116));
    }
  }
  function fn_35() {
    if (!nil_10) fn_33();
    const fn_23Ret_121 = fn_23();
    if (fn_23Ret_121 && !no_9)
      try {
        if (!nil_7) nil_7 = nil_8();
        (nil_7?.applyHudTheme?.(), (no_9 = true), (str_12 = ''));
        if (nil_10) nil_10.hidden = true;
        if (nil_11) nil_11.hidden = true;
      } catch (v_126) {
        str_12 = 'Could not start script: ' + String(v_126.message || v_126);
        if (nil_10) nil_10.hidden = false;
      }
    else {
      if (!fn_23Ret_121 && no_9) {
        ((no_9 = false), nil_7?.setAccessLocked());
        if (nil_10) nil_10.hidden = false;
      }
    }
    if (!nil_10) return;
    for (const v_127 of nil_10.querySelectorAll('[data-video-id]')) {
      const findRet_128 = arr_5.find((v_131) => v_131.id === v_127.dataset.videoId),
        fn_16Ret_129 = fn_16('watch_' + findRet_128.id, {}),
        v_130 =
          fn_16Ret_129.channelId === findRet_128.channelId
            ? Math.min(obj_watchSeconds_1.watchSeconds, Math.max(0, fn_16Ret_129.seconds || 0))
            : 0;
      ((v_127.querySelector('.ca-progress-fill').style.width = (v_130 / obj_watchSeconds_1.watchSeconds) * 100 + '%'),
        v_127.querySelector('.ca-progress').setAttribute('aria-valuenow', String(v_130)),
        (v_127.querySelector('.ca-time').textContent = fn_22(findRet_128)
          ? 'Complete ✓'
          : Math.floor(v_130) + ' / ' + obj_watchSeconds_1.watchSeconds + 's'),
        (v_127.querySelector('button').disabled = fn_22(findRet_128)));
    }
    const fn_18Ret_122 = fn_18(),
      nowRet_123 = Date.now(),
      fn_19Ret_124 = fn_19(fn_18Ret_122, nowRet_123),
      maxRet_125 = Math.max(0, (fn_18Ret_122.anchor || nowRet_123) + (fn_19Ret_124 + 1) * v_2 - nowRet_123);
    ((nil_10.querySelector('#cracky-key-info').textContent = fn_20(fn_18Ret_122, nowRet_123)
      ? 'Key active · renews in ' +
        Math.floor(maxRet_125 / 3600000) +
        'h ' +
        (Math.floor(maxRet_125 / 60000) % 60) +
        'm'
      : 'Key required · link ' + (fn_21(fn_18Ret_122, nowRet_123) + 1) + ' / ' + obj_watchSeconds_1.keys.length),
      (nil_10.querySelector('#cracky-access-error').textContent = str_12));
  }
  function fn_36(v_132, v_133, v_134) {
    if (!v_132 || !v_133.eligible || !v_132.eligible || v_133.id !== v_132.id) return v_134;
    const v_135 = (v_133.wall - v_132.wall) / 1000;
    if (!Number.isFinite(v_135) || v_135 <= 0) return v_134;
    return Math.min(obj_watchSeconds_1.watchSeconds, v_134 + v_135);
  }
  function fn_37() {
    let nil_136 = null,
      nil_137 = null,
      nil_138 = null,
      n0_139 = 0,
      n0_140 = 0;
    const fn_141 = () => {
      try {
        const url_142 = new URL(location.href),
          v_143 = url_142.pathname === '/watch' ? url_142.searchParams.get('v') : null,
          v_144 = v_143 ? fn_16('request_' + v_143, null) : null;
        if (
          !v_144 ||
          v_144.expiresAt < Date.now() ||
          !obj_watchSeconds_1.channels.some((v_147) => v_147.id === v_144.channelId) ||
          !/^[\w-]{11}$/.test(v_143)
        ) {
          ((nil_136 = null), (nil_138 = null), nil_137?.remove(), (nil_137 = null));
          return;
        }
        if (nil_138 !== v_143) {
          ((nil_138 = v_143), (nil_136 = null));
          const fn_16Ret_148 = fn_16('watch_' + v_143, {});
          n0_139 =
            fn_16Ret_148.channelId === v_144.channelId
              ? Math.min(obj_watchSeconds_1.watchSeconds, fn_16Ret_148.seconds || 0)
              : 0;
        }
        !nil_137 &&
          document.documentElement &&
          ((nil_137 = fn_31('div')),
          (nil_137.id = 'cracky-watch'),
          Object.assign(nil_137.style, {
            position: 'fixed',
            right: '20px',
            bottom: '90px',
            zIndex: '2147483647',
            background: '#151d30f5',
            color: '#eef5ff',
            border: '1px solid #a9dcff88',
            borderRadius: '12px',
            padding: '14px',
            font: '14px Segoe UI,sans-serif',
            maxWidth: '320px',
            pointerEvents: 'none',
          }),
          document.documentElement.append(nil_137));
        const obj_id_145 = {
          id: v_143,
          wall: performance.now(),
          eligible: true,
        };
        ((n0_139 = fn_36(nil_136, obj_id_145, n0_139)), (nil_136 = obj_id_145));
        if (n0_139 >= obj_watchSeconds_1.watchSeconds || Date.now() - n0_140 >= 1000) {
          const fn_16Ret_149 = fn_16('watch_' + v_143, {});
          ((n0_139 = Math.max(n0_139, fn_16Ret_149.channelId === v_144.channelId ? fn_16Ret_149.seconds || 0 : 0)),
            (fn_16Ret_149.channelId !== v_144.channelId ||
              fn_16Ret_149.seconds !== Math.min(obj_watchSeconds_1.watchSeconds, n0_139)) &&
              fn_17('watch_' + v_143, {
                channelId: v_144.channelId,
                seconds: Math.min(obj_watchSeconds_1.watchSeconds, n0_139),
                watchedAt: n0_139 >= obj_watchSeconds_1.watchSeconds ? Date.now() : null,
              }),
            (n0_140 = Date.now()));
        }
        const v_146 =
          n0_139 >= obj_watchSeconds_1.watchSeconds
            ? 'cracky.io · video complete. Return to the game tab.'
            : 'cracky.io · ' + Math.floor(n0_139) + ' / ' + obj_watchSeconds_1.watchSeconds + 's on this video page';
        if (nil_137 && nil_137.textContent !== v_146) nil_137.textContent = v_146;
      } catch (v_150) {
        console.warn('cracky.io: Video task tracker failed', v_150);
      }
    };
    (fn_141(),
      setInterval(fn_141, 250),
      window.addEventListener('yt-navigate-finish', fn_141),
      window.addEventListener('popstate', fn_141),
      window.addEventListener('pagehide', () => {
        (fn_141(), (nil_136 = null));
      }),
      window.addEventListener('pageshow', () => {
        ((nil_136 = null), fn_141());
      }));
  }
  function fn_38(v_151, v_152 = '') {
    if (location.hostname === 'www.youtube.com' || location.hostname === 'youtube.com') {
      fn_37();
      return;
    }
    ((nil_8 = v_151), (str_15 = v_152));
    try {
      (fn_33(),
        document.addEventListener('DOMContentLoaded', fn_33, {
          once: true,
        }),
        fn_26(),
        setInterval(fn_35, 1000),
        setInterval(() => fn_26(true), v_3),
        typeof GM_addValueChangeListener === 'function' &&
          (GM_addValueChangeListener(v_4 + 'key', fn_35), GM_addValueChangeListener(v_4 + 'feeds', () => fn_26())),
        window.addEventListener('pagehide', () => {
          no_14 = true;
        }),
        window.addEventListener('pageshow', () => {
          ((no_14 = false), fn_35());
        }));
    } catch (v_153) {
      console.error('cracky.io: USER access gate unavailable', v_153);
    }
  }
  return {
    boot: fn_38,
    isUnlocked: fn_23,
    parseFeed: fn_24,
    cycleAt: fn_19,
    keyValid: fn_20,
    slotAt: fn_21,
    presenceStep: fn_36,
    redeem: fn_30,
    validCache: fn_27,
  };
})();
(() => {
  'use strict';

  const v_154 = typeof unsafeWindow === 'undefined' ? window : unsafeWindow;
  let nil_155 = null;
  const obj_156 = {
    applyHudTheme() {
      if (nil_155 && v_154.KirkaToolkit === nil_155) return;
      if (v_154.KirkaToolkit) throw new Error('Disable the other Kirka script and reload.');
      const function_157 = /* inner toolkit script → see deobf_inner.js */ new window.Function(KIRKA_TOOLKIT_CODE);
      nil_155 = function_157();
      if (!nil_155 || v_154.KirkaToolkit !== nil_155) throw new Error('Kirka page runtime did not start.');
    },
    setAccessLocked() {
      if (nil_155 && v_154.KirkaToolkit === nil_155) nil_155.destroy();
      nil_155 = null;
    },
  };
  CrackyAccess.boot(
    () => obj_156,
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8IAEQgCWAImAwEiAAIRAQMRAf/EABsAAQACAwEBAAAAAAAAAAAAAAAFBgIDBAEH/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/9oADAMBAAIQAxAAAAH6oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhhStJyPisulk5Gt4n0HOiXXlNwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAB57gVeH2Y99c8PzxvLM1MU2SLNMRPvXV/917OGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAGndpKH708vfVTi7XC8Mx0nh3JY8c8PRu+7oWa8+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvZiQdZt1R63Op2Os5nPvjtnOWSZp8x11LW6p46v0NFynHIAAAAAAAAAAAAAAAAAAAAAAAAAAADz3Ega5LRXaxkDJRHKcgy29sbtLPLVCc62RuNQav0FHyHHIAAAAAAAAAAAAAAAAAAAAAAAAAADXs0FM0Ya++q3Hdsd58YhQN3bGby199SsPW911pHRV6a9nKGIyeegAAAAAAAAAAAAAAAAAAAAAAACKlK7Ve4JCF62Kjuzj4QAADp7IrustfRDzXbWWv1br8z8PM/Mjb1cAnJGo45n0LL57L5WtWeGS6KN5belH2F0VHfJZ0BviYR2+OppjiQh6262d6qwL9t+fW/EkhkAAAAAAAAABjUrXStXmrNlqWnJz7NfKAAHvQc0h7knZlG6tO/VxYx3ODyJD2OyJTfDZ1YO6q7dW3+VeV3ZP3mgas6r5xZVczJ9CZ1LovYd/nLnW/3DYuXB7W8yX7qn0Ylwy5N/XV/wBsLNcMgAAAAAAAAAaqHeqB0umt2KuyRjo5+YZGPTuzRjz850acSgAAAAPfB0dMdmkjp28NZe86On3lHXlxDuyjxJexgk0bkSHN7vI3rz6CYkteXo1Y7DDzHGeiAAAAAAAAANFDvsHpX+Dv966qXJba9xzG93ujMy48Sj08WCWdqSvPEtTdvE4ggAADq5ewz4N2lAUAAAB751G+X4LR0cnTlh01l0+2XM6unXt5QAAAAAAAAADHm6+crsPl531hWOuL5Zw4/fMAMr5AXR7DHKewDynXLxz+WuvkvywAAAAAAAAAM5DVK1JdnvnfXZM9HZyzo6c9mXnoAAAAAAAAAAeV2wUXTTzdde6Xhj+nj4ZBQLT0QFueykfSoGenQRjvJufoKXATEPfmA5gAAAAAAAOjTIGyz8Ml2uM9F22Nu/zLnAAAAAAAAAAAB4R9LsVf63GqztezOPW2c2vOTtqfP8L1TDRY64b+o4xG6fSlcYIkhz1iLvmeDygAAAAAAADcb5Hls+2/BMddScpr6OGfQAAAAAAAAAAAMcsCqRfbx9tQkJKxPLGmz673Et1VS1r588+ieHwPTeqXGnZrHdzebV5vZSws07b9Lmq+Lafq1Jivt2lQAAADPI1PfD2R1SFd8qx76327iluWc8zIAAAAAAAAAAABr2aymcvZx9tVzgkOXlj6XGXH5fLCXyhE+4KFfVx+bfSx8LmvrGUlGn5pbjkADDMUqg/c4dPivkzDy+AAA6eqM9SSx4us3WaLm+usZXhtpt6cc+cAAAAAAAAAAAAAa9mBUo2dge2oPLdr55+t/HPsdAzKcSJM/RuLBZBAzwAAAAAa9hFfJPuFSPlLfogAAB3cMik3K8Xb31M2OvWTnMxkAAAAAAAAAAAAAxy8IqoXul9LxVy21Y+w9NJu3OcnV6Hzb6TFrVpTltLXUGAGnd4Qs382my3a67UCQ+i0m1HZ56PjMF9D+fRiAADZ388pZYMsvPRuVtVLufGZjMAAAAAAAAAAAAAA1VyzcVUuPk8e2qv9b+WbeGPrrm6VQM9wnTt+d9xduGoQS/UOqHmEA8gLAK1ISoq1nyAFP+Y/SvmkmsKAzx7jOxxlh6nnrprG+UG385KjnAAAAAAAAAAAAAAGjfiQFbvNc3Yqu2L3aC+l/NeHjn7aoV0Xp+c/RuIrUH7Zp6bHsL5gAAABHFBpnZxSAr3PsTHs9sW7lsO1Ax7+LGW6d3zq288zAwAAAAAAAAAAAAAA18nfrKjG3WD6WJ4evLdrOFq4eeey1fNePE+3e/G7CfQ1Xk1lWraAADhOv5VlWE14790cnT0bK1yUj2dLjno3dL6AcJu5INylt7eLzpr6Dlp3cMgAAAAAAAAAAAAAAa+btwIaDuHPpSs7JXela8/dWCipOA4Z7Moz3Mk98RuJrdXvCze1kWKK4R1uLA7tPIN2/TtO3ZxSN17pu9Wnol8uLi7+fdA4cXKe9fF05lu6I6S9GrfKVyxcZ6IAAAAAAAAAAAAAAA8w2Dkq1vo27hr2VrbTH22L4bhttptrl8xn/pW6vjkR90oR8/d/FGO3V3DV9S4T5pjZocxnIbqtskBtn+tgeawbs3krdx59ZpGuXieLzbhsJ6drVm7WSttFvGWwYgAAAAAAAAAAAAAAAGmiXuobvHV7PwaTkDFc/Hv9Ct0XKXzwFB+nwCU6blasWmibdxHZXHnnqtsv85+jXzK1ZdJ8mt9N7Z6uWVru/fnsrz3tHPureXFH7ceGeqT0Wndgp1r63deqxZ+baMQAAAAAAAAAAAAAAADXFTGgoeVmge101ezcRK3r4jdeObyq8Gv0THT0HymF+lfPU7ML9m6RlxGAOWCs9INtF5vJJ3fW8N2RjdPuWHcna6O07a3SUl2c849mOzAAAAAAAAAAAAAAAAABjkOaPmOcomc7X+2uOHsxKjZK59K45n9zgWL+cd0on0f0UABTbkPhWr7DUkpWXZOW13un9u7xduPu7jY0tzmW9liAAAAAAAAAAAAAAAAAAAMchyRk5zlM1zUJ21ExFjr/ADz2cP0KTzKN9L3lAAAAfPfoPxs2WCNkO182yUzEJMdW7nMOhlAAAAAAAAAAAAAAAAAAAAADm3UmsNWPP21z8fNK8c/UxAAAoxc93x/7AAQ3ym8VEsPmzd31ZZDDo4Z8yAAAAAAAAAAAAAAAAAAAAAAeEJV5mI63TWZToxO+5yDIAADm+NfUfl6fSrH56oHziJlompuSjZPrbVtwz4wAAAAAAAAAAAAAAAAAAAAABhngVSLnYHtYaRxr3OfbnzyUyt6qYltVD0tyrDq+aT1bT7g+JZn2rH41rJTGMsu7tmIS1asxnjlygAAAAAAAAAAAAAAAAAAAAADz0R9NvcTpWuPtw66gtNl9zKvlZhWVm8Kx5aEV6T7WnNj1LeTLpHrHtMbhy9/HOz0gAAAAAAAAAAAAAAAAAAAAAADHR0+EXFWTTVT027DVqeVq9KvnZvUredi9iv5z3pB5TaIX2aEd19OyMNr0AAAAAAAAAAAAAAAAAAAAAAAAAeejDzYNbYMGYxZDx6PHo89AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8QAMBAAAgIBAwIFAwQCAgMAAAAAAQIAAwQFERIQExQgIUBQBiIwFTEyMyM0QYAkNUL/2gAIAQEAAQUC/wC1bMFFuoqIdQuMGoXCVaihisGHz1tgrTIvbIfbptNpj3tjtVYLE+d1S3lYJdatQbKsMXKsEptW0GaXbxs+cMuPK+XPzsaz1Wz1pfhZKm4XL840f+yMNmI2IG5A3P8Ax/8AS/ONMxOGQJl0EkiAATFKi7pg5PdHzbTMp7iDo55Mz7OPWYuRt0G6nCyhcvzRmYeNAmS3GmH1KNx6Yt/QEq2Hki9fmTNUbaoTPb7X9F6I3Hpi39FJRsTJF6/MGao29oma29137dUbj0xb+XRGat8XIF6fLtMtuWVLDye3+XkR9umLfz6Vu1T49wur+WsOw33a48aYfU+Wt9oPSY13cExrjRarBhNxOQm4+Sz2444mcdqm9F89bwEqce3upBbYFLMem3QM4gvuWLnXiJqUrzqXisGH57bUqD6kgn6mZXqNZldi2D2xmqN9gmcd7Lf4/gr/AI6f/LruJyWcl8m02isyGnUHWWakY2beZ4m+eJvnirxBm3iDULoNSaDUkg1CkwZlBgyKjO4kzMsVKxZ22m02lbtU2Hki9famam29wmQeV137/gT+NN3aVsqww2uZufKLHEGTYIuZEyK2/HtNptNptNuluUqHxjSrJWzpU5qtRuS+0aZh5ZROyx/5eUDeCuBQOhdRO7O4ZzacmnIzk05tO4Z3YHXoljJKssGW2hKjdYZ3rJ37Z4m2eKsnjHnjDPGieMSeKrgyKp3a4GBmW/Cpm2HdincYz9yozTX3x/aNHPK3KO1HmWubbQsBDZCSfyA7QWQEHo7cR3TO6Z3Z3Z3BO4JzWchNx5bulP7YH8DNK/qHtHgmUpamOm3VQWiqFhO0az2Kfylh3b8W5nIyssenBYiFjUnbQzBThQPaNHHCyZGOHhGxdIi8oBtGfjCd/ZUiOdl/Ko2GJSGHhqoqqgmLV3bEHtWmXj9yEFTL6RaGUoY77eQAk0aZY8XTKBDpuPLNKEvxraPx1sONjbn8lSypO44HETeU47WSmsIqj2pjCZ5UCOwRbHNj2Nt5FBY4OIuOvkIBGo4Pa9uo5GYlfbQzFp7kSlVirFHt7WCrY5ssmXbzd24jyaPXyyIGBPkI3GVV2cj2qLsMSrm8RTY9VYVQsA9xqlvoJk2duqOdz5NEPrq97VpjMy5Hl1kf+T7SpfVQWatBWhmDTxVR7ky9+7fMt+Vtp2Hl0+7sZObijKXE04Uv0zbDVHurRJqr88z2YG5HoMKrYGYtXdsQQe5zH4UCWNwrjndugUmFSOuDqHbUEFa3WxYwDBMOhGzsxaEJ3Ps612GNV3Hn7nGq7aKPcmaq32CZzbVMdliqWmPjNa2PoljTUtKOOrpt1fKq8Hpa7YWKxu1DPzjj2W5+RZ7WtdyBuaK+3WZgUxR7ozUz/mEzz99v8UXlMTD5VY1dddXTV9N7JdduquySjKtolthts6BDO1DWR7ADcgbDCqhlFfdsRdoPdNNQ/wBoTM/vt9ZpeH4m+5ksfR8wcehG41fTuwXXj1CkwVSnGaw0aPkvKdDqWJgYqrlaLU8zMK3HLIR+JRvCjTbpWuwx6u6/7D9zi09tFHu2md/tTL/2Nvu0OjtYX1BtW/8Azpeq8urAMNU0xqGFO5o0zJslOhynTMWqBQo8jKGXP0cGXUlWPp+CogddhFBY01itDMGmKPeNM/8A2RMz+9ByeteFes293P6aLqD9zrxH49QwK8tcvGemw+n4ebRDuuAPvlFXdsrXaAe8aakP80zh/l0xeefM0bZnT6fo55X59Qw0y6cmlkf8Nf8ADTx6GaaPRR70zU1+wTPHppTcNQmu4TC2YmHblPiY64tOVmU40q1XFsb8YdS3TXsTuVWjY/gH7YQ2pM0v9h70zLTnSJkrypU8WxrRdRDjUEgACZPE6vfjUtV9P2M+L5bn7VWm565g6WOtaaQxu1bowBGoUdm/zoN2lY4oZpZ/yD3zy9O3dLk4WfT2T6eTNwqcsfoa741CY9XlPrM3Ft07Jx9bqZbNZxlGbn25rY+kuiYtb1VdPqOva9vRvNUPTETnd0wW45Q9801Gv7RMyvktNjVW4WSuVR11TNbDNVi219MvKrxa8a5cinqQCLtJxbCmjYoL6fitV+jVbqNh0+pB/gs/n5VHIzEr4V9FPCxDuPemWruLE7Vkyae22BlviXY9yX1dMzGTKpXxulsNdG1msX2zKruK6QvHTvx/UrfY/wDPyovEYtXcfqZgPzx/fMJmU9xRGUOt9JqOFl2YlmDm1Za9dRo8DmqQRl75GVWoRPx67f3M3yD1iLxlNZsZFCL5MTJ7EoyarffGOJmUbEGEBhfjFIrFGwtaKym6u5ZmY65NApzqJpOnnH/Jn5Axca9yfIqloqhZTU1rVoK18+n5Hdr96RHWZWPxIPS7GV5ZU9crsetsbWrUmPqWNf8AldlRdVzvFWsdzACYtfSjGLRVCjy22rWKMnm5mA/DJHviIyzIxd4d1PSzFRo+NYvSnJuolOt3LKtax2iahivFsRvPk5VWMupai+UWJeCswVgdEXk1NCJ07qQHfyZF4rlj7lG2I9QDxdDuPfERll1K2C3GdPIyK0yqUrBYCbjqt1qwZuSsGpZYn6pmT9VzI2pZZjMWPQkCGwTuGCwGV2uktue2DEuIrdqXU8lmRkcY7bRjvKv44p5UGYL8sb35EKwrLaVeWIa36Zrb22HdpvObQF4WYTumd2d2d2dwzuNOR6rXuO0IFAmFt4mant38T/XycneO3GE79KZgH7TNKP2D4EiMsz/747qgsbk7IYKzBWIibmjScm2ZWLZjO1fkrXclBDVCCOlR3GJXXYoqQS+o1MMy4BVe6y5D4cxlI61/zwTtaZprbXj4JpeeV8vc2Wpp445VBobTdOGYlOkYqSuqusS2pLU1DSGqjpvGBHSsbLhabScHI0MTIwciiFAYq8Z27NqMhkP7js1wADpZSlksAVz+4BMCMDjna6YzcchfgmlvpdP67ksV11O1Wn04hGNNYy2xaGz8poudlLMbWrVl+Lj6nXkUPS6JvPVTpuWMujpq+LT4TAUNkzPULk4x3o632dutzssqGyjGsK14r85SOV6/BNM9ON4mTj9yGqwdNMKnAmZipl1LodMfQ6ds3T7sWYuQ+NbqOR4nKxFC0aggbH+nWIzOl1YtquqsxMj9Qfi7F2x7e0379GIUZFvdextyo3NKc36EzTqvVfgjMqruoQUbpenC36fygPKwDLquJ4TImPmNUuTlNcPp/FNa9cjHqyFbR8QRrdMWpwA+JeFV8tBLbWsjv0ReMxKu2srpa0VYYBRYPg2EvoWyXUmrplVdxQSpw9a2V9axgG1u/uY9ouomv188LHbhfbpGLYaNKxqm8v1FewjOAe4s7iw2RmJgUmIvGYuPt0RS71VhVCwD4Qxll9XNCCrS/HFkemxemFpNt4prFVc16wLgVLztHn+oMZ7AyAztTtQVwKBK8ex5TjrX09ScWjthRNvh2Ey8fuT1Bh9QRsdFy0txplZVWMmfltmXaFi93I/BfpuLcdV06rEpQcmGJWItaJ03iK1hxscVxVg+IMZZfQtktrNTTMpgOx8bk7Eljgabbkmipaa/w/UVvLIwl3um8Wux5XhyusKFWAfFERlmoAdsTLO1Fa87P0OjejTcan8ZOwy7e/k4K7VmYKbqFgWAfG3OtaX2m6yZ/wDVpy8s78CW1ueur3dnAEReCGY9fCsCbfGsdhlXm+wS69apbc1s0VeWo+fXM8g4HPxnX6ksmKvK+Yy870+P1OzjQJfZ26ySxwdHa1cXDpxR5sm3s47MWbRcQUY/X6i/3cD+wzTv7V+OM1U/eJnn7tFoF+b+DWztpqDdx6Dr9Rf7uB/YZpn9w+OM1T+0TPH36BYEzfwa5/62n+3qSANXvXIzcAQzSx6j45pqa/YJlV9ysEqcfW7UA1ymfrmPP1yifrtMGuUz9bxp+t401PUvFpORndcTv3RrHaIpc0p20MwU4Uj44y5Q6upreXY62RsWwTsWTs2TsWTsWzsWTtWTtWRcaxouLWB4eqeGqnhaoMaqKAvTFq7tiCD49hMmgWixGqO/4d5vN5vN5vN5TjM8qrCAD5AxhHTeWYamNi2CGm2dqydm2eHtnhbJ4Rp4OeDE8Gs8Ik8JXPC1zwtcSlVirAPkyIVnCcJxnCcJwnCcJwnCcZxnGcZxgHy202m02m02m02m3/cH/8QAJhEAAQMDBAEFAQEAAAAAAAAAAQACEQMgQAQQEjBQEyExYHAyQf/aAAgBAwEBPwH9YCOw8ALJ+hG4WwoUKFFsKO0I9kqVKlSp3nuCOMMJtB5R07wiCPntGHpqftyO9SmHhERlmynLqXFq07Cwe6ceIlSqv9nrCPcEbGvLDIQqS6F6o48inagAQweC5GI8cPBjBCO4MGU94d/nccYNJ6xscEWAx7qrX5NgeBjriyc9okwq1AMEiwYY2dSc0Seokn5sCOENn6gubxtOnhnLehVawQU4y6bjiG31HRxz46oyj0BT9fPQEcuFChQoz5UqfyD/xAAlEQACAgIDAAICAgMAAAAAAAAAAQIRMUAQEjAgIUFRA1ATYHD/2gAIAQIBAT8B/wBvUbOqOqGq/oFgciMhq1/QIaoXD34H8nEZEo3vxwSzzGX4JRvex8YyJRvcWSWPlH7XwpHRDgdGdGdGdWdWUUKB0Q416QyT+Vv4Wd2KaHKjud0d0dkWuJSoU2ZH5wJ51kqQ8+cXRVjjWnBFEpesVRKV6SVmBv1gvsk6WnBE37QwTelFWN17xwSzooSok791gedGC/JJ6EcEs6McEs6ECa0FxPOgnRnQgvzxPRixxsar1jG+WrJRrRjL9mRw/XmofvlujuPSUqFK+JZ8bEzt9Dd8RwPOlAk68V9H1I/xko3zDBPOlAkrK8YuuJOuIxsSom9NSskr8u74SswOWqnY434qNigYJSvXi7RPPhDA5DevFWYJO34Y2YYJv78I5JY2Y4JL78IInjZi6MnRHQ6HQUUUikXQ3e1Z3Z3O7OzOzLZb/wCOf//EADwQAAECBAMFBgUEAQIHAQAAAAEAAgMQESESMVEgIjJBYTBAUHGBkQQTIzOhQlJicrEUggVDgJCSweHw/9oACAEBAAY/Av8Aqrq40C+m3ErYQrhpX1G4VVpqPHy52QV+HkNm3DzCDm5Hx4QxkLmV89FayvdWz0kYZyOXjzz1kSrK6Bkx2h8ed5yImBIePHQ3ljZ6q6shjnhdx/58d6iZOq6SwP8AQyq2xVDxjxx56SdPpLA/0Mg5tiFezxmPGwNTJrUZ9JYH+hkHNNCFo8ZjxprdBLy2eksD85BzTQhVydzHjL/aTjtXylhdxf5kHMzQc3xclE6px6SO1Q5KyoeKVf08wgRlPPxN/tIDUo9hQqozXXnLCHuAV3O99izne6tEcswfMLfh+y4sPmqg1HcKvcAtxhK+1+VvAtVWEEd4a3UyA0HZv2MwswsxtVY4hfVGIar6bPdcQHovuFfdcvuFcQ9lcNKvDHurscv1D0X3AvuN91xN91Rl3lYnmp2MTDQrR4zHd2jQSd2QRoKkrRXedqzis6+a3m+yzp59yo3eK4QqGxkHjkgRke7P9kTI7VldWnlLNZrNZrOWU90qkS3VYhfRcZXG5cZXEuSyauALgWTlzXEuMLMK2ZlkqhXzEqaGndnnqnbd5XVu1srq0+SyWSynms9oTd5yd593tKonaV1buNu1zWavlLJUaEGyb792c08jLEyzlQqolZdVfuVe4FzxbkuH8rdFJX4R3eos5UcKGWjtVR2cqDPYoBUqsQ4B+VfEfVZO919OIfVb7ba95qg1UE72aqNFu8Bv6pFxWIqgz2ABmVU3iczs0NwvmQuDmNO81PEZYnZKzR3kuOQRcecsI4RtF5/SJUBGzQ5J7NMu71PCJBoQAyHehDHO5l1O3FHkmsYaYs0wszrtNOre61QAzKDRLEcz3tzuXKXQWVNppPCbFC9HDIrG92JwynBdWjMe8sTnikjT9Nu7YzmcpX4R3t5kXabOWwIca7eRWLksTCCJUIqFibDFUQ28TTRVOfdegzkAMygO9tbqZAalGeGEwvcqxnhvQXWOFV8Pn0VspuwxBiwZJnW6jPqcDd1BjGgml6riwj+PdqBU585fMPp3xo6SaOkuiMePVnw7dMygILQGTMaCPp8xorZT3XEeSPyzn0Re7M7Gfc/mH0lTlz76fKRQCDP+W27lE/4fhw/T3Sv9LGNIrLDrO6MWEPpHMftXSeSuVSGxz/JbwbDHVfVe5/lZUEFnqqwHfLOmYX1mf7uztsdVTlzVlQKnPn310nKqDv1RLqDFY4tjZW0VeaEL4k73J8yDcFF0FpdBP4VgSt2FhGrrL60X0avt4j/K6o0UGzRwBHVF/wALY/sRBGFw5dpkqDNU95fMd6d+PlJyDRzNE1oyAon6M3RNvw8TeB4TpsZdnfdicnIw4oo4dlmrp3lKnIZ9/aekh5KAP5Sj1/eZmL+lg/PcMJs8cJTmPFHt7IJ5k/v7XaGTSoBOtJf6iGKtPF0lSG23N3IIQ2e+q+q+h0VMZb/YdoWhwxDlP57BvMz6hV7Lzk/v7hJ3ugRmEyIP1CVfkw6/1VBYSi/6nLlVE0a3qE5rrhpoNp76VwiqdbC8cplzzRoTonI1JmQciosLQ27IDSTx08AcOUi1O+Hd5t2fqDe/cF992HSiEOGLbfzoH262OnRfXaWu6XC3cbj5IN4WftTXs+KwROeFYYkUxXfuM4UT9wojt1Q0F5t628ADxyliGYTYjOJqERvqNNiFRmJrjdB7DVpnjiHyGqbEZkdihuFXCWf1Kvjd5lfL+S0DorRYuHSqAnBP8kewvmZtdofACCi0yqOErELtPEEHwzUGZhv99EaNxwvwt6Aa/wBlT4eDTrmvnfEPq4qD5V7SC3qSjt1PCNlvS3gFRxCVDkumqxQzbm3Vbho/m07AiNH0nqoyUP4dmqa0ZAU7QjlDFNrqqBYW5bJBFQVuuvp4B8xvrKhyVWXag5poRzQb8UKj9wWKE8OHSTobueR0XymwidDRGLH+6fx2johz5eavmdq2Wqo3sKO4m+AYoeWk6jdK3gsUNxaeipHaHjUWKtEwnR1u1LnGgCrlCbwhVlZXlV9gqNFtq/ssLhSQ/lbwHFDsdFQ2M7bpWo6S+lEc3ovqsa/8LfD2K0ZvrZbr2nyO3WK6nTmqcMIfpWWxSoHmq5nWXG33Vtigu5YnFBwVUDoq+A7wW7vDY3gCgW1V1nPdiPHqrR4nuvvuX3fwF938BfeKq4knrsWldbrlf2CrgX+QgRLCzPVXzm32kz28D3gi0zppsZyuFkslksp57TMUhTOl0Fhh+66zKcJPHXwT0lVxTjrsUY2p6KpaGD+Swxm+vIrd2rTpojiFwrNC/jyKpi/C1PMrCzlK+xTUSI1Hgjz1kfYLfca9FqDkUXmJhANKUV2l5/kVSGxrfISLYjQ5p1Rf8PV7P28wuuxDEaHV5vXmqwIno5fUhGmouJ1wOprRUcatlwBWFJXF0QMhKyyTPOUM9fBH+cr8iqtKaxt6KI45OdaTfl8bjSuivHf7q0d/uqR2h7dRYr5vwzg2J/8As0YcZtCt1tfJXF+qrk4WcJxYvyx8wDMIYvORw+absE8+WwCKIVoBKGOvgmLk6WJvEuF0oOCwwywRPQ6LeiRCtyI8Hqqu3mfuCD4Z/wDqMQZUFEynMVRccwnN5Fs3sdk4UWF1nNyK4G1Rc7Mr+POdTkunKYbsfMPp4JTnyWF2cyEfh3nO7dkgioKo37brtlhpiCpSjU6O8UxWb5bFIrA5YjiA/snQBTCeYCIBxDVYXmlMlu1K3slQS6qp4jKopRVecXg297rOolUcQVRYhYfiQa/uC3cbj5KrWMDNEyIMnCssXNhUN2jlWhZ/UrFhLz/LahwQbG52LCfVY3+gkGhADwgtVDnKrbOV2mTXvIZDN+qaxnC0Uk5vNxoExo5mnYMjMFcNjLNZrNWCyoOqqbulQZq/EfCqt4lQ2M6JsImkRlqayrFd6c1idZo4QvnOG4z/AD2NXQ6HVtkHse6pNKFAaq9St1oE6NC1d4ZcX1VDL5jfVVGap8+JTzVSalVcMELUoMhijR2TIQ/SKquk7NW+fZUaKeHDWsnJrdTRccRVbDqdXX7OqiRP3FF2si4+IYnGyqcuQkPNQB/IdjRj2k9DsRDzduiQGkmt8PqV/AZS1dot5Q+lT2B+HhH+5/8AShfK4sWxBh/7k33k338Qwj9Uieaqc0H/ABBLGnlzX0m0J57cSJ+0VRc7M3QiOH1H38thv9EfKTvLxBgk0IYuFu92MT0TR12W/wBEfKTvLxBnlJp6Kh/WKdi/zCZ5jYqbBOcy7RYJxk8+IB2hlbMKosQqRWB/XJXhRFwRV9uIvtRPwvtxFwxfZcMX2QhsbhZWt+csyrPd7r7r/wDyW89x8yqNQbIam/iBByKLXSrkVahXAVwFcBXAVwFcDvZcDvZZU81vXK4Vl+VkfdZLdFJX4R4l11VHDuO9utQDRbxOhC3d1WoVwFcBXCsh7rkuILj/AAuIrNy5rL8rh/K4VutA/wCyL//EACsQAQACAAUCBAcBAQEAAAAAAAEAERAhMUFRYXEggZGhMEBQscHR8PHhgP/aAAgBAQABPyH/ANVvyBqsfRny5EeyeVPtxVGaZ8mZD5E3Pr6R1C+NB5MIrAxfXa82Nnf12WKi+6QS85lpDmYPQjmYPUl5yDVQREW73Qfrjl/7uEZ/mjtGsaY1DORj9Lp7RlAbMX10KN2f3m0uDZqMoxACMBq5QyBAsTd+vdz6LAoC10QHIes0AESMnHfBsRMkzgZAGD62MoT7Z4xxaLdCdV1zJYQLNJkFygxBZDMSZCzWOev14U2PdKwVjFUCJZpK6XKDGxc0MpFP9R9a0Yi2rlNx4pVAiWaS+lzgkXton63UHuMev+YLM41FkOfBepgdyZZOl5iYIYVVkeR9ZXXYfZNCdVW4rrx4btQHclG/Lowkdqh7zz8Dh+ri5oFyzOqvHI7XXxgJQqkg6afeJCxzWXSjF2ixlzrE6D1nWJf1Blq5PdjxHY+B+IhlaG8C7Q5CJAwzoDNSXeKd3DSaM0BdlPvzbmvxi/mc1KzpqURcg/IU1PWMeZuUzdFSrXX9Sdi1fMKuuPTFuOqc/BSm55CjCplP96f7c/0pk6SpWBm7B6MyIOBkzYtcuaP2EL/jwA/Ogm7HcQ32apvt2jbftTNee5H54EmnTDaNFiDScEdIXdhgMWR/cmb/AOBfy2nEUWvrUWU+CKlXR3CzQk7Ca2fOKaq+fgFNFn59zbvYn/fTk7jJNe0qVKlSpUqVK8QyAiQKPSZu3GvI2JN9Vn1IGcgs+VU7JYujYuLbbHfikVC5z/ImkMNw9IjaHjMJ1k6+dbCQ36YcoVvXedo/mnTaUAW4aS4ZbKFr9Fn+tAoAcu4QPVflDcaG/wCpDcXkw3Pag+qfKK49xg2nqzQm849D2YVzLXoglCseA4WNb0HyvrC33nd2WDmr4NdJvemAFBU1lHdNTUFfiJqVH23BM0tqrymkazox0E/i5TlOmzu+mE6KWaJ4RktsBn4hb9sH+PpNHymhmZY61o3U6TpnjFSo0zXmALUZyynyIUCrC24Phgbp10RzZI5lOkzoJ3mEJtqxxgJm5po+TZpi6ogMtKPZYzBSbS/7MVcEAVBdUM7XyWSxfc/FC0DWU5LwiyDM67eqVgh0ixTRvPXpKiHygg7d35j90CXzQ0h6VDD+grwElJoEGB8WsGZ38kUZDNeyPBjmd08z4dAKCQqjQ+LvfKOZ5vBCEKDIixhcb8zqwBUHywMOkArPsQjs5EcbvtKfgAl2lBBYC+R0PCyETUZQT/i9Pl8tgUUTuovSKAkbOQczQp5YNMD5VmQ6Fs1F16QmcP5WZjvtFtt8B50Mru4JEk2Hwk42iknFK9G3y3e2ZVflYzVJYDeRjNfLMq170EEuK4idWZvtt4S5eb7xhmao44iKOWd/ER/Qv5WyzQmumVNoD3jmR/4zDD5hzrmrshLsIu6vFaKvQ8O9C+2gMjFqwOacQQS9G7vAQ6AfKWIIAAmR/wCBFMxG69cEZfMMrzWqPOGdIkW23WXXGOgKH2mOdENHUggOcu+k6sbMFJk1GVODpedRMhdB7mIiWs1+Uzh1ZkbzRoUaQE3eQEAXXd5fmx5uPTFCXDBzLTmdugGkEBvdS74NLr/xNbiLJooWzup5le6DupoXl/ZTNpYtkEqvAKiq25vymdOhEALXIgF3l1imw5uCD5rfxr4LuJaOq8svQSvUkbu0X0iyt8EERLGNZb0/7lNfiNX3tUKAgrRtcSW3twBdC4vp3hyjSs/kGIIQBKin+bxRz2c4IAFBD82V9AGB30gILFNbDMOk1+VtiUlgN2wxBACOozPi/odJesxaNCfolgZ0XKR6o5+hKpe4yJaqHhbLh3LhSFDYZj5zPTM+ErgW1xRqOGfOqJwuamQGQJmGYuRAPczWAfNvbn2hPtftGw4EuUzL9tpqIj+HeCgCmq4eXtDb98RLAUjvNqohmzlC3BK1X+BzHyfLfyyuQ80qoOAK8LZz1BYzuhE5eUQPqkVAqnX4FoOUG9MM66QSdrSAzru5iljR/d8MPnBrrDAK8r7RdaEIegkI4b/Fa++ObfL7v/HgBbAPb4eQ1Bk/mbQHPMCqdfgCmkAh7oJatIY3eUAACg+dtEr5VIaSpuY81Xpn+MGNq/PizByur5BFT5Bf1LEApPhCoegDBcnUlEPnd3SGDtvKDoj7xWDRIdO7nAozmQ07TN3LmBmcaDNYcuHTIIIgjY/DSA1A5mI6EtP8ZTJGj8E0SVryXBoep8/VFrVkcq25C6iLJoCgxzltpypDQgbGBC3un0mVqFmVUf1s14rTxZ6rFDeoKc/e7OcQOBtWB+/QzpiDdhSRds9Jt8CpgW0To+rBTzA/PWCdZVnaGZODhy7S1nM9Lc8Im4GmQkNY39d5TyPqvPiAEcxhS/UD3IQN3JsiztRT7zLjfkH7sWkxoWfeG7Uuisao3V5f7BQ6+OvqTzAsGdIB+fTLQs8r2ilf1ntERpLJqWuXI48C4al38QBQbExS9ka9kva43XwOhE1GU0zsHpLV2lP2libC5E84HkfRQTNArPHtBHt4xlsCiiZny3BlYbDKBNH54wTFjlH2Bp1IZxu2XScaVykHP7bpjoGuYNVzCVmexa/U9uD/AImRRu7NGKlUC2xyOr7jfxB57/D1jvwgK0awOpvMsvy+Ay075nlD51wsteHr0i5jA7U5K9I1IGtpFpoOqMUsmcK91WnJANKiyprRcj3f+QS6EPiEU/edWLavPgCqNYI5gfpbvEEhk8CQr2q8tpkvesn54YLoPb+cBiNqXX5gjQs8DJJdJ535kN9RmH5mw5l1nLIseTH6Tpmtf38RRNFHmGVVva+DRNOYBl6ygZN3CHS/74kiUiZJEdbynqQ+fhWLq4YnqYmkc2OTSEg3dVKz+SDaUAXd0KSz4hszWrErXkeTrLJYaagHNwp+x7sBgB4rm89uUWs20rBV9hf59dhXHqOxlgKGzBmSU6TO/KaTPQ60IjSUyupurL0lYDcmaZMp1LPaaX+78p7fI+Ou/hqXlOwm5d41kqiNaJrWfeEqld3gUHfRyzYi1mQAtCdPAL5TxERSs4iZxVjRLlN7rlSNEv5+/ApGZzuTNPyJedOsHAmu6SpgrpcqbQbQYCmmU9gRz98M3I7hAt/9dJ/H9UHpPsBG73qq3HVEhtFzNvLtOIM1CrjaUA8oezRc5TsynNg6CS8Dtm7+EHMrUV2xX2ztiDLpuHsh9CLEyb53mwRDDp8y56YCNFhyI3b1mnk6CW4S0W4TpEU3IrqsUBWrhuKzSZs6r98Ad4Mb3rMw2W8Dk1hFbrgsxL+G3g7Nt9BViyKBqZoTKaJ1NXLdmdxWqEFqrHJ/ALYH3C17TKlvT7Bm96PBqehF7VG3+s1Qx0zQG5mlvyj1LzQyaPVzRlqmpBPbHmQOZoxa83XF0OstcA/q6pp+hu60hNZkuiVCbjsgkWIz3JBZma/1jIlCD2sNpMEckw/wuBrKEVzwqeWFiDfQL6xFrP71l/DjaqekPRmyqvuiEVdTaNZlIxdv2YbRDgw9wxkxT7SrmpWlzTUAsW7sjPIx6/REUXZ/eGkzsGd/vCx0YgwStTaAh+AMHwmSKGb8jT7Rm/M2+8bP4INo93hevAlRB2d4uRuxEHeDYSvw7cuLanaAp1h6LAQdcB0UIU6y+3aFeAuyu6Xjvh5jCSol6yy1DesY4nGafoeyHJ5xSxkm45i+flGDKChYc7++GdersNVD+20R/ocZlsfy3xKKyamw4YF2GAdspT0yE8wpNNHzgm1a+SY6zQUbWOvkOZpO4j83qR83VoggEbHBStDeJZodE0PQjmEp7TftCgoi4C3PpOj6EYKvLUuGPAoQcOK9TtHaS2b7nhNMCkZa/YDpgHYHS8qmT7Wo3ltIaH3eCgYNL1JZ03NvJHvGq9z5uArByG8S02ozQC+hHbVcDSX/AHYFtGsrdUyX/DFjRQGs4UsONpUaQ/QnDAoZmm4la5lq4My1/JCKKLE2YQrDz+5Mt+JkjutDm+sJOsg4wPJ5F9cpxoF3xcZlz2PSDqDpe/aBWnhuWD7/ABKE3Oo+k6kGGquXE08y5g6M4sA5wWaiL7TTaMOqH0MXgE9vpEB0NYMefxTLXJcmeAdDo6ogfVQYIhywedxtQH7po8bl66TY5iN5jHhFuEHeOeJoHWZJUdydosKQ2tCZ/m1HBPoxMOhpH3maGjZgwWnJUZlqZQxwMzZyYPijsdXlOOQ4SN0Q9fgnVz3ITDoq5T+6p94ThAXGM0p+0BvU1cIfSBcugnlBrL6WOjCavkfzEBEGiRX3xjhSaqwmzcLN7TZ+U+FeTK53f+Sm2G4xjXKuXKbl/SBgB0lH00AF3Qwd5USgNSgzTXxZ+o2AOAKPhEi0M46+6nbaWpq/aKCCu2jwbh9MdUhNPQ8iEVDzHci+BcQl2oDXgqBr3iC0DVgB7KnTOkBngkV9MFkoM2XPTQ/mCEU9hGjJRoEvNWXPT4FBfgjfWVpxv4Moeq+06QIZW9htBD6axrDN15QwO2jvGKWtZnRADq/UYc4ba+MmN2GctrPWZLDsuzY8DseB93FhHlg/TtEs6ZcHTYXKL2Njnj4KUd6e5Ls3BDSGh4PZPu4s/i6/T+mDM6sFG0YvfVo76/B/qcz+dzDF0oGqxTaQ3NTP7Zg9Fn0/ol5+t54bXqiAUVWPEA1nY2m2namf4R+47Xt/uf6X7Tdn6fuG8Xk/cf8Amf3L4zstng/1oaJ+aBftQnKeoynlsEzN1XljlbeR9P6JpnFTX6PeDFqd83miB6MRh/g+JYSEGs6+YMUea5/VZ1vqwALe92D0A6RY4PV9en1AOFQXI6Rk1ddmEXLwuXLly/GBm0iY39yVFBKvqAwRKBOGIW1epPyAgPwT/Hg2/wA4NsQNqnzhv+lB7wN70obvrEP98OT6p/JQ/wC5Z9jDBrh9RSW4LD8VAeYCvqlR+C8KlSpUr/15/9oADAMBAAIAAwAAABDzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzyW03vzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzjDaujzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzgbLsRPzzzzzzzzzzzzzzzzzzzzzzzzzzzzyzntugRrzzzzzzzzzzzzzzzzzzzzzzzzzzzzy0L5YCB7zzzzzzzzzzzzzzzzzzzzzzzzzzziRP775IvjjDzzzzzzzzzzzzzzzzzzzzzzzx1F77750PrLKgNTfDz3fr5ktPzzzzzzzzzzyrT7776NXEctOpI3iyGvVYyCLLzzzzzzzzzwynL6Ne77777569G/wDv/HP3ztL8888888888fgaju+04++++++n+++++mZihc88888888886UX2+V2/b3++++++++++qG1Y88888888888jRX++Q36/W+++++++++iQ+k88888888888sdlaP7Ly/R+++++++++uIYi888888888888oaztcs6TSjlT2++++2+gYt0888888888888oiVEh8s/sc88pS+++LDybE8888888888888sk89JUw888888o++++/jFc88888888888888IEMM8h88sYkwsm+++fAC888888888888888cU30sc508cc88D++ixSS088888888888888ce/z8Jq888888v8Apzow9ldPPPPPPPPPPPPPPMBOk++dNPPOHV8T6QxaYPPPPPPPPPPPPPPPLHAfSrDwzwy8/wAOrsaSuUHzzzzzzzzzzzzzzzzxBO6sUH/uOedDNHbrBTzzzzzzzzzzzzzzzzzgNrQEmWzThJAsZv6UDzzzzzzzzzzzzzzzzzqkRXyRUDTxw8wgQoWDzzzzzzzzzzzzzzzzzyYL3nyXzzzznwqJTzzzzzzzzzzzzzzzzzzzyxYrK0Tzzzzz2Tczzzzzzzzzzzzzzzzzzzzzy+i7zzyzTwbJYzzzzzzzzzzzzzzzzzzzzzyiNJzzzx1TyL9TzzzzzzzzzzzzzzzzzzzzzzyFrTDTSFn3E/TzzzzzzzzzzzzzzzzzzzzzyguSiCRIlyha/wA88888888888888888888888ov8CBzxXmyc8888888888888888888888888MsMccc8s888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888//xAAjEQEAAgEFAAICAwAAAAAAAAABABExECAhMEBBUVBxYHCR/9oACAEDAQE/EP5eFyiURK/AHBFYNR5PwHxMafEfwQol+/COpCX7sG0Yl+wzMNynEsnE4lNFpaWlMqVKhFIldpddpCHUU0WSyMWw5j2Mtb66lSpW0URz1jUS4lbBbqv3PhriFCtxvFyovacRb1B/xQRxpWnMRI9eYcRb7QuKoapeQi37wbEA8DEKH31iLvZbLoyoP1cRWG6/caUr6wtjwd5iOdhBrEUseOwKi33mI7a21trQfMXwGI58DMI+ENailxkSnaeI8zGwJQ4OseMolzGiIHxBMqvPUF65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',
  );
})();
