//Tue Jan 06 2026 05:07:09 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var n = require("./vendors.js");
function e(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var r,
  i = {
    exports: {}
  };
var u = (r || (r = 1, i.exports = function () {
    function t(n, r, i) {
      function u(a, s) {
        if (!r[a]) {
          if (!n[a]) {
            if (!s && e) {
              return e(a);
            }
            if (o) {
              return o(a, !0);
            }
            var c = new Error("Cannot find module '" + a + "'");
            throw c.code = "MODULE_NOT_FOUND", c;
          }
          var l = r[a] = {
            exports: {}
          };
          n[a][0].call(l.exports, function (t) {
            return u(n[a][1][t] || t);
          }, l, l.exports, t, n, r, i);
        }
        return r[a].exports;
      }
      for (var o = e, a = 0; a < i.length; a++) u(i[a]);
      return u;
    }
    return t;
  }()({
    1: [function (t, n, e) {
      n.exports = {
        name: "@breejs/later",
        description: "Maintained fork of later. Determine later (or previous) occurrences of recurring schedules",
        version: "4.1.0",
        author: "BunKat <bill@levelstory.com>",
        bugs: {
          url: "https://github.com/breejs/later/issues",
          email: "niftylettuce@gmail.com"
        },
        contributors: ["BunKat <bill@levelstory.com>", "Nick Baugh <niftylettuce@gmail.com> (http://niftylettuce.com/)", "yrambler2001 <yrambler2001@gmail.com> (https://yrambler2001.me/)"],
        devDependencies: {
          "@babel/cli": "^7.10.5",
          "@babel/core": "^7.11.1",
          "@babel/plugin-transform-runtime": "^7.11.0",
          "@babel/preset-env": "^7.11.0",
          "@commitlint/cli": "^18.4.3",
          "@commitlint/config-conventional": "^18.4.3",
          babelify: "^10.0.0",
          benchmark: "^2.1.4",
          browserify: "^16.5.2",
          "cross-env": "^7.0.3",
          eslint: "^7.7.0",
          "eslint-config-xo-lass": "^2.0.1",
          "eslint-plugin-compat": "^3.8.0",
          "eslint-plugin-node": "^11.1.0",
          fixpack: "^4.0.0",
          husky: "^8.0.3",
          "lint-staged": "^15.1.0",
          mocha: "^10.2.0",
          nyc: "^15.1.0",
          "remark-cli": "11",
          "remark-preset-github": "^4.0.4",
          rimraf: "^5.0.5",
          semver: "^7.3.2",
          should: "^13.2.3",
          sinon: "^11.1.2",
          tinyify: "^3.0.0",
          xo: "^0.33.0"
        },
        engines: {
          node: ">= 10"
        },
        files: ["lib", "dist"],
        homepage: "https://github.com/breejs/later",
        husky: {
          hooks: {
            "pre-commit": "lint-staged",
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
          }
        },
        jsdelivr: "dist/later.min.js",
        keywords: ["agenda", "async", "await", "bee", "bee", "bree", "bull", "bull", "callback", "cancel", "cancelable", "child", "clear", "cron", "cronjob", "crontab", "date", "dates", "day", "dayjs", "delay", "english", "express", "expression", "frequencies", "frequency", "frequent", "friendly", "graceful", "human", "humans", "interval", "job", "jobs", "js", "koa", "koatiming", "lad", "lass", "later", "moment", "momentjs", "mongo", "mongodb", "mongoose", "p-cancel", "p-cancelable", "p-retry", "parse", "parser", "pretty", "process", "processors", "promise", "promises", "queue", "queues", "readable", "recur", "recurring", "redis", "redis", "reload", "restart", "run", "runner", "schedule", "scheduler", "setup", "spawn", "tab", "task", "tasker", "time", "timeout", "timer", "timers", "translated", "universalify", "worker", "workers"],
        license: "MIT",
        main: "lib/index.js",
        publishConfig: {
          access: "public"
        },
        repository: {
          type: "git",
          url: "https://github.com/breejs/later"
        },
        scripts: {
          benchmark: "benchmark/constraint/next-bench.js && benchmark/core/schedule-bench.js",
          browserify: "browserify src/index.js -o dist/later.js -s later -g [ babelify --configFile ./.dist.babelrc ]",
          build: "npm run build:clean && npm run build:lib && npm run build:dist",
          "build:clean": "rimraf lib dist",
          "build:dist": "npm run browserify && npm run minify",
          "build:lib": "babel --config-file ./.lib.babelrc src --out-dir lib",
          coverage: "nyc report --reporter=text-lcov > coverage.lcov",
          lint: "npm run lint:js && npm run lint:md && npm run lint:lib && npm run lint:dist",
          "lint:dist": "eslint --no-inline-config -c .dist.eslintrc dist",
          "lint:js": "xo",
          "lint:lib": "eslint -c .lib.eslintrc lib",
          "lint:md": "remark . -qfo",
          minify: "cross-env NODE_ENV=production browserify src/index.js -o dist/later.min.js -s later -g [ babelify --configFile ./.dist.babelrc ] -p tinyify",
          nyc: "cross-env NODE_ENV=test nyc mocha test/**/*-test.js --reporter dot",
          pretest: "npm run build && npm run lint",
          test: "cross-env NODE_ENV=test mocha test/**/*-test.js --reporter dot --exit",
          "test-coverage": "cross-env NODE_ENV=test nyc npm run test"
        },
        unpkg: "dist/later.min.js",
        xo: {
          prettier: !0,
          space: !0,
          extends: ["xo-lass"],
          rules: {
            complexity: "warn",
            "default-case": "warn",
            eqeqeq: "warn",
            "guard-for-in": "warn",
            "max-params": "warn",
            "new-cap": "warn",
            "no-case-declarations": "warn",
            "no-multi-assign": "warn",
            "no-negated-condition": "warn",
            "no-return-assign": "warn",
            "no-unused-vars": "warn",
            "no-var": "warn",
            "prefer-const": "warn",
            "prefer-rest-params": "warn",
            "unicorn/no-fn-reference-in-iterator": "warn",
            "unicorn/prefer-number-properties": "warn",
            "unicorn/prevent-abbreviations": "warn"
          },
          overrides: [{
            files: "example/**/*.js",
            rules: {
              "no-unused-vars": "warn"
            }
          }, {
            files: "test/**/*.js",
            env: ["mocha"],
            rules: {
              "new-cap": "warn",
              "no-unused-vars": "warn",
              "unicorn/prevent-abbreviations": "warn"
            }
          }]
        }
      };
    }, {}],
    2: [function (t, n, e) {
      var r = {
        version: t("../package.json").version
      };
      function i(t, n) {
        var e = t.toLocaleString("en-US", {
            hour12: !1,
            timeZone: n,
            timeZoneName: "short"
          }).match(/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/).map(function (t) {
            return 1 === t.length ? "0" + t : t;
          }),
          r = new Date("".concat(e[3], "-").concat(e[1], "-").concat(e[2], "T").concat(e[4].replace("24", "00"), ":").concat(e[5], ":").concat(e[6], "Z"));
        return t.getTime() - r.getTime();
      }
      r.array = {};
      r.array.sort = function (t, n) {
        t.sort(function (t, n) {
          return Number(t) - Number(n);
        });
        n && 0 === t[0] && t.push(t.shift());
      };
      r.array.next = function (t, n, e) {
        for (var r, i = 0 !== e[0], u = 0, o = n.length - 1; o > -1; --o) {
          if ((r = n[o]) === t) {
            return r;
          }
          if (!(r > t || 0 === r && i && e[1] > t)) {
            break;
          }
          u = o;
        }
        return n[u];
      };
      r.array.nextInvalid = function (t, n, e) {
        for (var r = e[0], i = e[1], u = n.length, o = 0 === n[u - 1] && 0 !== r ? i : 0, a = t, s = n.indexOf(t), c = a; a === (n[s] || o);) if (++a > i && (a = r), ++s === u && (s = 0), a === c) {
          return;
        }
        return a;
      };
      r.array.prev = function (t, n, e) {
        for (var r, i = n.length, u = 0 !== e[0], o = i - 1, a = 0; a < i; a++) {
          if ((r = n[a]) === t) {
            return r;
          }
          if (!(r < t || 0 === r && u && e[1] < t)) {
            break;
          }
          o = a;
        }
        return n[o];
      };
      r.array.prevInvalid = function (t, n, e) {
        for (var r = e[0], i = e[1], u = n.length, o = 0 === n[u - 1] && 0 !== r ? i : 0, a = t, s = n.indexOf(t), c = a; a === (n[s] || o);) if (--a < r && (a = i), -1 == --s && (s = u - 1), a === c) {
          return;
        }
        return a;
      };
      r.day = r.D = {
        name: "day",
        range: 86400,
        val: function (t) {
          return t.D || (t.D = r.date.getDate.call(t));
        },
        isValid: function (t, n) {
          return r.D.val(t) === (n || r.D.extent(t)[1]);
        },
        extent: function (t) {
          if (t.DExtent) {
            return t.DExtent;
          }
          var n = r.M.val(t),
            e = r.DAYS_IN_MONTH[n - 1];
          2 === n && 366 === r.dy.extent(t)[1] && (e += 1);
          return t.DExtent = [1, e];
        },
        start: function (t) {
          return t.DStart || (t.DStart = r.date.next(r.Y.val(t), r.M.val(t), r.D.val(t)));
        },
        end: function (t) {
          return t.DEnd || (t.DEnd = r.date.prev(r.Y.val(t), r.M.val(t), r.D.val(t)));
        },
        next: function (t, n) {
          n > r.D.extent(t)[1] ? n = 1 : n = n;
          var e = r.date.nextRollover(t, n, r.D, r.M),
            i = r.D.extent(e)[1];
          n > i ? n = 1 : n = n || i;
          return r.date.next(r.Y.val(e), r.M.val(e), n);
        },
        prev: function (t, n) {
          var e = r.date.prevRollover(t, n, r.D, r.M),
            i = r.D.extent(e)[1];
          return r.date.prev(r.Y.val(e), r.M.val(e), n > i ? i : n || i);
        }
      };
      r.dayOfWeekCount = r.dc = {
        name: "day of week count",
        range: 604800,
        val: function (t) {
          return t.dc || (t.dc = Math.floor((r.D.val(t) - 1) / 7) + 1);
        },
        isValid: function (t, n) {
          return r.dc.val(t) === n || 0 === n && r.D.val(t) > r.D.extent(t)[1] - 7;
        },
        extent: function (t) {
          return t.dcExtent || (t.dcExtent = [1, Math.ceil(r.D.extent(t)[1] / 7)]);
        },
        start: function (t) {
          return t.dcStart || (t.dcStart = r.date.next(r.Y.val(t), r.M.val(t), Math.max(1, 7 * (r.dc.val(t) - 1) + 1 || 1)));
        },
        end: function (t) {
          return t.dcEnd || (t.dcEnd = r.date.prev(r.Y.val(t), r.M.val(t), Math.min(7 * r.dc.val(t), r.D.extent(t)[1])));
        },
        next: function (t, n) {
          n > r.dc.extent(t)[1] ? n = 1 : n = n;
          var e = r.date.nextRollover(t, n, r.dc, r.M);
          n > r.dc.extent(e)[1] ? n = 1 : n = n;
          var i = r.date.next(r.Y.val(e), r.M.val(e), 0 === n ? r.D.extent(e)[1] - 6 : 1 + 7 * (n - 1));
          return i.getTime() <= t.getTime() ? (e = r.M.next(t, r.M.val(t) + 1), r.date.next(r.Y.val(e), r.M.val(e), 0 === n ? r.D.extent(e)[1] - 6 : 1 + 7 * (n - 1))) : i;
        },
        prev: function (t, n) {
          var e = r.date.prevRollover(t, n, r.dc, r.M),
            i = r.dc.extent(e)[1];
          n > i ? n = i : n = n || i;
          return r.dc.end(r.date.prev(r.Y.val(e), r.M.val(e), 1 + 7 * (n - 1)));
        }
      };
      r.dayOfWeek = r.dw = r.d = {
        name: "day of week",
        range: 86400,
        val: function (t) {
          return t.dw || (t.dw = r.date.getDay.call(t) + 1);
        },
        isValid: function (t, n) {
          return r.dw.val(t) === (n || 7);
        },
        extent: function () {
          return [1, 7];
        },
        start: function (t) {
          return r.D.start(t);
        },
        end: function (t) {
          return r.D.end(t);
        },
        next: function (t, n) {
          n > 7 ? n = 1 : n = n || 7;
          return r.date.next(r.Y.val(t), r.M.val(t), r.D.val(t) + (n - r.dw.val(t)) + (n <= r.dw.val(t) ? 7 : 0));
        },
        prev: function (t, n) {
          n > 7 ? n = 7 : n = n || 7;
          return r.date.prev(r.Y.val(t), r.M.val(t), r.D.val(t) + (n - r.dw.val(t)) + (n >= r.dw.val(t) ? -7 : 0));
        }
      };
      r.dayOfYear = r.dy = {
        name: "day of year",
        range: 86400,
        val: function (t) {
          return t.dy || (t.dy = Math.ceil(1 + (r.D.start(t).getTime() - r.Y.start(t).getTime()) / r.DAY));
        },
        isValid: function (t, n) {
          return r.dy.val(t) === (n || r.dy.extent(t)[1]);
        },
        extent: function (t) {
          var n = r.Y.val(t);
          return t.dyExtent || (t.dyExtent = [1, n % 4 ? 365 : 366]);
        },
        start: function (t) {
          return r.D.start(t);
        },
        end: function (t) {
          return r.D.end(t);
        },
        next: function (t, n) {
          n > r.dy.extent(t)[1] ? n = 1 : n = n;
          var e = r.date.nextRollover(t, n, r.dy, r.Y),
            i = r.dy.extent(e)[1];
          n > i ? n = 1 : n = n || i;
          return r.date.next(r.Y.val(e), r.M.val(e), n);
        },
        prev: function (t, n) {
          var e = r.date.prevRollover(t, n, r.dy, r.Y),
            i = r.dy.extent(e)[1];
          n > i ? n = i : n = n || i;
          return r.date.prev(r.Y.val(e), r.M.val(e), n);
        }
      };
      r.hour = r.h = {
        name: "hour",
        range: 3600,
        val: function (t) {
          return t.h || (t.h = r.date.getHour.call(t));
        },
        isValid: function (t, n) {
          return r.h.val(t) === n;
        },
        extent: function () {
          return [0, 23];
        },
        start: function (t) {
          return t.hStart || (t.hStart = r.date.next(r.Y.val(t), r.M.val(t), r.D.val(t), r.h.val(t)));
        },
        end: function (t) {
          return t.hEnd || (t.hEnd = r.date.prev(r.Y.val(t), r.M.val(t), r.D.val(t), r.h.val(t)));
        },
        next: function (t, n) {
          n > 23 ? n = 0 : n = n;
          var e = r.date.next(r.Y.val(t), r.M.val(t), r.D.val(t) + (n <= r.h.val(t) ? 1 : 0), n);
          !r.date.isUTC && e.getTime() <= t.getTime() && (e = r.date.next(r.Y.val(e), r.M.val(e), r.D.val(e), n + 1));
          return e;
        },
        prev: function (t, n) {
          n > 23 ? n = 23 : n = n;
          return r.date.prev(r.Y.val(t), r.M.val(t), r.D.val(t) + (n >= r.h.val(t) ? -1 : 0), n);
        }
      };
      r.minute = r.m = {
        name: "minute",
        range: 60,
        val: function (t) {
          return t.m || (t.m = r.date.getMin.call(t));
        },
        isValid: function (t, n) {
          return r.m.val(t) === n;
        },
        extent: function (t) {
          return [0, 59];
        },
        start: function (t) {
          return t.mStart || (t.mStart = r.date.next(r.Y.val(t), r.M.val(t), r.D.val(t), r.h.val(t), r.m.val(t)));
        },
        end: function (t) {
          return t.mEnd || (t.mEnd = r.date.prev(r.Y.val(t), r.M.val(t), r.D.val(t), r.h.val(t), r.m.val(t)));
        },
        next: function (t, n) {
          var e = r.m.val(t),
            i = r.s.val(t),
            u = n > 59 ? 60 - e : n <= e ? 60 - e + n : n - e,
            o = new Date(t.getTime() + u * r.MIN - i * r.SEC);
          !r.date.isUTC && o.getTime() <= t.getTime() && (o = new Date(t.getTime() + (u + 120) * r.MIN - i * r.SEC));
          return o;
        },
        prev: function (t, n) {
          n > 59 ? n = 59 : n = n;
          return r.date.prev(r.Y.val(t), r.M.val(t), r.D.val(t), r.h.val(t) + (n >= r.m.val(t) ? -1 : 0), n);
        }
      };
      r.month = r.M = {
        name: "month",
        range: 2629740,
        val: function (t) {
          return t.M || (t.M = r.date.getMonth.call(t) + 1);
        },
        isValid: function (t, n) {
          return r.M.val(t) === (n || 12);
        },
        extent: function () {
          return [1, 12];
        },
        start: function (t) {
          return t.MStart || (t.MStart = r.date.next(r.Y.val(t), r.M.val(t)));
        },
        end: function (t) {
          return t.MEnd || (t.MEnd = r.date.prev(r.Y.val(t), r.M.val(t)));
        },
        next: function (t, n) {
          n > 12 ? n = 1 : n = n || 12;
          return r.date.next(r.Y.val(t) + (n > r.M.val(t) ? 0 : 1), n);
        },
        prev: function (t, n) {
          n > 12 ? n = 12 : n = n || 12;
          return r.date.prev(r.Y.val(t) - (n >= r.M.val(t) ? 1 : 0), n);
        }
      };
      r.second = r.s = {
        name: "second",
        range: 1,
        val: function (t) {
          return t.s || (t.s = r.date.getSec.call(t));
        },
        isValid: function (t, n) {
          return r.s.val(t) === n;
        },
        extent: function () {
          return [0, 59];
        },
        start: function (t) {
          return t;
        },
        end: function (t) {
          return t;
        },
        next: function (t, n) {
          var e = r.s.val(t),
            i = n > 59 ? 60 - e : n <= e ? 60 - e + n : n - e,
            u = new Date(t.getTime() + i * r.SEC);
          !r.date.isUTC && u.getTime() <= t.getTime() && (u = new Date(t.getTime() + (i + 7200) * r.SEC));
          return u;
        },
        prev: function (t, n, e) {
          n > 59 ? n = 59 : n = n;
          return r.date.prev(r.Y.val(t), r.M.val(t), r.D.val(t), r.h.val(t), r.m.val(t) + (n >= r.s.val(t) ? -1 : 0), n);
        }
      };
      r.time = r.t = {
        name: "time",
        range: 1,
        val: function (t) {
          return t.t || (t.t = 3600 * r.h.val(t) + 60 * r.m.val(t) + r.s.val(t));
        },
        isValid: function (t, n) {
          return r.t.val(t) === n;
        },
        extent: function () {
          return [0, 86399];
        },
        start: function (t) {
          return t;
        },
        end: function (t) {
          return t;
        },
        next: function (t, n) {
          n > 86399 ? n = 0 : n = n;
          var e = r.date.next(r.Y.val(t), r.M.val(t), r.D.val(t) + (n <= r.t.val(t) ? 1 : 0), 0, 0, n);
          !r.date.isUTC && e.getTime() < t.getTime() && (e = r.date.next(r.Y.val(e), r.M.val(e), r.D.val(e), r.h.val(e), r.m.val(e), n + 7200));
          return e;
        },
        prev: function (t, n) {
          n > 86399 ? n = 86399 : n = n;
          return r.date.next(r.Y.val(t), r.M.val(t), r.D.val(t) + (n >= r.t.val(t) ? -1 : 0), 0, 0, n);
        }
      };
      r.weekOfMonth = r.wm = {
        name: "week of month",
        range: 604800,
        val: function (t) {
          return t.wm || (t.wm = (r.D.val(t) + (r.dw.val(r.M.start(t)) - 1) + (7 - r.dw.val(t))) / 7);
        },
        isValid: function (t, n) {
          return r.wm.val(t) === (n || r.wm.extent(t)[1]);
        },
        extent: function (t) {
          return t.wmExtent || (t.wmExtent = [1, (r.D.extent(t)[1] + (r.dw.val(r.M.start(t)) - 1) + (7 - r.dw.val(r.M.end(t)))) / 7]);
        },
        start: function (t) {
          return t.wmStart || (t.wmStart = r.date.next(r.Y.val(t), r.M.val(t), Math.max(r.D.val(t) - r.dw.val(t) + 1, 1)));
        },
        end: function (t) {
          return t.wmEnd || (t.wmEnd = r.date.prev(r.Y.val(t), r.M.val(t), Math.min(r.D.val(t) + (7 - r.dw.val(t)), r.D.extent(t)[1])));
        },
        next: function (t, n) {
          n > r.wm.extent(t)[1] ? n = 1 : n = n;
          var e = r.date.nextRollover(t, n, r.wm, r.M),
            i = r.wm.extent(e)[1];
          n > i ? n = 1 : n = n || i;
          return r.date.next(r.Y.val(e), r.M.val(e), Math.max(1, 7 * (n - 1) - (r.dw.val(e) - 2)));
        },
        prev: function (t, n) {
          var e = r.date.prevRollover(t, n, r.wm, r.M),
            i = r.wm.extent(e)[1];
          n > i ? n = i : n = n || i;
          return r.wm.end(r.date.next(r.Y.val(e), r.M.val(e), Math.max(1, 7 * (n - 1) - (r.dw.val(e) - 2))));
        }
      };
      r.weekOfYear = r.wy = {
        name: "week of year (ISO)",
        range: 604800,
        val: function (t) {
          if (t.wy) {
            return t.wy;
          }
          var n = r.dw.next(r.wy.start(t), 5),
            e = r.dw.next(r.Y.prev(n, r.Y.val(n) - 1), 5);
          return t.wy = 1 + Math.ceil((n.getTime() - e.getTime()) / r.WEEK);
        },
        isValid: function (t, n) {
          return r.wy.val(t) === (n || r.wy.extent(t)[1]);
        },
        extent: function (t) {
          if (t.wyExtent) {
            return t.wyExtent;
          }
          var n = r.dw.next(r.wy.start(t), 5),
            e = r.dw.val(r.Y.start(n)),
            i = r.dw.val(r.Y.end(n));
          return t.wyExtent = [1, 5 === e || 5 === i ? 53 : 52];
        },
        start: function (t) {
          return t.wyStart || (t.wyStart = r.date.next(r.Y.val(t), r.M.val(t), r.D.val(t) - (r.dw.val(t) > 1 ? r.dw.val(t) - 2 : 6)));
        },
        end: function (t) {
          return t.wyEnd || (t.wyEnd = r.date.prev(r.Y.val(t), r.M.val(t), r.D.val(t) + (r.dw.val(t) > 1 ? 8 - r.dw.val(t) : 0)));
        },
        next: function (t, n) {
          n > r.wy.extent(t)[1] ? n = 1 : n = n;
          var e = r.dw.next(r.wy.start(t), 5),
            i = r.date.nextRollover(e, n, r.wy, r.Y);
          if (1 !== r.wy.val(i)) {
            i = r.dw.next(i, 2);
          }
          var u = r.wy.extent(i)[1],
            o = r.wy.start(i);
          n > u ? n = 1 : n = n || u;
          return r.date.next(r.Y.val(o), r.M.val(o), r.D.val(o) + 7 * (n - 1));
        },
        prev: function (t, n) {
          var e = r.dw.next(r.wy.start(t), 5),
            i = r.date.prevRollover(e, n, r.wy, r.Y);
          if (1 !== r.wy.val(i)) {
            i = r.dw.next(i, 2);
          }
          var u = r.wy.extent(i)[1],
            o = r.wy.end(i);
          n > u ? n = u : n = n || u;
          return r.wy.end(r.date.next(r.Y.val(o), r.M.val(o), r.D.val(o) + 7 * (n - 1)));
        }
      };
      r.year = r.Y = {
        name: "year",
        range: 31556900,
        val: function (t) {
          return t.Y || (t.Y = r.date.getYear.call(t));
        },
        isValid: function (t, n) {
          return r.Y.val(t) === n;
        },
        extent: function () {
          return [1970, 2099];
        },
        start: function (t) {
          return t.YStart || (t.YStart = r.date.next(r.Y.val(t)));
        },
        end: function (t) {
          return t.YEnd || (t.YEnd = r.date.prev(r.Y.val(t)));
        },
        next: function (t, n) {
          return n > r.Y.val(t) && n <= r.Y.extent()[1] ? r.date.next(n) : r.NEVER;
        },
        prev: function (t, n) {
          return n < r.Y.val(t) && n >= r.Y.extent()[0] ? r.date.prev(n) : r.NEVER;
        }
      };
      r.fullDate = r.fd = {
        name: "full date",
        range: 1,
        val: function (t) {
          return t.fd || (t.fd = t.getTime());
        },
        isValid: function (t, n) {
          return r.fd.val(t) === n;
        },
        extent: function () {
          return [0, 3250368e7];
        },
        start: function (t) {
          return t;
        },
        end: function (t) {
          return t;
        },
        next: function (t, n) {
          return r.fd.val(t) < n ? new Date(n) : r.NEVER;
        },
        prev: function (t, n) {
          return r.fd.val(t) > n ? new Date(n) : r.NEVER;
        }
      };
      r.modifier = {};
      r.modifier.after = r.modifier.a = function (t, n) {
        var e = n[0];
        return {
          name: "after " + t.name,
          range: (t.extent(new Date())[1] - e) * t.range,
          val: t.val,
          isValid: function (t, n) {
            return this.val(t) >= e;
          },
          extent: t.extent,
          start: t.start,
          end: t.end,
          next: function (n, r) {
            r != e && (r = t.extent(n)[0]);
            return t.next(n, r);
          },
          prev: function (n, r) {
            r === e ? r = t.extent(n)[1] : r = e - 1;
            return t.prev(n, r);
          }
        };
      };
      r.modifier.before = r.modifier.b = function (t, n) {
        var e = n[n.length - 1];
        return {
          name: "before " + t.name,
          range: t.range * (e - 1),
          val: t.val,
          isValid: function (t, n) {
            return this.val(t) < e;
          },
          extent: t.extent,
          start: t.start,
          end: t.end,
          next: function (n, r) {
            r === e ? r = t.extent(n)[0] : r = e;
            return t.next(n, r);
          },
          prev: function (n, r) {
            r === e ? r = e - 1 : r = t.extent(n)[1];
            return t.prev(n, r);
          }
        };
      };
      r.compile = function (t) {
        var n,
          e = [],
          i = 0;
        for (var u in t) {
          var o = u.split("_"),
            a = o[0],
            s = o[1],
            c = t[u],
            l = s ? r.modifier[s](r[a], c) : r[a];
          e.push({
            constraint: l,
            vals: c
          });
          i++;
        }
        function f(t) {
          return "next" === t ? function (t, n) {
            return !t || !n || t.getTime() > n.getTime();
          } : function (t, n) {
            return !t || !n || n.getTime() > t.getTime();
          };
        }
        e.sort(function (t, n) {
          var e = t.constraint.range,
            r = n.constraint.range;
          return r < e ? -1 : r > e ? 1 : 0;
        });
        n = e[i - 1].constraint;
        return {
          start: function (t, u) {
            for (var o, a = u, s = r.array[t], c = 1e3; c-- && !o && a;) {
              o = !0;
              for (var l = 0; l < i; l++) {
                var f = e[l].constraint,
                  h = f.val(a),
                  v = f.extent(a),
                  d = s(h, e[l].vals, v);
                if (!f.isValid(a, d)) {
                  a = f[t](a, d);
                  o = !1;
                  break;
                }
              }
            }
            a !== r.NEVER && ("next" === t ? a = n.start(a) : a = n.end(a));
            return a;
          },
          end: function (t, n) {
            for (var u, o = r.array[t + "Invalid"], a = f(t), s = i - 1; s >= 0; s--) {
              var c,
                l = e[s].constraint,
                h = l.val(n),
                v = l.extent(n),
                d = o(h, e[s].vals, v);
              if (0 !== d) {
                !(c = l[t](n, d)) || u && !a(u, c) || (u = c);
              }
            }
            return u;
          },
          tick: function (t, e) {
            return new Date("next" === t ? n.end(e).getTime() + r.SEC : n.start(e).getTime() - r.SEC);
          },
          tickStart: function (t) {
            return n.start(t);
          }
        };
      };
      r.schedule = function (t) {
        if (!t) {
          throw new Error("Missing schedule definition.");
        }
        if (!t.schedules) {
          throw new Error("Definition must include at least one schedule.");
        }
        for (var n = [], e = t.schedules.length, i = [], u = t.exceptions ? t.exceptions.length : 0, o = 0; o < e; o++) n.push(r.compile(t.schedules[o]));
        for (var a = 0; a < u; a++) i.push(r.compile(t.exceptions[a]));
        function s(t, e, o, a, s) {
          var b,
            A,
            w,
            I = k(t),
            C = e,
            E = 1e3,
            S = [],
            M = [],
            B = [],
            z = "next" === t,
            T = z ? 0 : 1,
            O = z ? 1 : 0;
          if (!(o ? o = new Date(o) : o = new Date()) || !o.getTime()) {
            throw new Error("Invalid start date.");
          }
          for (l(t, n, S, o), h(t, i, M, o); E-- && C && (b = x(S, I)) && (!a || !I(b, a));) if (u && (v(t, i, M, b), A = g(t, M, b))) {
            f(t, n, S, A);
          } else {
            if (s) {
              var D = y(M, I);
              A = m(t, n, S, b, D);
              var P = z ? [new Date(Math.max(o, b)), A ? new Date(a ? Math.min(A, a) : A) : 0] : [A ? new Date(a ? Math.max(a, A.getTime() + r.SEC) : A.getTime() + r.SEC) : 0, new Date(Math.min(o, b.getTime() + r.SEC))];
              w && P[T].getTime() === w[O].getTime() ? (w[O] = P[O], C++) : (w = P, B.push(w));
              if (!A) {
                break;
              }
              f(t, n, S, A);
            } else {
              B.push(z ? new Date(Math.max(o, b)) : p(n, S, b, a));
              d(t, n, S, b);
            }
            C--;
          }
          for (var N = 0, j = B.length; N < j; N++) {
            var q = B[N];
            "[object Array]" === Object.prototype.toString.call(q) ? B[N] = [c(q[0]), c(q[1])] : B[N] = c(q);
          }
          return 0 === B.length ? r.NEVER : 1 === e ? B[0] : B;
        }
        function c(t) {
          if (t instanceof Date && !isNaN(t.valueOf())) {
            return new Date(t);
          }
        }
        function l(t, n, e, r) {
          for (var i = 0, u = n.length; i < u; i++) e[i] = n[i].start(t, r);
        }
        function f(t, n, e, r) {
          for (var i = k(t), u = 0, o = n.length; u < o; u++) if (e[u] && !i(e[u], r)) {
            e[u] = n[u].start(t, r);
          }
        }
        function h(t, n, e, i) {
          for (var u = 0, o = n.length; u < o; u++) {
            var a = n[u].start(t, i);
            a ? e[u] = [a, n[u].end(t, a)] : e[u] = r.NEVER;
          }
        }
        function v(t, n, e, i) {
          for (var u = k(t), o = 0, a = n.length; o < a; o++) if (e[o] && !u(e[o][0], i)) {
            var s = n[o].start(t, i);
            s ? e[o] = [s, n[o].end(t, s)] : e[o] = r.NEVER;
          }
        }
        function d(t, n, e, r) {
          for (var i = 0, u = n.length; i < u; i++) if (e[i] && e[i].getTime() === r.getTime()) {
            e[i] = n[i].start(t, n[i].tick(t, r));
          }
        }
        function p(t, n, e, r) {
          for (var i, u = 0, o = n.length; u < o; u++) if (n[u] && n[u].getTime() === e.getTime()) {
            var a = t[u].tickStart(e);
            if (r && a < r) {
              return r;
            }
            if (!i || a > i) {
              i = a;
            }
          }
          return i;
        }
        function g(t, n, e) {
          for (var r, i = k(t), u = 0, o = n.length; u < o; u++) {
            var a = n[u];
            !a || i(a[0], e) || a[1] && !i(a[1], e) || r && !i(a[1], r) || (r = a[1]);
          }
          return r;
        }
        function y(t, n) {
          for (var e, r = 0, i = t.length; r < i; r++) !t[r] || e && !n(e, t[r][0]) || (e = t[r][0]);
          return e;
        }
        function m(t, n, e, r, i) {
          for (var u, o = k(t), a = 0, s = n.length; a < s; a++) {
            var c = e[a];
            if (c && c.getTime() === r.getTime()) {
              var l = n[a].end(t, c);
              if (i && (!l || o(l, i))) {
                return i;
              }
              u && !o(l, u) || (u = l);
            }
          }
          return u;
        }
        function k(t) {
          return "next" === t ? function (t, n) {
            return !t || !n || t.getTime() > n.getTime();
          } : function (t, n) {
            return !t || !n || n.getTime() > t.getTime();
          };
        }
        function x(t, n) {
          for (var e = t[0], r = 1, i = t.length; r < i; r++) if (t[r] && n(e, t[r])) {
            e = t[r];
          }
          return e;
        }
        return {
          isValid: function (t) {
            return s("next", 1, t, t) !== r.NEVER;
          },
          next: function (t, n, e) {
            return s("next", t || 1, n, e);
          },
          prev: function (t, n, e) {
            return s("prev", t || 1, n, e);
          },
          nextRange: function (t, n, e) {
            return s("next", t || 1, n, e, !0);
          },
          prevRange: function (t, n, e) {
            return s("prev", t || 1, n, e, !0);
          }
        };
      };
      r.setTimeout = function (t, n, e) {
        var u,
          o = r.schedule(n);
        function a() {
          var n = new Date(),
            r = n.getTime(),
            s = function () {
              if (!e || ["local", "system"].includes(e)) {
                return o.next(2, r);
              }
              var t = 6e4 * n.getTimezoneOffset(),
                u = i(n, e);
              if (u === t) {
                return o.next(2, r);
              }
              var a = new Date(r + t - u);
              return (o.next(2, a) || []).map(function (n) {
                return new Date(n.getTime() + u - t);
              });
            }();
          if (s[0]) {
            var c = s[0].getTime() - r;
            c < 1e3 && (s[1] ? c = s[1].getTime() - r : c = 1e3);
            c < 2147483647 ? u = setTimeout(t, c) : u = setTimeout(a, 2147483647);
          } else {
            u = 0;
          }
        }
        t && a();
        return {
          isDone: function () {
            return !u;
          },
          clear: function () {
            clearTimeout(u);
          }
        };
      };
      r.setInterval = function (t, n, e) {
        if (t) {
          var i = r.setTimeout(o, n, e),
            u = i.isDone();
          return {
            isDone: function () {
              return i.isDone();
            },
            clear: function () {
              u = !0;
              i.clear();
            }
          };
        }
        function o() {
          u || (t(), i = r.setTimeout(o, n, e));
        }
      };
      r.date = {};
      r.date.timezone = function (t) {
        t ? r.date.build = function (t, n, e, r, i, u) {
          return new Date(t, n, e, r, i, u);
        } : r.date.build = function (t, n, e, r, i, u) {
          return new Date(Date.UTC(t, n, e, r, i, u));
        };
        var n = t ? "get" : "getUTC",
          e = Date.prototype;
        r.date.getYear = e[n + "FullYear"];
        r.date.getMonth = e[n + "Month"];
        r.date.getDate = e[n + "Date"];
        r.date.getDay = e[n + "Day"];
        r.date.getHour = e[n + "Hours"];
        r.date.getMin = e[n + "Minutes"];
        r.date.getSec = e[n + "Seconds"];
        r.date.isUTC = !t;
      };
      r.date.UTC = function () {
        r.date.timezone(!1);
      };
      r.date.localTime = function () {
        r.date.timezone(!0);
      };
      r.date.UTC();
      r.SEC = 1e3;
      r.MIN = 60 * r.SEC;
      r.HOUR = 60 * r.MIN;
      r.DAY = 24 * r.HOUR;
      r.WEEK = 7 * r.DAY;
      r.DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      r.NEVER = 0;
      r.date.next = function (t, n, e, i, u, o) {
        return r.date.build(t, 0 !== n ? n - 1 : 0, 0 !== e ? e : 1, i || 0, u || 0, o || 0);
      };
      r.date.nextRollover = function (t, n, e, i) {
        var u = e.val(t),
          o = e.extent(t)[1];
        return (n || o) <= u || n > o ? new Date(i.end(t).getTime() + r.SEC) : i.start(t);
      };
      r.date.prev = function (t, n, e, i, u, o) {
        var a = arguments.length;
        a < 2 ? n = 11 : n = n - 1;
        a < 3 ? e = r.D.extent(r.date.next(t, n + 1))[1] : e = e;
        a < 4 ? i = 23 : i = i;
        a < 5 ? u = 59 : u = u;
        a < 6 ? o = 59 : o = o;
        return r.date.build(t, n, e, i, u, o);
      };
      r.date.prevRollover = function (t, n, e, r) {
        return n >= e.val(t) || !n ? r.start(r.prev(t, r.val(t) - 1)) : r.start(t);
      };
      r.parse = {};
      r.parse.cron = function (t, n) {
        var e = {
            JAN: 1,
            FEB: 2,
            MAR: 3,
            APR: 4,
            MAY: 5,
            JUN: 6,
            JUL: 7,
            AUG: 8,
            SEP: 9,
            OCT: 10,
            NOV: 11,
            DEC: 12,
            SUN: 1,
            MON: 2,
            TUE: 3,
            WED: 4,
            THU: 5,
            FRI: 6,
            SAT: 7
          },
          r = {
            "* * * * * *": "0/1 * * * * *",
            "@YEARLY": "0 0 1 1 *",
            "@ANNUALLY": "0 0 1 1 *",
            "@MONTHLY": "0 0 1 * *",
            "@WEEKLY": "0 0 * * 0",
            "@DAILY": "0 0 * * *",
            "@HOURLY": "0 * * * *"
          },
          i = {
            s: [0, 0, 59],
            m: [1, 0, 59],
            h: [2, 0, 23],
            D: [3, 1, 31],
            M: [4, 1, 12],
            Y: [6, 1970, 2099],
            d: [5, 1, 7, 1]
          };
        function u(t, n, r) {
          return isNaN(t) ? e[t] || null : Math.min(Number(t) + (n || 0), r || 9999);
        }
        function o(t) {
          var n,
            e = {};
          for (n in t) if ("dc" !== n && "d" !== n) {
            e[n] = t[n].slice(0);
          }
          return e;
        }
        function a(t, n, e, r, i) {
          var u = e;
          for (t[n] || (t[n] = []); u <= r;) {
            t[n].includes(u) || t[n].push(u);
            u += i || 1;
          }
          t[n].sort(function (t, n) {
            return t - n;
          });
        }
        function s(t, n, e, r) {
          (n.d && !n.dc || n.dc && !n.dc.includes(r)) && (t.push(o(n)), n = t[t.length - 1]);
          a(n, "d", e, e);
          a(n, "dc", r, r);
        }
        function c(t, n, r) {
          var i = {},
            u = {};
          1 === r ? (a(n, "D", 1, 3), a(n, "d", e.MON, e.FRI), a(i, "D", 2, 2), a(i, "d", e.TUE, e.FRI), a(u, "D", 3, 3), a(u, "d", e.TUE, e.FRI)) : (a(n, "D", r - 1, r + 1), a(n, "d", e.MON, e.FRI), a(i, "D", r - 1, r - 1), a(i, "d", e.MON, e.THU), a(u, "D", r + 1, r + 1), a(u, "d", e.TUE, e.FRI));
          t.exceptions.push(i);
          t.exceptions.push(u);
        }
        function l(t, n, e, r, i, o) {
          var s = t.split("/"),
            c = Number(s[1]),
            l = s[0];
          if ("*" !== l && "0" !== l) {
            var f = l.split("-");
            r = u(f[0], o, i);
            i = u(f[1], o, i) || i;
          }
          a(n, e, r, i, c);
        }
        function f(t, n, e, r, i, o) {
          var f,
            h,
            v = n.schedules,
            d = v[v.length - 1];
          "L" === t && (t = r - 1);
          null !== (f = u(t, o, i)) ? a(d, e, f, f) : null !== (f = u(t.replace("W", ""), o, i)) ? c(n, d, f) : null !== (f = u(t.replace("L", ""), o, i)) ? s(v, d, f, r - 1) : 2 === (h = t.split("#")).length ? s(v, d, f = u(h[0], o, i), u(h[1])) : l(t, d, e, r, i, o);
        }
        function h(t) {
          return t.includes("#") || t.indexOf("L") > 0;
        }
        function v(t, n) {
          return h(t) && !h(n) ? 1 : t - n;
        }
        function d(t) {
          var n,
            e,
            r,
            u,
            o = {
              schedules: [{}],
              exceptions: []
            },
            a = t.replace(/(\s)+/g, " ").split(" ");
          for (n in i) if ((r = a[(e = i[n])[0]]) && "*" !== r && "?" !== r) {
            var s,
              c = (u = r.split(",").sort(v)).length;
            for (s = 0; s < c; s++) f(u[s], o, n, e[1], e[2], e[3]);
          }
          return o;
        }
        function p(t) {
          var n = t.toUpperCase();
          return r[n] || n;
        }
        var g = p(t);
        return d(n ? g : "0 " + g);
      };
      r.parse.recur = function () {
        var t,
          n,
          e,
          i,
          u,
          o,
          a,
          s,
          c,
          l = [],
          f = [],
          h = l;
        function v(r, l, f) {
          u ? r = r + "_" + u : r = r;
          t || (h.push({}), t = h[0]);
          t[r] || (t[r] = []);
          n = t[r];
          if (i) {
            for (e = [], s = l; s <= f; s += i) e.push(s);
            c = {
              n: r,
              x: i,
              c: n.length,
              m: f
            };
          }
          var v = (o ? e = [l] : a ? e = [f] : e = e).length;
          for (s = 0; s < v; s += 1) {
            var d = e[s];
            n.includes(d) || n.push(d);
          }
          e = i = u = o = a = 0;
        }
        return {
          schedules: l,
          exceptions: f,
          on: function () {
            Array.isArray(arguments[0]) ? e = arguments[0] : e = arguments;
            return this;
          },
          every: function (t) {
            i = t || 1;
            return this;
          },
          after: function (t) {
            u = "a";
            e = [t];
            return this;
          },
          before: function (t) {
            u = "b";
            e = [t];
            return this;
          },
          first: function () {
            o = 1;
            return this;
          },
          last: function () {
            a = 1;
            return this;
          },
          time: function () {
            for (var t = 0, n = e.length; t < n; t++) {
              var r = e[t].split(":");
              r.length < 3 && r.push(0);
              e[t] = 3600 * Number(r[0]) + 60 * Number(r[1]) + Number(r[2]);
            }
            v("t");
            return this;
          },
          second: function () {
            v("s", 0, 59);
            return this;
          },
          minute: function () {
            v("m", 0, 59);
            return this;
          },
          hour: function () {
            v("h", 0, 23);
            return this;
          },
          dayOfMonth: function () {
            v("D", 1, a ? 0 : 31);
            return this;
          },
          dayOfWeek: function () {
            v("d", 1, 7);
            return this;
          },
          onWeekend: function () {
            e = [1, 7];
            return this.dayOfWeek();
          },
          onWeekday: function () {
            e = [2, 3, 4, 5, 6];
            return this.dayOfWeek();
          },
          dayOfWeekCount: function () {
            v("dc", 1, a ? 0 : 5);
            return this;
          },
          dayOfYear: function () {
            v("dy", 1, a ? 0 : 366);
            return this;
          },
          weekOfMonth: function () {
            v("wm", 1, a ? 0 : 5);
            return this;
          },
          weekOfYear: function () {
            v("wy", 1, a ? 0 : 53);
            return this;
          },
          month: function () {
            v("M", 1, 12);
            return this;
          },
          year: function () {
            v("Y", 1970, 2450);
            return this;
          },
          fullDate: function () {
            for (var t = 0, n = e.length; t < n; t++) e[t] = e[t].getTime();
            v("fd");
            return this;
          },
          customModifier: function (t, n) {
            if (!r.modifier[t]) {
              throw new Error("Custom modifier " + t + " not recognized!");
            }
            u = t;
            Array.isArray(arguments[1]) ? e = arguments[1] : e = [arguments[1]];
            return this;
          },
          customPeriod: function (t) {
            var n = r[t];
            if (!n) {
              throw new Error("Custom time period " + t + " not recognized!");
            }
            v(t, n.extent(new Date())[0], n.extent(new Date())[1]);
            return this;
          },
          startingOn: function (t) {
            return this.between(t, c.m);
          },
          between: function (n, e) {
            t[c.n] = t[c.n].splice(0, c.c);
            i = c.x;
            v(c.n, n, e);
            return this;
          },
          and: function () {
            t = h[h.push({}) - 1];
            return this;
          },
          except: function () {
            h = f;
            t = null;
            return this;
          }
        };
      };
      r.parse.text = function (t) {
        var n,
          e = r.parse.recur,
          i = 0,
          u = "",
          o = {
            rank: /^((\d+)(st|nd|rd|th)?)\b/,
            time: /^(((0?[1-9]|1[0-2]):[0-5]\d(\s)?(am|pm))|((0?\d|1\d|2[0-3]):[0-5]\d))\b/,
            dayName: /^((sun|mon|tue(s)?|wed(nes)?|thu(r(s)?)?|fri|sat(ur)?)(day)?)\b/,
            monthName: /^(jan(uary)?|feb(ruary)?|ma((r(ch)?)?|y)|apr(il)?|ju(ly|ne)|aug(ust)?|oct(ober)?|(sept|nov|dec)(ember)?)\b/,
            yearIndex: /^(\d{4})\b/,
            every: /^every\b/,
            after: /^after\b/,
            before: /^before\b/,
            second: /^(s|sec(ond)?(s)?)\b/,
            minute: /^(m|min(ute)?(s)?)\b/,
            hour: /^(h|hour(s)?)\b/,
            day: /^(day(s)?( of the month)?)\b/,
            dayInstance: /^day instance\b/,
            dayOfWeek: /^day(s)? of the week\b/,
            dayOfYear: /^day(s)? of the year\b/,
            weekOfYear: /^week(s)?( of the year)?\b/,
            weekOfMonth: /^week(s)? of the month\b/,
            weekday: /^weekday\b/,
            weekend: /^weekend\b/,
            month: /^month(s)?\b/,
            year: /^year(s)?\b/,
            between: /^between (the)?\b/,
            start: /^(start(ing)? (at|on( the)?)?)\b/,
            at: /^(at|@)\b/,
            and: /^(,|and\b)/,
            except: /^(except\b)/,
            also: /(also)\b/,
            first: /^(first)\b/,
            last: /^last\b/,
            in: /^in\b/,
            of: /^of\b/,
            onthe: /^on the\b/,
            on: /^on\b/,
            through: /(-|^(to|through)\b)/
          },
          a = {
            jan: 1,
            feb: 2,
            mar: 3,
            apr: 4,
            may: 5,
            jun: 6,
            jul: 7,
            aug: 8,
            sep: 9,
            oct: 10,
            nov: 11,
            dec: 12,
            sun: 1,
            mon: 2,
            tue: 3,
            wed: 4,
            thu: 5,
            fri: 6,
            sat: 7,
            "1st": 1,
            fir: 1,
            "2nd": 2,
            sec: 2,
            "3rd": 3,
            thi: 3,
            "4th": 4,
            for: 4
          };
        function s(t, n, e, r) {
          return {
            startPos: t,
            endPos: n,
            text: e,
            type: r
          };
        }
        function c(t) {
          var n,
            e,
            r,
            o,
            a,
            c,
            l = Array.isArray(t) ? t : [t],
            f = /\s+/;
          for (l.push(f), a = i; !n || n.type === f;) {
            var h;
            c = -1;
            e = u.slice(Math.max(0, a));
            n = s(a, a, u.split(f)[0]);
            var v = l.length;
            for (h = 0; h < v; h++) if ((r = (o = l[h]).exec(e)) && 0 === r.index && r[0].length > c) {
              n = s(a, a + (c = r[0].length), e.slice(0, Math.max(0, c)), o);
            }
            if (n.type === f) {
              a = n.endPos;
            }
          }
          return n;
        }
        function l(t) {
          var n = c(t);
          i = n.endPos;
          return n;
        }
        function f(t) {
          for (var n = Number(k(t)), e = y(o.through) ? Number(k(t)) : n, r = [], i = n; i <= e; i++) r.push(i);
          return r;
        }
        function h(t) {
          for (var n = f(t); y(o.and);) n = n.concat(f(t));
          return n;
        }
        function v(t) {
          var n, e, r, i;
          y(o.weekend) ? t.on(a.sun, a.sat).dayOfWeek() : y(o.weekday) ? t.on(a.mon, a.tue, a.wed, a.thu, a.fri).dayOfWeek() : (n = k(o.rank), t.every(n), e = g(t), y(o.start) ? (n = k(o.rank), t.startingOn(n), m(e.type)) : y(o.between) && (r = k(o.rank), y(o.and) && (i = k(o.rank), t.between(r, i))));
        }
        function d(t) {
          y(o.first) ? t.first() : y(o.last) ? t.last() : t.on(h(o.rank));
          g(t);
        }
        function p(t) {
          i = 0;
          u = t;
          n = -1;
          for (var r = e(); i < u.length && n < 0;) switch (m([o.every, o.after, o.before, o.onthe, o.on, o.of, o.in, o.at, o.and, o.except, o.also]).type) {
            case o.every:
              {
                v(r);
                break;
              }
            case o.after:
              {
                0 !== c(o.time).type ? (r.after(k(o.time)), r.time()) : (r.after(k(o.rank)), g(r));
                break;
              }
            case o.before:
              {
                0 !== c(o.time).type ? (r.before(k(o.time)), r.time()) : (r.before(k(o.rank)), g(r));
                break;
              }
            case o.onthe:
              {
                d(r);
                break;
              }
            case o.on:
              {
                r.on(h(o.dayName)).dayOfWeek();
                break;
              }
            case o.of:
              {
                r.on(h(o.monthName)).month();
                break;
              }
            case o.in:
              {
                r.on(h(o.yearIndex)).year();
                break;
              }
            case o.at:
              {
                for (r.on(k(o.time)).time(); y(o.and);) r.on(k(o.time)).time();
                break;
              }
            case o.and:
              {
                break;
              }
            case o.also:
              {
                r.and();
                break;
              }
            case o.except:
              {
                r.except();
                break;
              }
            default:
              {
                n = i;
              }
          }
          return {
            schedules: r.schedules,
            exceptions: r.exceptions,
            error: n
          };
        }
        function g(t) {
          var e = m([o.second, o.minute, o.hour, o.dayOfYear, o.dayOfWeek, o.dayInstance, o.day, o.month, o.year, o.weekOfMonth, o.weekOfYear]);
          switch (e.type) {
            case o.second:
              {
                t.second();
                break;
              }
            case o.minute:
              {
                t.minute();
                break;
              }
            case o.hour:
              {
                t.hour();
                break;
              }
            case o.dayOfYear:
              {
                t.dayOfYear();
                break;
              }
            case o.dayOfWeek:
              {
                t.dayOfWeek();
                break;
              }
            case o.dayInstance:
              {
                t.dayOfWeekCount();
                break;
              }
            case o.day:
              {
                t.dayOfMonth();
                break;
              }
            case o.weekOfMonth:
              {
                t.weekOfMonth();
                break;
              }
            case o.weekOfYear:
              {
                t.weekOfYear();
                break;
              }
            case o.month:
              {
                t.month();
                break;
              }
            case o.year:
              {
                t.year();
                break;
              }
            default:
              {
                n = i;
              }
          }
          return e;
        }
        function y(t) {
          var n = c(t).type === t;
          n && l(t);
          return n;
        }
        function m(t) {
          var e = l(t);
          e.type ? e.text = x(e.text, t) : n = i;
          return e;
        }
        function k(t) {
          return m(t).text;
        }
        function x(t, n) {
          var e = t;
          switch (n) {
            case o.time:
              {
                var r = t.split(/(:|am|pm)/),
                  i = Number.parseInt(r[0], 10),
                  u = r[2].trim();
                "pm" === r[3] && i < 12 ? i += 12 : "am" === r[3] && 12 === i && (i -= 12);
                e = (1 === (i = String(i)).length ? "0" : "") + i + ":" + u;
                break;
              }
            case o.rank:
              {
                e = Number.parseInt(/^\d+/.exec(t)[0], 10);
                break;
              }
            case o.monthName:
              {}
            case o.dayName:
              {
                e = a[t.slice(0, 3)];
              }
          }
          return e;
        }
        return p(t.toLowerCase());
      };
      n.exports = r;
    }, {
      "../package.json": 1
    }]
  }, {}, [2])(2)), i.exports),
  o = n.getDefaultExportFromCjs(u);
function a(t, n) {
  if (null == n || n > t.length) {
    n = t.length;
  }
  for (var e = 0, r = Array(n); e < n; e++) r[e] = t[e];
  return r;
}
function s(t, n) {
  if (t) {
    if ("string" == typeof t) {
      return a(t, n);
    }
    var e = {}.toString.call(t).slice(8, -1);
    "Object" === e && t.constructor && (e = t.constructor.name);
    return "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? a(t, n) : 0;
  }
}
function c(t) {
  return function (t) {
    if (Array.isArray(t)) {
      return a(t);
    }
  }(t) || function (t) {
    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) {
      return Array.from(t);
    }
  }(t) || s(t) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function l(t, n) {
  var e = f();
  return (l = function (t, n) {
    return e[t -= 222];
  })(t, n);
}
function f() {
  var t = ["xxx-x", "repla", "9691stJzSf", "81155tuEJAJ", "10209906VjioLn", "24aUZYvr", "1497xXMdYq", "817040bPmHQM", "xxx-4", "2517914mVuSwe", "3830shkkVD", "2695528fmYOWR", "xxxxx", "162DeuEtX", "4552ljssnX"];
  return (f = function () {
    return t;
  })();
}
function h() {
  function t(t, n) {
    return l(n - -133, t);
  }
  function n(t, n) {
    return l(t - -805, n);
  }
  return (n(-579, -580) + t(104, 96) + t(89, 89) + "xxx-yxxx-x" + t(100, 93) + function (t, n) {
    return l(n - -347, t);
  }(-123, -121) + "x")[n(-575, -576) + "ce"](/[xy]/g, function (t) {
    var n = 16 * Math.random() | 0;
    return ("x" === t ? n : 3 & n | 8).toString(16);
  });
}
function v(t, n) {
  var e = d();
  return (v = function (t, n) {
    return e[t -= 326];
  })(t, n);
}
function d() {
  var t = ["8tQVCTv", "shell", "rmiss", "IfNee", "unnin", "serSe", "19352kuJxPf", "zuku", "appCu", "isShi", "talle", "请先启动S", "lengt", "alert", "untim", "1289454cdKlXw", "455372XcocKX", "ior", "没有安装S", "join", "4171632kETBnh", "绑定Shi", "Shizu", "100CDqCuO", "sleep", "33xIXfqZ", "856566HqTtCU", "behav", "hizuk", "ime", "oyShi", "ByShi", "动失败！", "toast", "3ggAtPc", "reque", "hasPe", "u权限批准", "zukuR", "ded", "onDes", "申请Shi", "10UhgHwC", "destr", "106784WiFOMt", "isRun", "isRoo", "823333gEEjHH"];
  return (d = function () {
    return t;
  })();
}
{
  !function () {
    var t = 553,
      n = 1079,
      e = 1081,
      r = 66,
      i = 498,
      u = 858;
    function o(t, n) {
      return l(t - -727, n);
    }
    function a(t, n) {
      return l(n - u, t);
    }
    var s = f();
    function c(t, n) {
      return l(n - 312, t);
    }
    function h(t, n) {
      return l(t - -306, n);
    }
    for (;;) try {
      if (717412 === -parseInt(c(t, 548)) / 1 + -parseInt(c(540, 537)) / 2 + -parseInt(o(-492, -493)) / 3 * (-parseInt(a(1089, 1086)) / 4) + -parseInt(o(-495, -492)) / 5 * (-parseInt(c(533, 539)) / 6) + parseInt(a(n, e)) / 7 * (parseInt(h(-72, -r)) / 8) + parseInt(c(543, 545)) / 9 + parseInt(h(-82, -83)) / 10 * (-parseInt(o(-496, -i)) / 11)) {
        break;
      }
      s.push(s.shift());
    } catch (t) {
      s.push(s.shift());
    }
  }();
  (function () {
    var t = 1083,
      n = 916,
      e = 794,
      r = 420,
      i = 779,
      u = 85,
      o = d();
    function a(t, n) {
      return v(t - u, n);
    }
    function s(t, n) {
      return v(n - 549, t);
    }
    function c(t, n) {
      return v(t - 431, n);
    }
    function l(t, n) {
      return v(t - 750, n);
    }
    for (;;) try {
      if (183976 === -parseInt(l(1093, 1100)) / 1 + parseInt(s(926, 912)) / 2 * (-parseInt(l(t, 1063)) / 3) + -parseInt(s(n, 902)) / 4 * (parseInt(a(455, 460)) / 5) + -parseInt(c(793, e)) / 6 + -parseInt(l(1096, 1087)) / 7 * (parseInt(l(1097, 1080)) / 8) + parseInt(l(1123, 1146)) / 9 * (-parseInt(a(426, r)) / 10) + -parseInt(c(803, i)) / 11 * (-parseInt(c(798, 793)) / 12)) {
        break;
      }
      o.push(o.shift());
    } catch (t) {
      o.push(o.shift());
    }
  })();
}
var p = function () {
  var t = 316,
    e = 564,
    r = 60,
    i = 57,
    u = 139,
    o = 71,
    a = 9,
    s = 32,
    c = 186,
    l = 191,
    f = 364,
    h = 383,
    d = 368,
    p = 408,
    g = 393,
    y = 840,
    m = 232,
    k = 202,
    x = 672;
  function b(t, n) {
    return v(t - -416, n);
  }
  function A(t, n) {
    return v(t - 302, n);
  }
  function w(t, n) {
    return v(n - -800, t);
  }
  function I(t, n) {
    return v(n - -386, t);
  }
  return n._createClass(function t() {
    n._classCallCheck(this, t);
    n.hasRoot() ? this.behavior = new n.ADBBehavior() : this.behavior = new n.BaseBehavior();
  }, [{
    key: w(-471, -455) + "t",
    get: function () {
      function t(t, n) {
        return w(t, n - 45);
      }
      return this["behav" + t(-383, -391)][t(-411, -410) + "t"];
    }
  }, {
    key: "shell",
    value: function () {
      var t = 133,
        e = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
      var r = arguments[o(-308, -316) + "h"] > 1 ? arguments[1] : 0,
        i = arguments.length > 2 && 0 !== arguments[2] && arguments[2],
        u = n.isArray(e) ? e[function (t, n) {
          return w(t, n - 666);
        }(219, m)](" ") : e;
      if (i && this.isShizukuRuntime()) {
        return this["shell" + function (t, n) {
          return w(t, n - x);
        }(206, k) + "zuku"](u, r);
      }
      function o(n, e) {
        return w(e, n - t);
      }
      return this.behavior[o(-319, -340)](u, r);
    }
  }, {
    key: "initShizukuRunt" + w(-469, -472),
    value: function () {
      var t;
      if (!this[o(-420, -396) + o(-439, -462) + "untime"]()) {
        this.behavior.alert(o(-411, -410) + r(360, 337) + "u环境！");
        return !1;
      }
      if (!this["isShizukuR" + r(384, 373) + "g"]()) {
        this.behavior.toast("启动Shizuku环境中...");
        launchPackage("moe.s" + i(374, 367) + "u.privileged.api");
        for (var n = 30; !(this[e(-544, -548) + "zukuRunning"]() || n <= 0);) {
          n--;
          this[e(-574, -554) + i(407, 404)].sleep(1e3);
        }
        if (!this["isShi" + i(f, 377) + "unning"]()) {
          this[i(377, 366) + o(-412, -397)].alert(r(391, 406) + "hizuku环境！");
          return !1;
        }
      }
      function e(t, n) {
        return w(n, t - -100);
      }
      function r(t, n) {
        return w(n, t - 833);
      }
      function i(t, n) {
        return w(t, n - y);
      }
      shizuku["bindUserService" + r(h, 374) + i(394, 378)]();
      if (!shizuku["hasPe" + e(-551, -567) + "ion"]()) {
        shizuku[o(-442, -444) + "stPermission"]();
        this.behavior[e(-568, -558)](e(-560, -563) + "zuku权限...");
        for (var u = 8; !(shizuku[r(d, 388) + o(-427, -450) + "ion"]() || u <= 0);) {
          u--;
          this["behav" + e(-536, -518)][o(-405, -406)](1e3);
        }
        if (!shizuku.hasPermission()) {
          this.behavior[o(-416, -392)]("没有获得Shizuk" + r(369, 358) + "！");
          return !1;
        }
      }
      function o(t, n) {
        return w(n, t - 24);
      }
      if (null === (t = shizuku) || 0 === t || !t.isRunning()) {
        var a;
        shizuku["bindU" + o(-424, -411) + "rvice" + e(-550, -565) + r(371, 372)]();
        this["behav" + r(397, 411)].toast(i(402, p) + "zuku执行权限...");
        for (var s = 8; null === (c = shizuku) || 0 === c || !c.isRunning();) {
          var c;
          if (s <= 0) {
            break;
          }
          s--;
          this[e(-574, -597) + "ior"].sleep(1e3);
        }
        if (null === (a = shizuku) || 0 === a || !a[i(389, 384) + "ning"]()) {
          this[o(-450, -470) + e(-536, -520)][r(g, 402)](e(-531, -542) + "ku连接启" + o(-445, -433));
          return !1;
        }
      }
      return !0;
    }
  }, {
    key: A(644, 668) + w(-468, -471) + b(-62, -53),
    value: function () {
      var t;
      function n(t, n) {
        return w(t, n - 472);
      }
      if (!this[r(-627, -648) + n(-6, a) + "untime"]()) {
        return !1;
      }
      if (!this["isShi" + n(s, 9) + e(c, 193) + "g"]()) {
        return !0;
      }
      function e(t, n) {
        return A(n - -460, t);
      }
      function r(t, n) {
        return I(n, t - -597);
      }
      null === (t = shizuku) || 0 === t || t[e(l, 181) + "troy"]();
      this["behav" + r(-619, -626)].sleep(1e3);
      return !0;
    }
  }, {
    key: "isShizukuR" + b(-55, -49) + "e",
    value: function () {
      var t, e, r;
      return n.isFunction(shizuku) && (null === (t = shizuku) || 0 === t ? 0 : t["isIns" + (e = 46, r = 42, I(e, r - o) + "d")]());
    }
  }, {
    key: b(-60, -59) + I(-34, -49) + A(653, 636) + "g",
    value: function () {
      var t, n, e, o, a, s, c;
      return this[s = 488, c = 464, w(c, s - 932) + (o = r, a = i, b(o - u, a)) + "untime"]() && (null === (t = shizuku) || 0 === t ? 0 : t[n = -386, e = -392, w(n, e - 52) + "zukuRunning"]());
    }
  }, {
    key: A(650, 653) + b(-86, -96) + I(-36, -32),
    value: function () {
      var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "",
        r = arguments[i(554, 537) + "h"] > 1 ? arguments[1] : 0;
      function i(t, n) {
        return I(t, n - e);
      }
      n.isArray(t) ? t = t[i(527, 544)](" ") : t = t;
      var u,
        o,
        a = shizuku(t);
      r > 0 && this[u = 389, o = 408, I(o, u - 449) + "ior"].sleep(r);
      return a;
    }
  }, {
    key: A(657, 634) + "rrent",
    value: function () {
      function n(n, e) {
        return w(e, n - t);
      }
      return this[n(-158, -162) + "ior"][n(-129, -119) + "rrent"]();
    }
  }]);
}();
function g() {
  var t = ["90110tlIFwz", "714OCZouu", "5565630JOvLML", "585DCcSUZ", "1329940xcugOs", "2197346WPNrUa", "97864kxBDaI", "3wRJLpS", "core", "3943734hCfoOy", "128296MJmETC"];
  return (g = function () {
    return t;
  })();
}
!function () {
  var t = 188,
    n = 183,
    e = 502,
    r = 186,
    i = 71,
    u = 67,
    o = g();
  function a(t, n) {
    return m(n - -977, t);
  }
  function s(t, n) {
    return m(n - -536, t);
  }
  function c(t, n) {
    return m(t - -650, n);
  }
  for (;;) try {
    if (688270 === parseInt(c(-182, -182)) / 1 + -parseInt(a(-512, -514)) / 2 * (-parseInt(c(-185, -184)) / 3) + -parseInt(c(-t, -190)) / 4 + parseInt(s(-71, -76)) / 5 + -parseInt(c(-n, -185)) / 6 + -parseInt(a(-e, -507)) / 7 * (parseInt(c(-r, -187)) / 8) + parseInt(s(-i, -75)) / 9 * (parseInt(s(-62, -u)) / 10)) {
      break;
    }
    o.push(o.shift());
  } catch (t) {
    o.push(o.shift());
  }
}();
var y = new n.Logger(m(254 - -212, 254));
function m(t, n) {
  var e = g();
  return (m = function (t, n) {
    return e[t -= 460];
  })(t, n);
}
function k(t, n) {
  return w(n - -964, t);
}
function x() {
  var t = ["ete", "geNam", "ream", "n Suc", "tion", "PERMI", "buffe", "eptio", "xists", "oid.p", "abort", "error", "16qXOocl", "net", "SSION", "lock", "k Fil", "[inst", "util", "now", "n Tim", "1083196OsnXQR", " Erro", "hive", "List", "load]", "6948DUTYks", "32wzxmwe", "FLAG_", "_URI_", "tWarn", "2065iDdCCq", "timeo", "progr", "OqHvd", "PACKA", "GRANT", "nnect", "utput", "fileN", "[down", "ess", "Strea", " the ", "40FkltAO", "allAP", "IX_UR", "cesse", "lengt", "IOExc", "conca", "NkcKG", "messa", "tart", "Inten", "ackag", "inten", "671319pdBUIw", "124925GNpVCp", "autoS", "ile", "Uri", "unloc", "URLCo", "inter", "208812VxUkxR", "start", "Activ", "1792644PxZZdH", "warn", "flush", "n/vnd", "disco", "packa", "ion", "e is ", "_READ", "ath", "getSd", "I_PER", "durat", "ACTIO", "cardP", "latio", "11907049opFUxH", "openC", "ty!", "getIn", "isAli"];
  return (x = function () {
    return t;
  })();
}
function b(t, n) {
  return w(t - -397, n);
}
function A(t, n) {
  return w(t - -683, n);
}
function w(t, n) {
  var e = x();
  return (w = function (t, n) {
    return e[t -= 142];
  })(t, n);
}
function I(t, n) {
  return w(t - -163, n);
}
function C() {
  var t = ["d/app", "all A", "inclu", "test", "test/", "nMeth", "geSta", "ceInf", "initS", "ctor]", "proto", "scEnd", "ually", "trigg", "2/app", " perm", ".gith", "动...", "重启Jso", "isRoo", "Knkmd", "rchy", "e is ", "rchy]", "right", "copy", "ath", "连续重启服", "ator.", "devic", "pc.0", "baseU", "ime", "erver", "shell", "RSOwF", "Insta", "[sele", "resou", "ctorP", "deepD", "ord", "[boun", "rd/ap", "1395798KdIvvI", "node", "zukuR", "appli", "aram", "596166AMEVzP", "geEnd", "focus", "all c", "check", "chXKB", "om.gi", "gin/s", "artin", "WGLJn", "resul", "nect-", "yCoun", "Serve", "onDum", "des", "Inten", "leToU", "true", " Inst", " exec", "asset", "b com", "zuku.", "packa", "hint", "ierar", "p-uia", "plugi", "dumpH", "untim", "hizuk", "ty, c", "est.r", "top c", " tryi", "der", "isShi", "forEa", "tSele", "chy", "sleep", "d/shi", "d try", "[init", "-e cl", " star", "col", "接电脑端激", "dMatc", "Pleas", ".0.1", "n/jso", "child", "cardP", "init", "or: ", "ns/ui", " is N", "event", "getSd", "orbbO", "exist", "u and", "objIn", "> nod", "insta", "...", "rce-i", "archy", "sWith", "scCon", "conca", "nRPC服", "alse ", "Hiera", "raver", "initA", "ccess", "需APP服", "le-to", "127.0", "load", "cdybH", "foOfA", "timeo", "2SBgOEC", "ing..", "Manag", "all S", "visib", "info", "nt-de", "llAPK", "ailab", "izuku", "click", "nner ", "netst", "ith", "ISTEN", "RPC] ", "s not", "post", "rtsWi", "ior", "er an", "App] ", "ator-", "356sbZdwO", "ted", "7140PCrRVe", "indow", "e man", "eInfo", "port", "idx.t", "ins", "epth", "thub.", "sByDu", ".apk", "getAv", "s/plu", "oidJU", "n...", "cheer", "ckage", "st.ap", "messa", "statu", "side.", "rioNo", "请先安装所", "code", "ution", "scSta", "find", "/sdca", "and r", "kxolN", "strin", "waitU", "logge", "rumen", "请先激活后", "3328536cODObu", "left", "r] No", "lEHhb", "[stop", "p out", "split", "est.a", ".Andr", " inst", "tor.a", "rvice", "ot In", "-user", "lable", "passw", "1901697RVyWEe", "each", "Match", "depth", "tance", "X App", "adbut", "b.Stu", "ll AT", "gin/a", "filte", "/uidu", "log", "onnec", "ser", "repla", "uiaut", "ng-or", "dumpW", "able", "-uiau", "isATX", "dEnds", "behav", "class", "ide]:", "t | g", "ode i", "ble", "com.g", "[inst", "ll Sh", "u.apk", "ils", "lengt", "bound", "botto", "t] Se", "LVKHo", "llIns", "[dump", "sedTe", "jsonr", "put i", "pp-ui", "utoma", "rHttp", "267287OofrsR", "K] Ap", ": dum", "errMs", "-serv", "]: $n", "http", "uRunt", "ng:", "conte", "ling", "dRetr", "again", "read", "waitF", "attri", "QOmcu", "EndsW", "JsonR", "offDu", "t to", "[deep", "push", " to c", "GlmKq", " deni", "ll UI", "url", "apk", "File", "off", "warn", "or.te", "lingS", "rep L", "Start", "ches", "tion ", "scrol", "forma", "ZvSID", " agai", "YArtk", "IPDuP", "rd/sh", "lePat", "parse", "务成功！", "host", "sCode", "sInsi", "omato", "ntilG", "gify", "ailed", "autom", "[Json", "IdQKs", "ssion", "-e de", "bmhog", "务中...", "tains", "2.0", "faile", "ncesB", "ut 1 ", "ren", "aliza", "raw", '"0"', "tor-t", "yDump", "rd/Do", "With", "tion=", "iting", "l: ", "or.ap", "one", "join", "error", "r dum", " done", "orExi", "Fvcnp", "ILyBv", "212040INkbEn", "lear_", "geCon", "enabl", "tomat"];
  return (C = function () {
    return t;
  })();
}
function E(t, n) {
  return z(n - 37, t);
}
{
  !function () {
    var t = 705,
      n = 607,
      e = 622,
      r = 639,
      i = 19,
      u = 4,
      o = 439,
      a = 457;
    function s(t, n) {
      return w(t - a, n);
    }
    function c(t, n) {
      return w(t - -172, n);
    }
    var l = x();
    function f(t, n) {
      return w(t - o, n);
    }
    function h(t, n) {
      return w(t - -249, n);
    }
    for (;;) try {
      if (280694 === -parseInt(s(671, t)) / 1 + -parseInt(s(634, n)) / 2 + parseInt(c(49, 87)) / 3 * (parseInt(f(e, 582)) / 4) + -parseInt(f(626, 638)) / 5 * (parseInt(s(r, 638)) / 6) + -parseInt(c(52, 89)) / 7 * (parseInt(c(-4, -6)) / 8) + parseInt(h(-36, -i)) / 9 * (parseInt(c(28, -u)) / 10) + parseInt(h(-98, -128)) / 11) {
        break;
      }
      l.push(l.shift());
    } catch (t) {
      l.push(l.shift());
    }
  }();
  importClass(android.content[b(-187, -193) + "t"]);
  importClass(android[k(-782, -795)][k(-766, -747)]);
  importClass(java.io.File);
  importClass(java.io["FileO" + b(-203, -202) + A(-485, -479) + "m"]);
  importClass(java.io[A(-478, -440) + A(-520, -551) + "n"]);
  importClass(java.io.InputStream);
  importClass(java.net["MalformedURLExc" + b(-234, -263) + "n"]);
  importClass(java[b(-228, -190)].URL);
  importClass(java.net[b(-178, -223) + A(-490, -484) + "ion"]);
  importClass(java[I(11, 54)]["Array" + I(17, -3)]);
  (function () {
    var t = 210;
    function n(t, n) {
      return z(n - -821, t);
    }
    function e(t, n) {
      return z(n - -657, t);
    }
    function r(t, n) {
      return z(t - -297, n);
    }
    var i = C();
    function u(t, n) {
      return z(n - -99, t);
    }
    for (;;) try {
      if (239746 === parseInt(r(-17, 44)) / 1 + -parseInt(r(t, 289)) / 2 * (parseInt(r(119, -24)) / 3) + parseInt(u(378, 431)) / 4 * (-parseInt(e(46, -125)) / 5) + -parseInt(r(124, 259)) / 6 + parseInt(r(286, 339)) / 7 + parseInt(n(-426, -254)) / 8 + -parseInt(u(340, 268)) / 9) {
        break;
      }
      i.push(i.shift());
    } catch (t) {
      i.push(i.shift());
    }
  })();
  importClass(android.content[E(340, 474) + "t"]);
  importClass(android.net.Uri);
  importClass(java.io[E(406, 346)]);
}
var S = require(E(684, 584) + "io"),
  M = files.cwd() || "",
  B = function () {
    var t = 1289,
      e = 1165,
      r = 1064,
      i = 1438,
      u = 1017,
      o = 694,
      a = 44,
      s = 113,
      c = 992,
      l = 205,
      f = 1076,
      v = 1171,
      d = 332,
      g = 667,
      m = 1139,
      k = 1492,
      x = 934,
      w = 1238,
      I = 1142,
      C = 1060,
      B = 1183,
      O = 1250,
      D = 1326,
      P = 1024,
      N = 1237,
      j = 1079,
      q = 1146,
      F = 1215,
      U = 1336,
      V = 1199,
      Y = 1253,
      W = 1185,
      K = 1307,
      J = 934,
      Q = 1069,
      L = 1112,
      H = 1239,
      X = 24,
      G = 89,
      Z = 309,
      _ = 1014,
      $ = 968,
      tt = 1089,
      nt = 1158,
      et = 1365,
      rt = 997,
      it = 219,
      ut = 1284,
      ot = 421,
      at = 307,
      st = 976,
      ct = 866,
      lt = 755,
      ft = 869,
      ht = 831,
      vt = 876,
      dt = 315,
      pt = 624,
      gt = 465,
      yt = 529,
      mt = 782,
      kt = 1070,
      xt = 621,
      bt = 284,
      At = 942,
      wt = 279,
      It = 552,
      Ct = 477,
      Et = 1077,
      St = 1008,
      Mt = 407,
      Bt = 659,
      Rt = 635,
      zt = 625,
      Tt = 636,
      Ot = 1364,
      Dt = 1406,
      Pt = 1187,
      Nt = 885,
      jt = 1274,
      qt = 156,
      Ft = 1120,
      Ut = 1203,
      Vt = 1214,
      Yt = 1275,
      Wt = 861,
      Kt = 795,
      Jt = 1144,
      Qt = 1232,
      Lt = 982,
      Ht = 1266,
      Xt = 1132,
      Gt = 1408,
      Zt = 308,
      _t = 219,
      $t = 91,
      tn = 184,
      nn = 237,
      en = 180,
      rn = 1006,
      un = 974,
      on = 261,
      an = 498,
      sn = 1277,
      cn = 217,
      ln = 1223,
      fn = 1074,
      hn = 39,
      vn = 1115,
      dn = 441,
      pn = 766,
      gn = 1451,
      yn = 674,
      mn = 847,
      kn = 487,
      xn = 1380,
      bn = 210,
      An = 753,
      wn = 1273,
      In = 620,
      Cn = 188,
      En = 11,
      Sn = 185,
      Mn = 678,
      Bn = 335,
      Rn = 165,
      zn = 39,
      Tn = 424,
      On = 152,
      Dn = 192,
      Pn = 24,
      Nn = 182,
      jn = 13,
      qn = 11,
      Fn = 473,
      Un = 353,
      Vn = 235,
      Yn = 194,
      Wn = 212,
      Kn = 379,
      Jn = 399,
      Qn = 353,
      Ln = 360,
      Hn = 481,
      Xn = 173,
      Gn = 180,
      Zn = 225,
      _n = 60,
      $n = 314,
      te = 378,
      ne = 424,
      ee = 1,
      re = 0,
      ie = 162,
      ue = 604,
      oe = 40,
      ae = 41,
      se = 57,
      ce = 678,
      le = 728,
      fe = 25,
      he = 633,
      ve = 987,
      de = 1006,
      pe = 984,
      ge = 309,
      ye = 21,
      me = 309,
      ke = 466,
      xe = 50,
      be = 229,
      Ae = 376,
      we = 338;
    function Ie(t, n) {
      return E(t, n - -691);
    }
    function Ce(t, n) {
      return E(n, t - 182);
    }
    function Ee(t, n) {
      return E(t, n - 466);
    }
    function Se(t, n) {
      return z(n - -1479 - 844, t);
    }
    return n._createClass(function t() {
      function e(t, n) {
        return z(n - -757, t);
      }
      var r, i, u, o, a;
      function s(t, n) {
        return z(n - -6, t);
      }
      var c = arguments[f(322, 310) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {};
      function l(t, n) {
        return z(t - -486, n);
      }
      function f(t, n) {
        return z(n - -307, t);
      }
      n._classCallCheck(this, t);
      this[e(-225, -168) + f(484, ge)] = new p();
      null !== (r = c.protocol) && 0 !== r ? this.protocol = r : this.protocol = f(-187, -21);
      null !== (i = c[f(-116, ye)]) && 0 !== i ? this.host = i : this.host = s(397, 496) + s(me, ke);
      null !== (u = c[f(124, be)]) && 0 !== u ? this[l(xe, 180)] = u : this[l(xe, 180)] = 9008;
      this[l(-83, -213) + "RL"] = ""[l(7, -122) + "t"](this[s(471, Ae) + f(137, 161)], "://").concat(this[s(297, 322)], ":").concat(this.port);
      null !== (o = c[f(-53, 37) + "dRetry"]) && 0 !== o ? this[l(-142, -13) + l(-195, -188) + "y"] = o : this[l(-142, -13) + l(-195, -188) + "y"] = 5;
      this[s(319, we) + e(-416, -466) + "yCount"] = 0;
      this["_devi" + e(-486, -378) + "o"] = null;
      this["insta" + f(0, 38) + f(-115, 45)] = null === (a = c[e(-211, -270) + f(107, 38) + "yDump"]) || 0 === a || a;
      this["isATX" + f(-27, 127) + "r"] = !0;
      this.events = new n.EventEmitter();
    }, [{
      key: "logger",
      get: function () {
        return T;
      }
    }, {
      key: "sleep",
      value: function () {
        var t = arguments[n(1034, ve) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 0;
        function n(t, n) {
          return z(t - 417, n);
        }
        return this[n(de, 1126) + n(1033, 1185)][function (t, n) {
          return z(t - 586, n);
        }(1192, 1291) + function (t, n) {
          return z(n - 540, t);
        }(992, 1066)][n(879, pe)](t);
      }
    }, {
      key: Ie(43, -111) + "ailab" + Ie(-373, -329) + "h",
      value: function () {
        for (var t = arguments[i(633, 537) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : [], n = "", e = 0; e < t[i(he, 705) + "h"]; e++) {
          var r = t[e];
          if (files.exists(r)) {
            n = r;
            break;
          }
        }
        function i(t, n) {
          return Ie(n, t - 670);
        }
        return n;
      }
    }, {
      key: Ce(695, 709),
      value: function (t) {
        function e(t, n) {
          return Ce(t - fe, n);
        }
        var r = arguments[u(54, ie) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
        function i(t, n) {
          return Ee(n, t - -1e3);
        }
        this[u(-274, -442) + "xt"] = t;
        if (!this.context) {
          throw new Error("UIService服务初始化失败！");
        }
        function u(t, n) {
          return Ee(n, t - -1066);
        }
        function o(t, n) {
          return Ce(n - -811, t);
        }
        n.isDefined(r[u(41, 174) + u(-129, -148) + "r"]) && ("ZvSID" !== u(-243, -205) ? vrciqkqlyzs.copy(this.getAvailablePath([yeanpduvpxg[e(ue, 771)](zνjqwxnegay, o(-317, -150) + i(47, -91) + "gin/app-ui" + o(-224, -257) + u(-34, 9) + "test." + o(-235, -284)), lpνyrglmudν.join(aνvbcpelpgo, "plugi" + i(-19, -60) + "2/app" + u(oe, -23) + "tomator-te" + e(793, 845) + "k")]), "/sdca" + e(659, 723) + "p-uiautoma" + e(595, 636) + e(818, 777) + "pk") && (bouznpvazuw = "/sdca" + o(-215, -177) + u(-115, -119) + "utoma" + u(-212, -108) + "est.apk") : this[u(ae, se) + i(-63, 39) + "r"] = !!r["isATX" + e(ce, 715) + "r"]);
        if (this[u(41, 11) + i(-63, -135) + "r"]) {
          if (!this.initAPP()) {
            throw new Error(e(798, le) + e(744, 711) + "务！");
          }
          if (!this[o(-370, -212) + "erver"]()) {
            throw new Error(u(3, 167) + "台服务！");
          }
        }
        return !0;
      }
    }, {
      key: Ee(1103, 1001) + "PP",
      value: function () {
        function t(t, n) {
          return Ce(n - -783, t);
        }
        var n = a(-33, -180) + "ithub.uiautomator";
        if (!getAppName(n)) {
          this.logger[a(-50, 72)]("[initApp] " + a(-237, -201) + a(-54, -40) + a(-57, -65) + "...");
          var e = this[i(152, 143) + a(-130, -191) + "lePath"](["/sdcard/ap" + s(221, 313) + "utoma" + a(-68, zn) + "pk", s(499, Tn) + a(-292, -389) + "wnload/app" + i(212, 164) + i(-20, -3) + i(-33, 139) + "k"]);
          !e && files[a(-248, -250)](this[i(On, 72) + t(-136, -49) + s(Dn, 190) + "h"]([files.join(M, "assets/plu" + i(201, 40) + "pp-ui" + t(-351, -229) + a(-245, -419) + "apk"), files[s(343, 225)](M, i(58, 0) + "ns/ui" + t(-324, -178) + "-uiautomator.apk")]), s(518, 424) + i(Pn, Nn) + "p-uia" + a(-367, -539) + t(157, jn) + "pk") && (e = s(503, Tn) + "rd/app-uia" + a(-367, -266) + a(-68, -147) + "pk");
          if (!this[a(-158, -36) + i(123, 170)](e, n)) {
            throw new Error("Pleas" + i(143, 119) + "ually" + i(185, qn) + a(-272, -195) + "TX an" + t(-174, -100) + i(-70, -85) + s(263, 411));
          }
          return getAppName(n);
        }
        var r = s(418, 477) + "ithub.uiautomat" + i(-79, -13) + "st";
        function i(t, n) {
          return Se(n, t - 244);
        }
        if (!getAppName(r)) {
          this[t(-147, 0) + "r"].log("[init" + s(451, 393) + s(426, 273) + a(-339, -511) + "Server App" + s(Fn, Un));
          var u = this[s(Vn, 408) + t(-200, -49) + i(-66, 59) + "h"]([t(-30, -5) + s(Yn, 280) + "p-uia" + i(-113, -111) + "tor-t" + t(94, 10) + "pk", "/sdcard/Downloa" + i(-19, 55) + i(Wn, 204) + t(-235, -193) + "or-te" + s(447, 414) + "k"]);
          !u && files[i(6, 106)](this["getAv" + t(-100, -49) + a(-320, -487) + "h"]([files.join(M, "assets/plu" + a(-53, -226) + a(-18, -115) + a(-310, -259) + a(-116, -234) + "test." + t(-381, -256)), files[s(314, 225)](M, "plugi" + i(87, 99) + i(-5, 90) + "-uiautomator-te" + t(-96, -15) + "k")]), "/sdca" + s(308, 280) + a(-197, -248) + "utoma" + s(278, 216) + a(-71, -132) + "pk") && (u = "/sdca" + t(-67, -149) + "p-uiautomator-test.apk");
          if (!this[i(96, 201) + s(215, Kn)](u, r)) {
            throw new Error(i(80, 145) + s(372, Jn) + i(-7, -111) + i(185, 277) + "all uiautomator" + t(-160, -280) + s(437, 392) + s(Qn, 329) + " agai" + t(88, -18));
          }
          return getAppName(r);
        }
        var o = "moe.s" + a(-193, -186) + "u.privileged.api";
        function a(t, n) {
          return Ee(n, t - -1148);
        }
        function s(t, n) {
          return Ee(t, n - -638);
        }
        if (!this[s(462, 454) + s(Ln, Hn)].behavior[t(-27, -173) + "t"] && !getAppName(o)) {
          if ("chXKB" === a(-219, -265)) {
            this[i(Xn, 235) + "r"].log("[initApp] Insta" + t(54, 50) + i(125, Gn) + " App...");
            var c = this[a(-102, 35) + "ailab" + t(-126, -239) + "h"](["/sdcard/shizuku" + s(575, 407), "/sdcard/Downloa" + a(-182, -248) + "zuku.apk"]);
            c || files.copy(this["getAvailab" + i(-66, 41) + "h"]([files[s(228, Zn)](M, "assets/plu" + a(-217, -154) + a(-193, -353) + a(-30, _n)), files.join(M, s(187, $n) + "ns/ui2/shi" + a(-201, -372) + s(343, 173))]), s(te, ne) + a(-321, -341) + "izuku" + s(461, 407)) && (c = s(555, 424) + "rd/shizuku.apk");
            if (!this[s(304, 352) + a(-131, ee)](c, o)) {
              if (s(432, 486) !== t(-91, -198)) {
                throw new Error("Please manually" + t(71, 12) + t(12, -54) + "hizuk" + t(-111, -80) + " try " + a(-353, -222) + a(-157, -29));
              }
              wliooiezztv.push(tcνwbwwhnnn);
              bwjztrkifah = "";
            }
            return getAppName(o);
          }
          var l = arguments[t(-10, 53) + "h"] > 0 && arguments[0] !== νodsozbguos ? arguments[0] : "";
          return this[t(re, -161) + "RL"] + "/" + l[s(351, 438)](".").join("/");
        }
        return !0;
      }
    }, {
      key: "getPa" + Ie(-244, -106) + "Info",
      value: function (t) {
        var n, e, r;
        try {
          n = context["getPackage" + (e = 873, r = 763, Ce(e - 145, r) + "er")]().getPackageInfo(t, 0);
        } catch (t) {}
        return n;
      }
    }, {
      key: Se(-134, -148) + Ie(-300, -140),
      value: function (t, e) {
        function r(t, n) {
          return Ce(n - -165, t);
        }
        function i(t, n) {
          return Ce(t - -505, n);
        }
        if (!t || !files[u(93, 88) + "s"](t)) {
          this[u(174, Sn) + "r"][i(25, 141)](r(572, 667) + "allAP" + u(-109, -141) + "k Fil" + u(4, 50) + "Not Exists: ", t);
          return !1;
        }
        function u(t, n) {
          return Se(n, t - 245);
        }
        function o(t, n) {
          return Ce(t - -290, n);
        }
        if (this.adbutils[i(320, 145) + o(455, 616)][r(506, 445) + "t"]) {
          var a = this["adbut" + r(Mn, 670)]["behav" + u(136, 142)][o(Bn, 463)]("pm install -r " + t);
          return 0 === (null == a ? 0 : a[u(Rn, 187)]);
        }
        return function () {
          var t = 417,
            e = 387,
            r = 456,
            i = 415,
            u = 391,
            o = 429,
            a = 418,
            s = 446,
            c = arguments[p(-184, -194) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
          function l(t, n) {
            return b(n - 45, t);
          }
          var f = arguments[I(449, 441) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
          if (!c || !files.exists(c)) {
            y.warn("[installAPK] Ap" + I(t, e) + l(-225, -210) + "Not E" + l(-185, -188) + ": ", c);
            return !1;
          }
          c = c.replace("/sdcard", files[l(-189, -207) + I(394, 360) + "ath"]());
          var h = Uri.fromFile(File(c)).toString(),
            v = app[l(-184, -140) + "t"]({
              action: Intent[l(-197, -204) + "N_INSTALL_" + l(-185, -161) + "GE"],
              type: "applicatio" + I(472, 481) + ".andr" + l(-197, -187) + I(r, i) + "e-arc" + l(-185, -173),
              flags: [Intent[x(-208, -212) + "ACTIVITY_NEW_TASK"], Intent["FLAG_" + x(-200, -210) + "_PREF" + l(-137, -150) + I(u, 355) + "MISSION"], Intent[I(o, 410) + "GRANT" + x(-249, -242) + l(-202, -167) + p(-247, -237) + x(-222, -185)]],
              data: h
            });
          context[l(-159, -130) + p(-132, -175) + "ity"](v);
          if (!f[p(-164, -169) + x(-235, -267) + "e"]) {
            return !0;
          }
          var d = !1;
          function p(t, n) {
            return A(n - 285, t);
          }
          var g = f.packageName,
            m = f[x(-204, -191) + "ut"] || 30,
            k = Date[p(-191, -223)]();
          function x(t, n) {
            return b(t - 5, n);
          }
          for (var w = f[I(392, 376) + x(-162, -145)] || 1e3;;) {
            if (parseInt((Date[I(420, 434)]() - k) / 1e3) > m) {
              y[p(-162, -173)](p(-183, -225) + x(-191, -217) + "K]: Installatio" + p(-261, -222) + "eout...");
              d = !1;
              break;
            }
            if (getAppName(g)) {
              y.info(I(a, 445) + I(s, 465) + "K]: Instal" + I(395, 424) + l(-234, -193) + l(-176, -149) + "d!");
              d = !0;
              break;
            }
            n.threadSleep(w);
          }
          function I(t, n) {
            return b(t - 642, n);
          }
          return d;
        }(t, {
          packageName: e,
          timeout: 180
        });
      }
    }, {
      key: "initServer",
      value: function () {
        var t = 21,
          n = 1026,
          e = 817,
          r = 1128,
          i = this;
        if (this[u(-64, 38) + u(-55, -176) + "r"]()) {
          if (l(2, 67) !== o(-134, 17)) {
            return !0;
          }
          incgaayqliν = whdmqhknfsg("node");
        }
        if (!this["adbut" + u(127, 280)]["behav" + u(37, 79)][u(-98, -72) + "t"]) {
          if ("ohkmO" === s(-425, -591)) {
            cgrbsdiixlf = this[u(-191, -188) + "PC"]("dumpW" + o(32, -20) + u(7, 113) + u(-96, -29), [yyyouafehtk, huqνcmνqcpk].filter(rloshjkvwti));
          } else {
            if (!this.adbutils["isShi" + s(-311, -153) + l(46, -97) + "e"]()) {
              this.logger[u(-178, -338)](s(-264, -312) + "Server] 请链" + l(64, -89) + "活后台服务" + s(-241, -92));
              return !1;
            }
            if (!this.adbutils["initS" + s(-277, -346) + u(-202, -148) + l(-1, 151)]()) {
              this.logger.warn("[init" + u(-55, -142) + "r] sh" + s(-213, -336) + "服务没有启" + l(-16, 21));
              return !1;
            }
          }
        }
        function u(t, n) {
          return Ce(t - -708, n);
        }
        function o(t, n) {
          return Ee(t, n - -1056);
        }
        threads.start(function () {
          var a = 852,
            s = 894,
            c = shizuku && !i["adbut" + f(48, t)][f(38, 211) + "ior"][v(-74, -51) + "t"];
          function f(t, n) {
            return u(t - -79, n);
          }
          var h = i[p(558, 705)]("am instrument -w -r " + d(899, 828) + "bug f" + p(647, 794) + f(-102, -22) + "ass com.gi" + d(1093, 1029) + d(1102, 1088) + p(660, 630) + "r.stu" + f(22, 77) + d(978, 932) + v(-77, -112) + "ub.uiautomator." + v(-89, 71) + "andro" + d(965, n) + v(-11, -170) + "unner" + f(7, 31) + p(956, 844) + "nitRu" + p(693, e) + "&", 0, c);
          function v(t, n) {
            return o(n, t - 88);
          }
          function d(t, n) {
            return l(n - s, t);
          }
          function p(t, n) {
            return o(t, n - a);
          }
          i.logger.log(d(r, 1102) + d(1054, 1054) + f(52, -111) + f(10, -19) + " inst" + v(100, 126) + "t: ", 0 === (null == h ? 0 : h.code));
          0 !== (null == h ? 0 : h[p(948, 854)]) && i[f(-4, -101) + "r"][d(741, 800)]("[instrument] Se" + f(10, -65) + f(-128, 43) + d(1174, 1054) + "t Fai" + p(556, 656), h.error || h.result);
        })[u(-195, -181) + "or"]();
        this[o(-35, En) + "r"][l(190, 277)](l(60, 181) + u(-55, 76) + "r] st" + l(24, 70) + "g...");
        this.sleep(3e3);
        var a = !1;
        function s(t, n) {
          return Ee(n, t - -1232);
        }
        var c = 10;
        function l(t, n) {
          return Ce(t - -624, n);
        }
        for (;;) {
          if (c <= 0) {
            a = !1;
            this[l(159, 170) + "r"][s(-418, -377)]("[init" + u(-55, -36) + "r] Server initi" + l(-57, -102) + s(-412, -249) + "failed!");
            break;
          }
          if (this.checkServer()) {
            a = !0;
            this.logger.info("[init" + l(29, 14) + "r] Su" + o(-79, -54) + "fully" + o(-128, -86) + "ted.");
            break;
          }
          c--;
          this.sleep(1e3);
        }
        return a;
      }
    }, {
      key: "stopServer",
      value: function () {
        var t = 932;
        function n(t, n) {
          return Ce(n - -134, t);
        }
        this.logger.log(n(797, 656) + "Server] Ex" + n(570, dn) + r(pn, 708));
        if (!this[o(83, 42) + "ils"][i(1437, gn) + n(474, 503) + "unning"]() && !this.adbutils.isRoot) {
          return o(-76, -29) !== i(1307, 1358) ? (this[r(842, 882) + "r"][r(873, 773)](r(849, yn) + "Serve" + r(mn, 717) + n(kn, 526) + o(50, -20) + i(1206, xn) + "issio" + i(1364, 1539)), !1) : this.checkServerHttp();
        }
        var e = !this[o(83, bn) + n(An, 701)][i(wn, 1384) + "t"];
        function r(n, e) {
          return Ie(e, n - t);
        }
        function i(t, n) {
          return Ee(t, n - 490);
        }
        var u = this.shell("am force-s" + r(733, 622) + r(705, In) + r(818, 946) + o(93, 151) + r(609, 690) + "r", 0, e);
        function o(t, n) {
          return Ie(n, t - 148);
        }
        return 0 === (null == u ? 0 : u[o(49, Cn)]);
      }
    }, {
      key: "check" + Ce(653, 777) + "r",
      value: function () {
        function t(t, n) {
          return Se(t, n - 1404);
        }
        function n(t, n) {
          return Ie(t, n - 261);
        }
        function e(t, n) {
          return Ee(n, t - -600);
        }
        function r(t, n) {
          return Se(n, t - 1332);
        }
        this[n(319, 171) + "r"][e(an, 501)]("checkServer try" + t(1411, sn) + ".");
        var i = this.shell(t(1239, 1288) + "at -a" + e(512, 592) + e(cn, 161) + n(93, 128));
        if (0 !== (null == i ? 0 : i[r(1252, 1215)]) && ((null == i ? 0 : i[r(1058, 1108)]) || "")[r(1071, ln) + "des"]("Permi" + t(1061, 1107) + t(1101, fn) + "ed")) {
          var u = this.shell(("curl --con" + n(148, hn) + r(1203, 1111) + t(1065, vn)).concat(this[e(306, 217) + "RL"]));
          return !(0 !== (null == u ? 0 : u.code) || !((null == u ? 0 : u.result) || "")[t(1157, 1143) + t(1198, 1205)]("Not Found")) || this[n(49, 32) + "Serve" + e(182, 319)]();
        }
        return 0 === (null == i ? 0 : i[t(1393, 1324)]) && ((null == i ? 0 : i.result) || "").includes(":" + this[r(1233, 1346)]);
      }
    }, {
      key: Ee(956, 928) + "ServerHttp",
      value: function () {
        function t(t, n) {
          return Se(t, n - 222);
        }
        function n(t, n) {
          return Ee(n, t - -658);
        }
        var e = !1;
        function r(t, n) {
          return Se(t, n - 1330);
        }
        function i(t, n) {
          return Ce(t - -475, n);
        }
        this[i(Zt, 346) + "r"].log(i(169, 100) + "ServerHttp" + i(200, 145) + "ng...");
        try {
          e = 200 === http.post(this.actionMethod("jsonr" + i(146, -25)), {
            jsonrpc: "2.0",
            method: "devic" + r(1302, 1230),
            params: {}
          })[t(_t, 138) + "sCode"];
        } catch (e) {
          if ("XAEFh" === t(-76, $t)) {
            return this["instancesB" + n(197, 166)] && (yrbytudywsm[r(1144, 1206) + "leToU" + t(233, tn)] || smnjνcengyq[i(330, 433)]) ? this.objInfoOfAllInstances(beoilepdjvs).length : (delete ffdejcupujb[t(nn, 98) + i(182, en) + i(341, 345)], this[t(-249, -115) + "PC"]("exist", [coqbloywrne]));
          }
          this[t(163, 151) + "r"][r(1147, rn)](n(270, 106) + i(178, 239) + "r:", e.message);
        }
        this.logger.log("check" + r(1262, 1129) + r(1047, un) + i(107, on) + "!");
        return e;
      }
    }, {
      key: "actio" + Ee(1022, 880) + "od",
      value: function () {
        var t = arguments[function (t, n) {
          return Se(n, t - 160);
        }(142, 6) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this.baseURL + "/" + t.split(".").join("/");
      }
    }, {
      key: "JsonRPC",
      value: function () {
        var t, e;
        function r(t, n) {
          return Ie(n, t - Gt);
        }
        var i = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function u(t, n) {
          return Ce(n - -899, t);
        }
        var o = arguments[d(1187, 1295) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {},
          a = arguments[d(Pt, 1070) + "h"] > 2 && 0 !== arguments[2] ? arguments[2] : {},
          s = n._extend({
            action: v(1466, 1556) + "pc/0",
            contentType: d(989, 902) + "catio" + u(-63, -207) + "n"
          }, a),
          c = s.url ? s[d(877, Nt)] : this.actionMethod(s.action),
          l = n._extend({
            jsonrpc: v(1316, jt),
            id: h(),
            method: i,
            params: o
          }, s.data || {});
        l = JSON[u(-275, -354)](JSON[v(1448, 1493) + d(903, 841)](l));
        var f = {};
        function v(t, n) {
          return Ie(t, n - 1585);
        }
        function d(t, n) {
          return Se(n, t - 1205);
        }
        try {
          f = http[u(-305, -qt)](c, l, s);
        } catch (t) {
          var p = t[d(Ft, Ut) + "ge"] || t[v(1066, Vt) + "g"] || "";
          if (p["inclu" + d(1006, 1027)](r(1088, 1244) + u(-404, -377) + u(-15, -84) + r(1054, 969))) {
            if (this["failedRetr" + r(1187, 1166) + "t"] >= this[u(-277, -336) + v(1356, 1222) + "y"]) {
              throw new Error((v(1280, 1330) + "务失败超过")[v(1401, 1424) + "t"](this[v(1429, Yt) + d(Wt, Kt) + "y"], "次！"));
            }
            this[u(-337, -336) + "dRetr" + u(-351, -247) + "t"]++;
            this.logger.log("[Json" + v(1557, 1453) + r(Jt, Qt) + r(1248, 1414) + v(1262, 1272));
            if (this["initS" + u(-104, -275)]()) {
              if ("lvHbJ" !== d(866, 1026)) {
                this[d(914, 1024) + "dRetr" + d(1003, Lt) + "t"] = 0;
                this.logger[r(Ht, 1187)](d(906, 973) + "RPC] 重启Jso" + d(1064, 959) + "务成功！");
                return this.JsonRPC(c, l, s);
              }
              wywrqgtxnkp = rtcwqxedwwv.replace("Start" + r(1245, 1409), "");
              byxνqqlνina += "^";
            }
          }
          this[d(1134, 1116) + "r"][r(1115, 1189)](d(906, 845) + v(1575, 1453) + "Error:", p);
        }
        if (!(f["statu" + r(1083, 977)] >= 200 && f["statu" + d(899, 764)] < 300)) {
          this[u(-259, -116) + "r"].error(u(-362, -344) + "RPC]:", i, f);
        }
        var g = n.fromJson(null === (t = f) || 0 === t || null === (e = t.body) || 0 === e ? 0 : e[d(Xt, 1178) + "g"]());
        return s[u(-424, -331)] ? g : g[r(1185, 1057) + "t"];
      }
    }, {
      key: "clearCache",
      value: function () {
        return this.JsonRPC("clearLastT" + function (t, n) {
          return Ie(n, t - 678);
        }(521, 360) + (Ce(Dt - 563, Ot) + "xt"));
      }
    }, {
      key: Ie(-377, -219) + "pHier" + Ie(-261, -164),
      value: function (t) {
        return this.events.on("dumpHierar" + Se(zt, 462 - Tt), t);
      }
    }, {
      key: Se(-312, -336) + "mpHierarchy",
      value: function (t) {
        var n,
          e,
          r = 1003;
        return this[n = 558, e = Mt, Ee(e, n - -425) + "s"][function (t, n) {
          return Ie(n, t - r);
        }(Bt, Rt)]("dumpHierarchy", t);
      }
    }, {
      key: Ee(973, 953) + Ee(960, 950) + "chy",
      value: function () {
        var t = arguments.length > 0 && 0 !== arguments[0] && arguments[0],
          e = arguments[c(-294, -157) + "h"] > 1 ? arguments[1] : 0,
          r = "";
        function i(t, n) {
          return Se(t, n - 632);
        }
        if (this.isATXServer) {
          r = this.JsonRPC(c(-215, -173) + "indow" + i(583, 493) + "rchy", [t, e].filter(n.isDefined));
        } else {
          var u = files[c(-367, -293) + "cardP" + a(529, 368)]() + "/uidump.xml",
            o = this.shell((c(-80, -175) + "omato" + i(479, 359) + "p ").concat(u), 0, !0);
          0 !== (null == o ? 0 : o[i(717, 552)]) && this[c(-168, -210) + "r"].warn(("[dumpHierarchy]" + i(319, 279) + "p error: ").concat(null == o ? 0 : o[a(492, 356)]));
          r = files.read(u) || "";
          files.remove(u);
        }
        if (!n.isString(r)) {
          this.logger[i(451, 308)](c(-147, -151) + i(370, 493) + "rchy]: dum" + a(703, 688) + i(642, 623) + "s not stri" + c(-443, -486), r);
          return "";
        }
        function a(t, n) {
          return Ee(n, t - -372);
        }
        function s(t, n) {
          return Ce(t - 328, n);
        }
        function c(t, n) {
          return Ie(t, n - -120);
        }
        0 !== r.indexOf("<?xml") && this.logger[s(858, 765)]("[dump" + s(1043, 1056) + "rchy]: dump out" + i(mt, 623) + s(kt, 964) + " xml...");
        !r[c(-320, -400) + "des"]("<hier" + a(xt, 758) + " rota" + c(-414, -419) + c(-497, -424)) && this.logger[a(442, bt)](i(453, 620) + "Hiera" + s(At, 1002) + i(181, wt) + "p emp" + s(1e3, 1073) + s(971, 1e3) + a(499, It) + "traversed_text " + c(-387, -214) + "etry...");
        this[i(303, Ct) + "s"][s(932, Et) + "er"](a(581, 561) + c(-332, -327) + s(St, 1143), r);
        return r;
      }
    }, {
      key: Ie(-362, -248),
      value: function () {
        var t,
          n,
          e = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "",
          r = arguments.length > 1 ? arguments[1] : 0,
          i = arguments[t = -14, n = -79, Se(n, t - 4) + "h"] > 2 && 0 !== arguments[2] && arguments[2];
        return this.adbutils[function (t, n) {
          return Ie(n, t - 1501);
        }(1253, 1105)](e, r, i);
      }
    }, {
      key: "deviceInfo",
      value: function () {
        function t(t, n) {
          return Ee(n, t - -375);
        }
        function n(t, n) {
          return Ee(n, t - -1118);
        }
        if (t(gt, 419) !== n(-133, 36)) {
          return this.JsonRPC(t(yt, 438) + t(663, 821));
        }
        this.logger[t(439, 599)](n(-190, -244) + "Server:", qbvmtwnllxl.message);
      }
    }, {
      key: "forma" + Ce(679, 668) + "ctorP" + Se(-64, -215),
      value: function () {
        var t = 448;
        function e(t, n) {
          return Ce(n - -853, t);
        }
        function r(t, n) {
          return Ee(t, n - -1363);
        }
        function i(t, n) {
          return Ce(n - -423, t);
        }
        function u(n, e) {
          return Ce(n - t, e);
        }
        if ("qlNfl" !== u(1228, 1257)) {
          var o = arguments[e(142, -17) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {},
            a = arguments[u(1284, 1443) + "h"] > 1 ? arguments[1] : 0,
            s = arguments.length > 2 ? arguments[2] : 0,
            c = {
              description: "content-desc",
              descriptionContains: "conte" + u(1180, 1070) + e(-162, -142) + u(1009, 846),
              descriptionStartsWith: r(-510, -571) + "nt-de" + i(333, 353) + i(385, 321) + "th",
              descriptionEndsWith: "content-de" + e(-77, -251) + "sWith",
              descriptionMatches: "conte" + i(210, Z) + "scMat" + u(983, 1059),
              packageName: "package",
              packageNameContains: u(1112, 1102) + u(1036, _) + u(1009, $),
              packageNameStartsWith: u(1112, 1220) + i(110, 174) + r(-423, -335) + "th",
              packageNameEndsWith: r(-369, -415) + u(tt, 1093) + "sWith",
              packageNameMatches: u(1112, 1248) + "geMatches",
              className: "class",
              classNameContains: u(1274, 1291) + "Conta" + r(-162, -322),
              classNameStartsWith: "class" + r(-694, -545) + u(nt, 985),
              classNameEndsWith: "class" + e(-370, -337) + e(-143, -114),
              classNameMatches: "classMatches",
              resourceId: "resource-id",
              resourceIdContains: "resource-idContains",
              resourceIdStartsWith: "resource-idStartsWith",
              resourceIdEndsWith: i(262, 206) + u(1156, 1287) + i(559, 401) + e(-137, -280),
              resourceIdMatches: i(118, 206) + e(-276, -145) + r(-563, -390) + "hes",
              visibleToUser: "visible-to" + e(-200, -54)
            },
            l = ["childOrSib" + e(-231, -321) + "elector", "childOrSib" + r(-568, -570), "mask", u(1285, et) + u(rt, 1168) + "de"],
            f = [],
            h = [];
          Object.keys(o).forEach(function (t, e) {
            var a = o[t];
            function s(t, n) {
              return r(t, n - 845);
            }
            function v(t, n) {
              return i(n, t - 747);
            }
            if (l[s(453, 359) + s(285, ot)](t)) {
              return !0;
            }
            function d(t, n) {
              return u(t - -1518, n);
            }
            function p(t, n) {
              return u(n - -127, t);
            }
            if (n.isDefined(a)) {
              if (s(380, at) === s(300, 307)) {
                var g = t,
                  y = c[g] || g;
                y[s(275, 359) + d(-415, -378)]("Contains") && (y = y.replace("Contains", ""), y += "*");
                if (y["inclu" + p(979, st)](v(858, 894) + "sWith")) {
                  if ("IPDuP" !== v(ct, lt)) {
                    this[d(-507, -444) + p(ft, ht) + "yCount"] = 0;
                    this.logger.info(p(918, vt) + "RPC] 重启Jso" + p(1139, 1034) + p(787, 867));
                    return this[s(343, 283) + "PC"](zkcjkrrzbuν, opnbwjmvgrs, ayeqrkaxifm);
                  }
                  y = y.replace(s(309, 300) + "sWith", "");
                  y += "^";
                }
                y.includes("EndsWith") && (y = y[d(-253, -162) + "ce"](v(840, 838) + "ith", ""), y += "$");
                y.includes("Matches") && (h.push(g), y = "");
                y && f.push("[".concat(y, '="').concat(a, '"]'));
              } else {
                if (kvrqvνdzrhp.copy(this["getAvailab" + s(dt, 310) + "h"]([xjhhνcxynff.join(fklvsjνgcrx, "assets/plugin/shizuk" + s(pt, 600)), yqyvwmνujuh[d(-491, -409)](oerzayguoes, v(992, 999) + s(386, 463) + "2/shi" + d(-407, -570) + "apk")]), v(1102, 1186) + v(867, 831) + p(928, 1056) + ".apk")) {
                  tsννvcfolpp = s(379, 544) + s(242, 309) + "izuku" + s(421, 527);
                }
              }
            }
          });
          this.logger[u(1262, 1398)](r(-559, -451) + r(-572, -479) + ": ", f[e(-321, -274)](""));
          var v = a[e(-115, -76)]("".concat(f[i(it, 156)]("")));
          h[u(ut, 1276) + "h"] && (!v.length && (v = s("node")), h.forEach(function (t) {
            v = v.filter(function (n, e) {
              var r = e[u(1115, 1163) + "bs"],
                i = o[t];
              function u(t, n) {
                return z(t - 820, n);
              }
              var a = t.replace(u(1405, 1539) + "es", "");
              a = c[a] || a;
              return new RegExp(i).test(r[a]);
            });
          }));
          return v;
        }
        var d = ogywziitrhν[e(-316, -153) + e(-192, -159) + e(-166, -236)]() + (e(X, -40) + "mp.xml"),
          p = this.shell(("uiautomato" + e(-280, -272) + "p ")[r(-434, -367) + "t"](d), 0, !0);
        0 !== (null == p ? 0 : p.code) && this[e(-150, -70) + "r"][e(-458, -323)]((u(1290, 1359) + "Hiera" + i(360, 191) + ": dump error: ").concat(null == p ? 0 : p.error));
        wtysbsuaejk = zbepozvqezz[i(205, G)](d) || "";
        bihdettotpa.remove(d);
      }
    }, {
      key: Se(-339, -316) + "tChee" + Ie(67, -101) + "de",
      value: function () {
        function t(t, n) {
          return Se(t, n - H);
        }
        function n(t, n) {
          return Ce(t - 557, n);
        }
        function e(t, n) {
          return Se(t, n - -247);
        }
        var r,
          i = arguments[n(1393, 1547) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {},
          u = arguments[n(1393, 1545) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {},
          o = i.attribs;
        if (!o) {
          return null;
        }
        function a(t, n) {
          return Se(n, t - L);
        }
        var s = (o[e(-354, -264) + "s"] || "").match(/\[(.*),(.*)\]\[(.*),(.*)\]/) || [],
          c = {
            bottom: parseInt(s[4]) || 0,
            left: parseInt(s[1]) || 0,
            right: parseInt(s[3]) || 0,
            top: parseInt(s[2]) || 0
          };
        if (u["bound" + t(1028, x) + "de"]) {
          var l = u[e(-225, -264) + n(1106, w) + "de"] || {};
          if (!(c.left >= l[t(I, 1172)] && c.right <= l[e(-600, -486)] && c.top >= l.top && c[n(1395, 1356) + "m"] <= l.bottom)) {
            this[a(1041, 922) + "r"][e(-152, -287)]("[boundsIns" + n(1384, 1210) + a(956, 925) + t(C, B) + e(-387, -330) + "..");
            return !1;
          }
        }
        return {
          node: i,
          bounds: c,
          childCount: (null === (r = i[n(O, D) + n(1123, 1042)]) || 0 === r ? 0 : r[a(1094, P) + "h"]) || 0,
          className: o.class || "",
          contentDescription: o["conte" + n(1289, N) + "sc"] || "",
          packageName: o[a(922, 823) + "ge"] || "",
          resourceName: o["resource-id"] || "",
          text: o.text || "",
          visibleBounds: c,
          checkable: "true" === o["check" + a(j, 968)],
          checked: o[a(902, 1015) + "ed"] === t(946, 1043),
          clickable: o[e(-258, -365) + "able"] === e(-294, -443),
          enabled: o[n(q, 1295) + "ed"] === e(-328, -443),
          focusable: o.focusable === n(F, U),
          focused: o[n(V, 1089) + "ed"] === e(-591, -443),
          longClickable: "true" === o["longClicka" + n(1387, 1334)],
          scrollable: o[e(-533, -564) + t(Y, W)] === a(916, 780),
          selected: "true" === o["selec" + n(K, 1463)],
          index: parseInt(o.index) || 0,
          drawingOrder: parseInt(o["drawi" + t(1188, 1204) + a(J, 1006)]) || 0,
          visibleToUser: o[e(-309, -371) + e(-400, -381) + "-user"] === n(1215, 1054),
          password: o[e(-263, -300) + t(930, 1017)] === n(1215, Q),
          NAF: o.NAF === e(-387, -443),
          hint: o[a(923, 941)] || ""
        };
      }
    }, {
      key: Ee(963, 915) + "epth",
      value: function (t) {
        var n = 202;
        function e(t, n) {
          return Ie(n, t - 1030);
        }
        function r(t, n) {
          return Ee(t, n - -1443);
        }
        function i(t, n) {
          return Ce(t - 198, n);
        }
        var u = this,
          o = arguments[r(-161, -323) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : 0;
        if (null == t || !t.length) {
          this[r(-475, -376) + "r"].log(function (t, n) {
            return Ie(t, n - k);
          }(1042, m) + "Depth" + i(702, 618) + e(986, 1052) + "s empty...");
          return !1;
        }
        t[e(835, 711) + "ch"](function (t, a) {
          function s(t, n) {
            return r(n, t - 119);
          }
          function c(t, n) {
            return e(t - -757, n);
          }
          function l(t, n) {
            return i(n - -904, t);
          }
          if ("biiyK" === l(-126, -147)) {
            var f = {
              Gjqrrkvojwc: 140
            };
            !feoudwnnuxj.length && (wehbollbota = wibibwihgvl(c(36, 114)));
            imzsrygvnfi[s(-362, -322) + "ch"](function (t) {
              apggvioνqtp = aybioxvmugc.filter(function (n, e) {
                var r,
                  i,
                  u = e[r = -f.Gjqrrkvojwc, i = -42, z(r - -435, i) + "bs"];
                var o,
                  a,
                  s,
                  c,
                  l = zhjotwbvlgl[t],
                  h = t[o = 61, a = -92, z(a - -690, o) + "ce"]("Matches", "");
                h = ktclpnnbkgy[h] || h;
                return new uspνscneceo(l)[s = -30, c = -128, z(c - -503, s)](u[h]);
              });
            });
          } else {
            if (!t[l(-201, -192) + "bs"]) {
              return !1;
            }
            t.attribs[s(-235, -128)] = "" + o;
            t.children[l(-3, 130) + "h"] && u["deepD" + c(158, n)](t[l(-114, -13) + function (t, n) {
              return e(n - -821, t);
            }(-209, -98)], o + 1);
          }
        });
      }
    }, {
      key: "objIn" + Ce(724, 788) + "llInstance" + Ee(965, 1044) + "mp",
      value: function (t) {
        function n(t, n) {
          return Ie(n, t - g);
        }
        var e = this,
          r = S[o(f, v)](this["dumpH" + n(460, 622) + "chy"](), {
            xmlMode: !0,
            decodeEntities: !0,
            normalizeWhitespace: !0
          }),
          i = r("hierarchy " + n(499, 439) + "e");
        i.each(function (t, r) {
          function i(t, n) {
            return l(t, n - -247);
          }
          return e[u = -408, o = -279, n(o - -704, u) + "epth"](r[i(-384, -514) + i(-587, -641)], t + 1);
          var u, o;
        });
        var u = this[n(d, 422) + "tSele" + o(984, 965) + l(-200, -321)](t, i, r);
        function o(t, n) {
          return Se(n, t - 1208);
        }
        var a,
          s,
          c = [];
        function l(t, n) {
          return Ie(t, n - -87);
        }
        u[a = 576, s = 497, Ie(s, a - 646)](function (n, r) {
          var i,
            u,
            a = e[i = -494, u = -367, o(i - -1386, u) + "tCheerioNode"](r, t);
          if (a) {
            c.push(a);
          }
        });
        return c;
      }
    }, {
      key: Se(-49, -150) + Se(-97, -130) + "llIns" + Ie(94, -67) + "s",
      value: function (t) {
        function n(t, n) {
          return Ie(t, n - 382);
        }
        return this[n(s, 215) + n(-88, 73) + "yDump"] ? this["objIn" + n(134, 233) + "llIns" + (i = 1090, u = c, Se(i, u - 1040) + "sByDump")](t) : this[e = 367, r = l, Ie(r, e - 723) + "PC"](n(308, 213) + "foOfA" + (Ie(-1, -46 - -14) + "tances"), [t]);
        var e, r, i, u;
      }
    }, {
      key: Se(-70, -152) + "s",
      value: function (n) {
        function s(t, n) {
          return Ce(t - 632, n);
        }
        function c(t, n) {
          return Ie(t, n - 1233);
        }
        if (this[c(1073, 1066) + "ncesByDump"] && (n[s(1362, 1454) + s(t, 1171) + l(558, 447)] || n[c(1052, e)])) {
          if ("AUMnm" !== Se(-197, -199 - a)) {
            return this[c(926, r) + l(466, 332) + "llIns" + s(i, 1409) + "s"](n).length;
          }
          throw new νidxbxaycmx("请先激活后台服务！");
        }
        function l(t, n) {
          return Se(n, t - 596);
        }
        delete n["visib" + c(1026, u) + l(558, o)];
        return this[s(1149, 1032) + "PC"]("exist", [n]);
      }
    }, {
      key: "waitF" + Ie(-277, -290) + "sts",
      value: function (t, e) {
        return this.JsonRPC(Ce(-281 - -794, -303) + "orExists", [t, e][r = 782, i = 669, Ie(i, r - 843) + "r"](n.isDefined));
        var r, i;
      }
    }, {
      key: Ie(-175, -91) + Se(-443, -303) + "one",
      value: function (t, e) {
        function r(t, n) {
          return Se(t, n - 1286);
        }
        return this.JsonRPC("waitU" + r(1113, 983) + r(898, 1010), [t, e][i = 787, u = 648, Ce(i - -25, u) + "r"](n.isDefined));
        var i, u;
      }
    }]);
  }();
function z(t, n) {
  var e = C();
  return (z = function (t, n) {
    return e[t -= 278];
  })(t, n);
}
var T = new n.Logger("UI2"),
  O = new B();
!function () {
  var t = 676,
    n = 742,
    e = 711,
    r = 281,
    i = 748,
    u = 623,
    o = 645,
    a = 554,
    s = 396;
  function c(t, n) {
    return q(t - -584, n);
  }
  function l(t, n) {
    return q(n - -933, t);
  }
  function f(t, n) {
    return q(n - s, t);
  }
  for (var h = H();;) try {
    if (230777 === -parseInt(f(t, 667)) / 1 + parseInt(f(n, e)) / 2 + parseInt(c(-280, -r)) / 3 * (parseInt(f(i, 725)) / 4) + parseInt(f(643, 669)) / 5 + parseInt(c(-316, -282)) / 6 * (parseInt(l(-u, -o)) / 7) + parseInt(q(-a - -891, -522)) / 8 * (-parseInt(l(-648, -664)) / 9) + -parseInt(c(-300, -284)) / 10) {
      break;
    }
    h.push(h.shift());
  } catch (t) {
    h.push(h.shift());
  }
}();
var D = function () {
    var t = 638,
      e = 638,
      r = 906,
      i = 586,
      u = 571,
      o = 112,
      a = 672,
      s = 683,
      c = 151,
      l = 731,
      f = 680,
      h = 589,
      v = 656,
      d = 906,
      p = 757,
      g = 705,
      y = 733,
      m = 688,
      k = 728,
      x = 724,
      b = 730,
      A = 739,
      w = 725,
      I = 967,
      C = 712,
      E = 751,
      S = 674,
      M = 665,
      B = 742,
      z = 347,
      O = 832,
      D = 132,
      H = 852,
      st = 815,
      ct = 827,
      lt = 837,
      ft = 294,
      ht = 346,
      vt = 276,
      dt = 871,
      pt = 816,
      gt = 92,
      yt = 103,
      mt = 344,
      kt = 360,
      xt = 292,
      bt = 49,
      At = 125,
      wt = 371,
      It = 82,
      Ct = 351,
      Et = 322,
      St = 350,
      Mt = 63,
      Bt = 71,
      Rt = 57,
      zt = 71,
      Tt = 851,
      Ot = 323,
      Dt = 534;
    function Pt(t, n) {
      return q(t - 857, n);
    }
    function Nt() {
      var t = arguments[e(797, O) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {};
      function e(t, n) {
        return q(t - Dt, n);
      }
      function r(t, n) {
        return q(n - -204, t);
      }
      function i(t, n) {
        return q(n - 27, t);
      }
      function u(t, n) {
        return q(n - -788, t);
      }
      n._classCallCheck(this, Nt);
      this.text = t.text;
      this[e(870, 886) + u(-434, -470) + "ns"] = t[r(112, D) + e(H, 844) + "ns"];
      this.textMatches = t[e(st, ct) + u(-539, -512) + "s"];
      this[e(872, 860) + u(-522, -524) + "With"] = t["textS" + u(-562, -524) + "With"];
      this.className = t["class" + u(-471, -488)];
      this[e(837, 826) + "NameMatches"] = t[e(lt, 850) + u(-500, -511) + "atches"];
      this[r(76, 63) + i(312, 326) + "n"] = t[e(801, 830) + e(833, 835) + "n"];
      this[r(49, 63) + "iptio" + u(-471, -491) + u(-463, -496)] = t["descriptio" + u(-471, -491) + r(128, 88)];
      this[u(-539, -521) + "iptio" + e(844, 822) + "hes"] = t[i(328, ft) + "iptio" + e(844, 884) + "hes"];
      this[u(-501, -521) + u(-452, -489) + "nStar" + i(ht, 341) + "h"] = t[i(vt, 294) + "iptio" + r(104, 83) + i(332, 341) + "h"];
      this["check" + e(841, dt)] = t[i(287, 309) + "able"];
      this[i(272, 309) + "ed"] = t[e(pt, 847) + "ed"];
      this[u(-541, -514) + r(95, 103)] = t["click" + u(-471, -481)];
      this[e(830, 867) + "licka" + i(360, 367)] = t[r(120, gt) + r(67, 94) + r(165, 136)];
      this[r(78, 87) + "lable"] = t[e(825, 806) + i(299, 338)];
      this.enabled = t[e(858, 879) + "ed"];
      this[r(yt, 90) + "able"] = t[u(-494, -494) + e(841, 860)];
      this.focused = t.focused;
      this["selec" + u(-431, -463)] = t[i(mt, kt) + "ted"];
      this[e(796, 805) + "geName"] = t["packa" + i(260, 292) + "e"];
      this[u(-494, -526) + i(308, xt) + r(132, 123) + "hes"] = t.packageNameMatches;
      this.resourceId = t[r(84, 82) + u(-536, -503)];
      this["resou" + r(71, 81) + u(-484, -487) + "es"] = t["resou" + r(bt, 81) + i(352, 328) + "es"];
      this.index = t[u(-432, -462)];
      this.instance = t["insta" + r(At, 128)];
      this.textEndsWith = t[i(328, 307) + u(-485, -493) + "th"];
      this[i(wt, 333) + u(-530, -493) + "th"] = t[i(305, 333) + u(-527, -493) + "th"];
      this.idEndsWith = t[r(It, 108) + "sWith"];
      this[i(366, 330) + "NameE" + i(Ct, Et) + "th"] = t["classNameE" + i(284, 322) + "th"];
      this[u(-518, -526) + "geNameStar" + i(St, 341) + "h"] = t[r(32, 58) + "geNameStar" + u(-455, -474) + "h"];
      this[r(Mt, 58) + u(-511, -523) + "eEnds" + u(-462, -457)] = t["packageNameEnds" + i(350, 358)];
      this.depth = t.depth;
      this[r(34, Bt) + "sInside"] = t[r(Rt, zt) + r(118, 85) + "de"];
      this["visibleToU" + u(-456, -467)] = t[e(853, Tt) + e(857, 839) + "ser"];
      this["child" + r(94, 124) + "lingSelector"] = [];
      this["child" + u(-491, -460) + r(118, 105)] = [];
      this.mask = this[i(Ot, 340)](t);
    }
    function jt(t, n) {
      return q(t - z, n);
    }
    function qt(t, n) {
      return q(n - -450, t);
    }
    function Ft(t, n) {
      return q(t - 739, n);
    }
    return n._createClass(Nt, [{
      key: "init",
      value: function () {
        var t = 409,
          e = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : {},
          r = 0;
        function i(t, n) {
          return q(t - 643, n);
        }
        function u(t, n) {
          return q(n - 457, t);
        }
        function o(n, e) {
          return q(n - t, e);
        }
        function a(t, n) {
          return q(n - -744, t);
        }
        n.isDefined(e.text) && (r += P);
        n.isDefined(e.textContains) && (i(948, 927) !== a(-458, -439) ? pwulnnrqvnν += xzeqjgksnzr : r += N);
        n.isDefined(e["textM" + i(919, d) + "s"]) && (r += j);
        n.isDefined(e["textS" + o(673, 701) + "With"]) && (r += F);
        n.isDefined(e[u(728, 760) + u(786, p)]) && (r += U);
        n.isDefined(e[o(712, g) + u(754, 734) + u(735, y) + "s"]) && (r += V);
        n.isDefined(e[a(-446, -477) + "iption"]) && ("CFhQW" !== a(-430, -465) ? r += Y : νyrvvvxltkk += wfndeefzdwz);
        n.isDefined(e[o(676, m) + o(708, k) + a(-437, -447) + "ains"]) && (r += W);
        n.isDefined(e[i(910, 947) + a(-429, -445) + "nMatc" + a(-410, -428)]) && (r += K);
        n.isDefined(e[u(719, x) + u(759, 756) + o(696, 707) + "tsWith"]) && (r += J);
        n.isDefined(e[u(b, A) + a(-414, -437)]) && (r += Q);
        n.isDefined(e.checked) && (r += L);
        n.isDefined(e["click" + o(716, 687)]) && (r += X);
        n.isDefined(e["longClicka" + a(-399, -404)]) && (r += G);
        n.isDefined(e[o(700, w) + "lable"]) && (r += Z);
        n.isDefined(e[i(I, 934) + "ed"]) && (r += _);
        n.isDefined(e[u(C, E) + "able"]) && (r += $);
        n.isDefined(e[o(703, 725) + "ed"]) && (r += tt);
        n.isDefined(e[a(-440, -411) + a(-411, -419)]) && (r += nt);
        n.isDefined(e["packa" + o(S, M) + "e"]) && (r += et);
        n.isDefined(e[o(671, 684) + "geNameMatc" + u(736, 773)]) && (r += rt);
        n.isDefined(e["resou" + u(705, B)]) && (r += it);
        n.isDefined(e.resourceIdMatches) && (r += ut);
        n.isDefined(e.index) && (r += ot);
        n.isDefined(e["insta" + u(803, 789)]) && (r += at);
        return r;
      }
    }, {
      key: qt(-160, -148),
      value: function () {
        var t = new Nt(this);
        function n(t, n) {
          return qt(n, t - 193);
        }
        function e(t, n) {
          return qt(n, t - 813);
        }
        function r(t, n) {
          return qt(t, n - 295);
        }
        function i(t, n) {
          return qt(t, n - -348);
        }
        t[e(646, 672) + "OrSibling"] = [];
        t["childOrSib" + i(-432, -459) + "elector"] = [];
        for (var u = 0; u < this.childOrSibling.length; u++) {
          var o = this[e(646, 632) + n(71, 42) + r(176, 154)][u];
          t["child" + e(691, 660) + n(52, 41)].push(o);
        }
        for (var a = 0; a < this[r(c, 128) + n(71, 82) + e(702, l) + e(f, 695) + "or"][e(626, h) + "h"]; a++) {
          var s = this["childOrSiblingS" + e(680, 677) + "or"][a].clone();
          t[e(646, 649) + "OrSiblingS" + i(-464, -481) + "or"][e(v, 641)](s);
        }
        return t;
      }
    }, {
      key: qt(-165, -167),
      value: function (t) {
        var n,
          e,
          r = 109;
        function i(t, n) {
          return qt(n, t - r);
        }
        if (i(-63, -30) !== i(-75, -110)) {
          this[n = 1124, e = 1139, Pt(n - -16, e) + "OrSibling"][function (t, n) {
            return Pt(t - -1593, n);
          }(-443, -422)](i(-58, -19));
          this["childOrSiblingS" + function (t, n) {
            return Pt(n - -402, t);
          }(807, 772) + "or"][i(-48, -56)](new Nt(t));
          return this;
        }
        mjhejsudnin += hgzgνxahcaq;
      }
    }, {
      key: qt(-116, -120) + "ng",
      value: function (t) {
        function n(t, n) {
          return qt(t, n - 794);
        }
        this["child" + n(655, a) + "ling"].push("sibling");
        this["child" + n(676, 672) + n(672, s) + (i = -688, u = -664, qt(i, u - -531) + "or")][e = -388, r = -422, jt(e - -1028, r)](new Nt(t));
        return this;
        var e, r, i, u;
      }
    }, {
      key: "updateInstance",
      value: function (t) {
        function n(t, n) {
          return jt(n - -1130, t);
        }
        function e(t, n) {
          return Pt(t - -1569, n);
        }
        function r(t, n) {
          return qt(n, t - 273);
        }
        var i, u;
        this[n(-487, -500) + n(-492, -455) + e(-373, -343) + "elector"].length > 0 ? this["childOrSiblingS" + n(-487, -466) + "or"][this[e(-429, -417) + r(151, o) + "lingSelector"][i = 845, u = 868, qt(u, i - 1032) + "h"] - 1][n(-413, -449) + r(155, 157)] = t : this[n(-452, -449) + n(-418, -451)] = t;
      }
    }, {
      key: "toStr" + Pt(1177, 1173),
      value: function () {
        function n(t, n) {
          return jt(t - -31, n);
        }
        function o(t, n) {
          return Ft(t - -163, n);
        }
        function a(t, n) {
          return Ft(t - -1364, n);
        }
        T.log(n(t, 642) + a(-303, -265) + "-------Sel" + o(866, 883) + o(884, 923) + a(-353, -364) + n(e, 674) + a(-303, -321) + o(898, r) + "-");
        return JSON["strin" + (s = -243, c = -228, jt(s - -925, c))](this[n(i, u)]);
        var s, c;
      }
    }]);
  }(),
  P = 1,
  N = 2,
  j = 4;
function q(t, n) {
  var e = H();
  return (q = function (t, n) {
    return e[t -= 262];
  })(t, n);
}
var F = 8,
  U = 16,
  V = 32,
  Y = 64,
  W = 128,
  K = 256,
  J = 512,
  Q = 1024,
  L = 2048;
function H() {
  var t = ["172336frhgnj", "textS", "lingS", "ble", "packa", "lengt", "tarts", "geNam", "FIgyE", "descr", "93546mZkfrw", "171nouvzO", "mask", "323615zvdFWE", "ring-", "338470GlNnTC", "click", "bound", "atche", "NameM", "Gapot", "mikrF", "textE", "textM", "check", "child", "3795300lHrIUg", "rceId", "resou", "nStar", "189ahNLWj", "sInsi", "ector", "scrol", "ains", "push", "focus", "ndsWi", "longC", "nCont", "licka", "iptio", "Name", "Match", "clone", "class", "3dASXje", "hORZs", "descE", "able", " toSt", "ling", "nMatc", "lable", "idEnd", "init", "tsWit", "822960fveaaL", "hes", "elect", "ontai", "visib", "ing", "ser", "-----", "leToU", "enabl", "ted", "index", "eMatc", "OrSib", "1772356cfufyz", "sibli", "With", "nce", "selec", "insta", "gify", "textC"];
  return (H = function () {
    return t;
  })();
}
var X = 4096,
  G = 8192,
  Z = 16384,
  _ = 32768,
  $ = 65536,
  tt = 131072,
  nt = 262144,
  et = 524288,
  rt = 1048576,
  it = 2097152,
  ut = 4194304,
  ot = 8388608,
  at = 16777216;
function st(t, n) {
  var e = ct();
  return (st = function (t, n) {
    return e[t -= 265];
  })(t, n);
}
function ct() {
  var t = ["longC", "hes", "324120kEMMze", "lick", "textS", "ng---", "Strin", "idMat", "forma", "sort", "insta", "geNam", "lecto", "kEXif", "ains", "lBack", "yCDYn", "nodes", "filte", "sInPa", "desc", "getUi", "logge", "SGWYX", "OaaWb", "ins", "eMatc", "botto", "abs", "llIns", "empty", "omPar", "serve", "log", "drawi", "ble", "ram", "NameC", "paren", "oStri", "$node", "objIn", "jFuRX", "---", "getSe", "gTvNS", "child", "1304109QwutfM", "sourc", "eStar", "AZDxp", "UISel", "visib", "packa", "click", "CabBM", "obj", "lengt", "lecti", "nMatc", "atche", "top", "attri", "getFr", "iptio", "rceNa", "NameM", "conta", "ard", "15692uNDUij", "lForw", "exist", "iObje", "class", "textM", "rent", "ward", "ByIns", "toStr", "scrol", "rPara", "Count", "5230CHobBg", "ndsWi", "on to", "Rect ", "licka", "-----", "forEa", "nativ", "MwaeH", "able", "With", "text", "node", "find", "clone", "cxQvi", "UkbSw", "ntDes", "each", "eCont", "descr", "138345mYJEUj", "idSta", "ren", "foOfA", "size", "depth", "reset", "check", "ent", "eEnds", "waitF", "ngOrd", "setTe", "Name", "nRPC", "pbeUv", "descS", "torPa", "_remo", "until", "leToU", "bound", "sCont", "textC", "Selec", "push", "nce", "resou", "UIObj", "teJso", "tance", "heigh", "focus", "828744xrzAuf", "inter", "show", "ontai", "95OsBClX", "tChee", "Objec", "confi", "left", "NameS", "ect", "Match", "idEnd", "lRigh", "descE", "KSHpu", "width", "colla", "rioNo", "lLeft", "tsWit", "lable", "ector", "ches", "findO", "descM", "8lcbUWy", "enabl", "sibli", "selec", "ser", "ion", "edita", "index", "734694xljcch", "----", "bVjJT", "pAako", "(.*)", "setSe", "IawMs", "right", "_getU"];
  return (ct = function () {
    return t;
  })();
}
!function () {
  var t = 107,
    n = 127,
    e = 1086,
    r = 293,
    i = 854,
    u = 975,
    o = ct();
  function a(t, n) {
    return st(t - 661, n);
  }
  function s(t, n) {
    return st(n - -140, t);
  }
  function c(t, n) {
    return st(n - 457, t);
  }
  for (;;) try {
    if (169349 === parseInt(s(t, 148)) / 1 + -parseInt(s(102, n)) / 2 + parseInt(a(1027, e)) / 3 + parseInt(s(350, r)) / 4 * (parseInt(c(824, 782)) / 5) + -parseInt(c(i, 812)) / 6 + parseInt(c(754, 778)) / 7 + -parseInt(a(1008, u)) / 8 * (parseInt(s(217, 271)) / 9)) {
      break;
    }
    o.push(o.shift());
  } catch (t) {
    o.push(o.shift());
  }
}();
var lt = function () {
    var t = 629,
      e = 673,
      r = 204,
      i = 755,
      u = 306,
      o = 741,
      a = 241,
      s = 210,
      c = 540,
      l = 148,
      f = 165,
      h = 688,
      v = 200,
      d = 604,
      p = 360,
      g = 503,
      y = 504,
      m = 284,
      k = 382,
      x = 271,
      b = 360,
      A = 370,
      w = 326,
      I = 334,
      C = 127,
      E = 468,
      S = 21,
      M = 312,
      B = 811,
      z = 164,
      T = 1190,
      P = 1220,
      N = 540,
      j = 807,
      q = 720,
      F = 1025,
      U = 625,
      V = 1015,
      Y = 1061,
      W = 212,
      K = 668,
      J = 596,
      Q = 458,
      L = 616,
      H = 1042,
      X = 1126,
      G = 1012,
      Z = 1062,
      _ = 822,
      $ = 1414,
      tt = 1119,
      nt = 1036,
      et = 526,
      rt = 813,
      it = 1219,
      ut = 51,
      ot = 27,
      at = 637,
      ct = 693,
      lt = 84,
      ht = 418,
      dt = 1062,
      pt = 807,
      gt = 566,
      yt = 520,
      mt = 917,
      kt = 982,
      xt = 955,
      bt = 71,
      At = 53,
      wt = 790,
      It = 770,
      Ct = 602,
      Et = 633,
      St = 554,
      Mt = 88,
      Bt = 1179,
      Rt = 926,
      zt = 868,
      Tt = 135,
      Ot = 10,
      Dt = 998;
    function Pt(t, n) {
      return st(n - -131, t);
    }
    function Nt(t, n) {
      return st(t - 305, n);
    }
    function jt(t, n) {
      return st(n - -895, t);
    }
    function qt(t, n) {
      return st(t - 366, n);
    }
    return n._createClass(function t() {
      var e,
        r,
        i = 598;
      n._classCallCheck(this, t);
      this["selectorPa" + (e = 929, r = Dt, st(r - i, e))] = {};
    }, [{
      key: "server",
      get: function () {
        return O;
      }
    }, {
      key: "text",
      value: function () {
        function t(t, n) {
          return st(n - 269, t);
        }
        var n = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        this["selec" + t(624, 574) + "ram"][t(465, 547)] = n;
        return this;
      }
    }, {
      key: "textC" + Nt(t, 545) + "ns",
      value: function () {
        function t(t, n) {
          return Nt(t - -545, n);
        }
        var n,
          e,
          r = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        this[t(110, Tt) + t(65, Ot) + "ram"][function (t, n) {
          return Nt(n - -1257, t);
        }(-564, -641) + (n = -70, e = -159, Nt(e - -788, n)) + "ns"] = r;
        return this;
      }
    }, {
      key: "textMatches",
      value: function () {
        var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function e(t, n) {
          return Nt(n - 258, t);
        }
        n.isRegExp(t) && (t = t[e(939, 975) + "e"]);
        this["selec" + e(Rt, zt) + "ram"].textMatches = t;
        return this;
      }
    }, {
      key: Nt(e, 612) + "tarts" + Nt(582, 544),
      value: function () {
        function t(t, n) {
          return qt(t - 417, n);
        }
        var n = arguments[t(1204, Bt) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        this["selec" + t(1088, 1106) + "ram"].textStartsWith = n;
        return this;
      }
    }, {
      key: "textEndsWith",
      value: function (t) {
        var n = 1025;
        function e(t, e) {
          return jt(t, e - n);
        }
        return this[e(546, 568) + e(531, St) + "s"](qt(140 - -585, Mt) + t);
      }
    }, {
      key: Nt(689, 600),
      value: function () {
        function t(t, n) {
          return Nt(n - -74, t);
        }
        var n = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        this["selec" + function (t, n) {
          return Pt(t, n - 62);
        }(191, 236) + t(Ct, 631)]["descr" + t(Et, 659) + "n"] = n;
        return this;
      }
    }, {
      key: "descContains",
      value: function () {
        var t,
          n,
          e = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function r(t, n) {
          return Nt(n - -1236, t);
        }
        this["selectorPa" + r(-570, -531)][r(-673, -644) + "iptionCont" + (t = -455, n = -428, Pt(n, t - -702))] = e;
        return this;
      }
    }, {
      key: Pt(156, 215) + jt(-493, -471) + "s",
      value: function () {
        var t = arguments[r(-185, -205) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function e(t, n) {
          return qt(t - 8, n);
        }
        function r(t, n) {
          return qt(n - -992, t);
        }
        n.isRegExp(t) && (t = t[e(786, wt) + "e"]);
        this[e(724, It) + "torPa" + r(-315, -226)]["descriptio" + function (t, n) {
          return Pt(t, n - -854);
        }(-590, -562) + "hes"] = t;
        return this;
      }
    }, {
      key: jt(-514, -591) + "tartsWith",
      value: function () {
        function t(t, n) {
          return jt(t, n - 527);
        }
        var n = arguments[t(79, At) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        this[t(36, -18) + "torParam"][function (t, n) {
          return qt(t - -15, n);
        }(638, 673) + "iptionStartsWith"] = n;
        return this;
      }
    }, {
      key: Pt(143, r) + jt(-591, -627) + "th",
      value: function () {
        var t = arguments[function (t, n) {
          return jt(t, n - 1787);
        }(1400, 1313) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function n(t, n) {
          return Nt(n - -676, t);
        }
        return this["descM" + n(46, 53) + "s"](n(bt, -12) + t);
      }
    }, {
      key: "id",
      value: function () {
        function t(t, n) {
          return Nt(t - 300, n);
        }
        function n(t, n) {
          return qt(n - -854, t);
        }
        if ("ZKGZz" !== n(-193, -127)) {
          var e = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
          this["selec" + n(-135, -183) + "ram"][t(920, kt) + "rceId"] = e;
          return this;
        }
        var r,
          i,
          u = arguments.length > 0 && arguments[0] !== fkfwikzhhiy ? arguments[0] : 0;
        this[t(xt, 986) + function (t, n) {
          return jt(t, n - 1878);
        }(1210, 1288) + (r = -474, i = -513, Pt(i, r - -743))][n(-162, -195)] = u;
        return this;
      }
    }, {
      key: "idContains",
      value: function () {
        var t = arguments[n(616, 632) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function n(t, n) {
          return Nt(t - -110, n);
        }
        return this[n(gt, yt) + "ches"]("(.*)" + t + function (t, n) {
          return jt(t, n - 1453);
        }(995, mt));
      }
    }, {
      key: jt(-665, -606) + "rtsWith",
      value: function () {
        var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function n(t, n) {
          return Nt(n - 158, t);
        }
        return this[n(902, 834) + n(779, pt)](t + "(.*)");
      }
    }, {
      key: jt(-577, -562) + "sWith",
      value: function () {
        function t(t, n) {
          return qt(n - 406, t);
        }
        var n = arguments[t(1217, 1193) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this["idMat" + t(dt, 1116)]("(.*)" + n);
      }
    }, {
      key: Pt(226, 240) + "ches",
      value: function () {
        var t,
          e,
          r,
          i,
          u,
          o,
          a = arguments[t = 810, e = 722, Nt(t - lt, e) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function s(t, n) {
          return Pt(n, t - ht);
        }
        n.isRegExp(a) && (a = a[s(699, 664) + "e"]);
        this[s(at, ct) + s(592, 654) + "ram"][u = -270, o = -325, Pt(o, u - -454) + "rceId" + (r = -609, i = -655, jt(i, r - -46) + "es")] = a;
        return this;
      }
    }, {
      key: jt(-500, -458) + jt(-537, -594),
      value: function () {
        var t = arguments[n(ut, ot) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function n(t, n) {
          return Nt(n - -699, t);
        }
        this[n(-83, -44) + "torParam"][n(31, 43) + n(-128, -93)] = t;
        return this;
      }
    }, {
      key: "class" + Nt(706, i) + "ontains",
      value: function () {
        function t(t, n) {
          return Nt(n - -1095, t);
        }
        var n = arguments[t(-368, -369) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this["classNameM" + t(-347, -366) + "s"]("(.*)" + n + "(.*)");
      }
    }, {
      key: Pt(352, u) + Nt(635, 682) + "tarts" + jt(-547, -618),
      value: function () {
        var t = arguments[function (t, n) {
          return Pt(n, t - 141);
        }(431, 389) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this.classNameMatches(t + qt(-41 - -766, 31));
      }
    }, {
      key: "classNameE" + qt(634, 594) + "th",
      value: function () {
        function t(t, n) {
          return jt(n, t - 1701);
        }
        var n = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this["class" + t(1236, 1247) + t(1230, 1247) + "s"](function (t, n) {
          return Nt(n - -89, t);
        }(532, 575) + n);
      }
    }, {
      key: Pt(304, 306) + "NameMatches",
      value: function () {
        var t,
          e,
          r = arguments[i(-25, 56) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function i(t, n) {
          return jt(n, t - 449);
        }
        function u(t, n) {
          return qt(t - -1045, n);
        }
        n.isRegExp(r) && (r = r[t = 1135, e = 1126, Pt(e, t - 854) + "e"]);
        this["selec" + u(-374, -410) + i(-46, -97)]["classNameM" + u(-255, -291) + "s"] = r;
        return this;
      }
    }, {
      key: Nt(722, 733) + Pt(311, 244) + "e",
      value: function () {
        var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        this[function (t, n) {
          return jt(t, n - -71);
        }(-682, -616) + "torParam"].packageName = t;
        return this;
      }
    }, {
      key: "packa" + jt(-440, -520) + Pt(85, 155) + "ains",
      value: function () {
        function t(t, n) {
          return Pt(t, n - -462);
        }
        var n = arguments[t(-199, -172) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this["packa" + t(-143, -218) + "eMatc" + function (t, n) {
          return Pt(n, t - -77);
        }(157, 100)]("(.*)" + n + "(.*)");
      }
    }, {
      key: qt(783, 756) + qt(o, 732) + Nt(718, 806) + Pt(a, s) + "h",
      value: function () {
        var t,
          n,
          e = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this["packageNam" + (t = 1166, n = it, qt(n - 463, t) + "hes")](e + "(.*)");
      }
    }, {
      key: qt(783, 863) + jt(-607, -520) + qt(663, 716) + jt(-561, -618),
      value: function () {
        var t,
          n,
          e,
          r,
          i = arguments[u(-615, -528) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function u(t, n) {
          return Pt(t, n - -818);
        }
        return this["packa" + u(-639, -574) + (e = -60, r = -63, qt(e - -816, r)) + (t = 801, n = rt, Pt(t, n - 579))]("(.*)" + i);
      }
    }, {
      key: "packa" + jt(-439, -520) + jt(-568, -505) + "hes",
      value: function () {
        function t(t, n) {
          return Pt(n, t - 1126);
        }
        function e(t, n) {
          return Nt(n - 319, t);
        }
        if ("cxQvi" !== Nt(1113 - et, 1141)) {
          return this.obj["resou" + t(1424, 1456) + "me"] || "";
        }
        var r = arguments[t(1416, $) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        n.isRegExp(r) && (r = r[e(tt, nt) + "e"]);
        this["selec" + e(907, 929) + "ram"].packageNameMatches = r;
        return this;
      }
    }, {
      key: "bounds",
      value: function (t, n, e, r) {}
    }, {
      key: jt(-604, -586) + "sInside",
      value: function (t, n, e, r) {
        var i, u;
        this[function (t, n) {
          return Nt(t - -964, n);
        }(-309, -226) + "torParam"][i = -273, u = -220, qt(u - -895, i) + "sInside"] = {
          left: t,
          top: n,
          right: e,
          buttom: r
        };
        return this;
      }
    }, {
      key: "bound" + jt(-613, -585) + "ains",
      value: function (t, n, e, r) {}
    }, {
      key: "drawingOrder",
      value: function () {
        Pt(955, 925 - 635);
      }
    }, {
      key: Pt(321, 287) + Nt(581, c),
      value: function () {
        var t,
          n,
          e = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
        function r(t, n) {
          return qt(n - -1134, t);
        }
        this[r(-429, -418) + r(-549, -463) + (t = -407, n = -439, Pt(n, t - -676))]["click" + function (t, n) {
          return jt(n, t - 1614);
        }(995, 1046)] = !!e;
        return this;
      }
    }, {
      key: "longC" + Nt(576, 652) + "ble",
      value: function () {
        function t(t, n) {
          return Nt(n - 614, t);
        }
        function n(t, n) {
          return Nt(t - -1149, n);
        }
        var e = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
        this["selec" + n(-539, -551) + n(-444, -470)][t(1275, 1283) + "licka" + t(1371, 1318)] = !!e;
        return this;
      }
    }, {
      key: Nt(600, 632) + jt(-585, -619),
      value: function () {
        function t(t, n) {
          return Nt(t - -897, n);
        }
        var n,
          e,
          r = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
        this[t(-242, -286) + "torPa" + (n = 277, e = 269, Pt(n, e - 0))][t(-297, -234) + "able"] = !!r;
        return this;
      }
    }, {
      key: "checked",
      value: function () {
        function t(t, n) {
          return qt(n - -1139, t);
        }
        var n = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
        this["selec" + t(-452, -468) + "ram"][t(-558, -478) + "ed"] = !!n;
        return this;
      }
    }, {
      key: qt(716, 735) + "ted",
      value: function () {
        var t = !(arguments[n(1020, 1064) + "h"] > 0 && 0 !== arguments[0]) || arguments[0];
        function n(t, n) {
          return Nt(t - 294, n);
        }
        this["selec" + n(904, _) + "ram"].selected = !!t;
        return this;
      }
    }, {
      key: Nt(653, 715) + "ed",
      value: function () {
        function t(t, n) {
          return jt(t, n - 1609);
        }
        if ("AZDxp" === t(1079, 1128)) {
          var n = !(arguments[i = -289, u = -303, Pt(i, u - -593) + "h"] > 0 && 0 !== arguments[0]) || arguments[0];
          this[e = 633, r = 705, Nt(r - 50, e) + "torParam"][t(G, Z) + "ed"] = !!n;
          return this;
        }
        return this.top + this[t(1070, 1033) + "t"]() / 2;
        var e, r, i, u;
      }
    }, {
      key: Pt(l, 162),
      value: function () {
        function t(t, n) {
          return Nt(t - -1068, n);
        }
        var n = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 0;
        this[t(-413, -363) + "torPa" + t(-363, -291)].depth = n;
        return this;
      }
    }, {
      key: jt(-533, -452) + Nt(647, 584),
      value: function () {
        function t(t, n) {
          return jt(t, n - 1621);
        }
        function n(t, n) {
          return jt(t, n - 1085);
        }
        function e(t, n) {
          return Pt(n, t - 430);
        }
        if (n(K, J) !== n(627, 596)) {
          var r = this.bounds();
          return this[n(Q, 496) + e(L, 596) + t(1045, 1028)]("click", [r.centerX(), r.centerY()]);
        }
        var i,
          u,
          o = !(arguments[e(720, 796) + "h"] > 0 && 0 !== arguments[0]) || arguments[0];
        this["selec" + (i = 289, u = 328, Nt(i - -321, u)) + t(H, X)]["scrol" + n(445, 532)] = !!o;
        return this;
      }
    }, {
      key: Pt(294, 222) + Nt(704, 670),
      value: function () {
        function t(t, n) {
          return qt(n - -554, t);
        }
        t(267, 233);
        return this["class" + t(W, 213) + "ontains"]("Edit");
      }
    }, {
      key: "multiLine",
      value: function () {
        var t,
          n,
          e = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
        function r(t, n) {
          return qt(n - 609, t);
        }
        this[t = V, n = Y, jt(n, t - 1560) + "torPa" + r(1401, 1375)][r(1498, 1418) + "lable"] = !!e;
        return this;
      }
    }, {
      key: "index",
      value: function () {
        var t,
          n,
          e = arguments[r(1007, 1096) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 0;
        function r(t, n) {
          return Nt(n - 370, t);
        }
        this[r(1086, F) + r(1013, 980) + (t = 661, n = U, qt(t - -105, n))].index = e;
        return this;
      }
    }, {
      key: "indexInPar" + Pt(137, f),
      value: function (t) {
        function n(t, n) {
          return Nt(t - -1147, n);
        }
        return n(-506, -541) === n(-506, -592) ? this[n(-488, -573)](t) : this[n(-404, -357) + "atches"]("(.*)" + νhrexjxphav);
      }
    }, {
      key: Nt(721, 694) + qt(674, 763) + jt(-488, -544),
      value: function () {
        var t,
          n,
          e,
          r,
          i = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
        function u(t, n) {
          return jt(n, t - 763);
        }
        this["selectorPa" + (e = -287, r = -335, qt(e - -1053, r))][u(284, 221) + u(176, 221) + (t = -150, n = -131, Pt(n, t - -370))] = !!i;
        return this;
      }
    }, {
      key: "focusable",
      value: function () {
        function t(t, n) {
          return qt(t - 33, n);
        }
        function n(t, n) {
          return jt(n, t - 318);
        }
        var e,
          r,
          i = !(arguments[n(-156, -222) + "h"] > 0 && 0 !== arguments[0]) || arguments[0];
        this[t(749, q) + n(-272, -308) + n(-177, -128)][t(719, 688) + (e = -324, r = -300, jt(e, r - 319))] = !!i;
        return this;
      }
    }, {
      key: "focused",
      value: function () {
        var t,
          n,
          e,
          r,
          i = !(arguments[u(653, 738) + "h"] > 0 && 0 !== arguments[0]) || arguments[0];
        function u(t, n) {
          return qt(n - -49, t);
        }
        this[u(756, 667) + (e = 180, r = 155, Pt(r, e - 6)) + u(632, 717)][t = 721, n = j, Nt(n - 182, t) + "ed"] = !!i;
        return this;
      }
    }, {
      key: "instance",
      value: function (t) {
        var n, e, r, i;
        function u(t, n) {
          return Nt(t - 450, n);
        }
        this["selec" + (r = -123, i = -58, Nt(i - -668, r)) + u(1155, 1134)][u(1129, T) + (n = 1220, e = P, qt(e - N, n))] = t;
        return this;
      }
    }, {
      key: "getSe" + Nt(681, 611) + "rParam",
      value: function () {
        return new D(this["selectorPa" + (t = z, n = 231, Pt(n, t - -105))]);
        var t, n;
      }
    }, {
      key: Nt(599, 582) + Nt(617, 551) + qt(671, 626) + jt(-424, -495),
      value: function () {
        var t, n;
        this[t = -95, n = -141, qt(n - -857, t) + "torParam"] = {};
      }
    }, {
      key: "exists",
      value: function () {
        function t(t, n) {
          return jt(t, n - B);
        }
        return !!this[t(327, M) + "r"][t(305, 351) + "s"](this["getSe" + t(286, 292) + (n = 782, e = 733, Nt(n - 212, e) + "m")]());
        var n, e;
      }
    }, {
      key: Pt(207, 149),
      value: function () {
        function t(t, n) {
          return Nt(t - -1029, n);
        }
        function n(t, n) {
          return qt(n - -630, t);
        }
        function e(t, n) {
          return qt(t - -365, n);
        }
        function r(t, n) {
          return jt(n, t - 938);
        }
        if ("yCDYn" !== n(64, 116)) {
          this[n(136, 132) + "r"].logger[e(398, b)](e(273, 205) + t(-452, -468) + r(359, 324) + "ect toStri" + e(A, 414) + t(-452, -408) + "--");
          return ocibzxywamp({
            name: "UIObj" + r(374, w)
          });
        }
        var i = this[t(-316, -324) + "lectorParam"](),
          u = this.server["objIn" + r(I, 278) + "llInstances"](i) || [];
        this[n(114, 86) + n(C, 41) + r(443, 415)].filter && (i[e(383, E) + "r"] = this["selec" + n(S, 41) + "ram"].filter);
        return new vt(u, i);
      }
    }, {
      key: jt(-516, -588) + "Find",
      value: function () {}
    }, {
      key: Nt(603, h) + "or",
      value: function () {}
    }, {
      key: Pt(v, 251) + "r",
      value: function (t) {
        var n, e;
        this["selec" + (n = 890, e = 824, Nt(e - 214, n) + "ram")].filter = t;
        return this;
      }
    }, {
      key: Nt(650, d) + Nt(619, 689),
      value: function () {
        function t(t, n) {
          return Nt(t - -299, n);
        }
        this["getSe" + t(k, 374) + t(x, 309) + "m"]();
        var n = this.find();
        return n.length >= 1 ? n[0] : null;
      }
    }, {
      key: jt(-488, -550) + "ne",
      value: function () {
        var t,
          n,
          e = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 1e4,
          r = this[t = m, n = 332, Nt(t - -429, n) + i(-68, 15) + "rParam"]();
        if (!this[i(69, 35) + "r"].waitForExists(r, e)) {
          return null;
        }
        function i(t, n) {
          return Pt(t, n - -230);
        }
        var u = this["findO" + function (t, n) {
          return Pt(n, t - 744);
        }(927, 946)]();
        return u ? new ft(u, r) : null;
      }
    }, {
      key: "toString",
      value: function () {
        var t,
          e,
          r = 219;
        function i(t, n) {
          return Pt(t, n - r);
        }
        function u(t, n) {
          return Nt(t - 463, n);
        }
        function o(t, n) {
          return Pt(t, n - -784);
        }
        this.server[u(1154, 1152) + "r"][u(1165, 1086)]("-----" + i(435, p) + i(443, g) + i(y, 431) + " toString------" + o(-602, -559));
        return n.toJson({
          name: "UISel" + o(-656, -572),
          data: this[i(496, 438) + (t = 970, e = 889, jt(t, e - 1479)) + o(-545, -515)]
        });
      }
    }]);
  }(),
  ft = function () {
    var t = 360,
      e = 413,
      r = 536,
      i = 569,
      u = 682,
      o = 508,
      a = 984,
      s = 762,
      c = 703,
      l = 399,
      f = 374,
      h = 538,
      v = 923,
      d = 105,
      p = 1129,
      g = 1179,
      y = 480,
      m = 1172,
      k = 1245,
      x = 1276,
      b = 926,
      A = 1259,
      w = 904,
      I = 1041,
      C = 972,
      E = 953,
      S = 16,
      M = 53,
      B = 4,
      z = 626,
      T = 695,
      D = 469,
      P = 997,
      N = 288,
      j = 447,
      q = 912,
      F = 268,
      U = 557,
      V = 513,
      Y = 592,
      W = 818,
      K = 691,
      J = 799,
      Q = 579,
      L = 678,
      H = 1139,
      X = 1219,
      G = 552,
      Z = 491,
      _ = 457,
      $ = 315,
      tt = 245,
      nt = 430,
      et = 281,
      rt = 633,
      it = 449,
      ut = 386,
      ot = 1189,
      at = 280,
      ct = 838,
      lt = 1018,
      ft = 1022,
      dt = 41,
      pt = 1146,
      gt = 1070,
      yt = 34,
      mt = 1411,
      kt = 1433,
      xt = 824,
      bt = 1084,
      At = 702,
      wt = 1103,
      It = 1122,
      Ct = 1151,
      Et = 598,
      St = 346,
      Mt = 1240,
      Bt = 1240,
      Rt = 1301,
      zt = 1349,
      Tt = 947,
      Ot = 831,
      Dt = 839,
      Pt = 904,
      Nt = 1070,
      jt = 800,
      qt = 560,
      Ft = 665,
      Ut = 831,
      Vt = 897;
    function Yt(t, n) {
      return st(n - 569, t);
    }
    function Wt(t, n) {
      return st(n - -930, t);
    }
    function Kt(t, n) {
      return st(n - 65, t);
    }
    function Jt(t, n) {
      return st(n - 260, t);
    }
    function Qt() {
      var t = 477;
      var e,
        r,
        i,
        u = arguments[r = 432, i = 371, st(i - -50, r) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {};
      var o,
        a,
        s,
        c,
        l,
        f,
        h = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {},
        v = arguments[o = 908, a = Ut, st(a - 410, o) + "h"] > 2 && 0 !== arguments[2] ? arguments[2] : {};
      n._classCallCheck(this, Qt);
      this[l = 927, f = Vt, st(f - t, l)] = u;
      this["selectorPa" + (s = -561, c = -478, st(s - -961, c))] = h;
      this.config = {
        native: null === (e = v.native) || 0 === e || e
      };
    }
    return n._createClass(Qt, [{
      key: "server",
      get: function () {
        return O;
      }
    }, {
      key: Jt(762, 678) + Kt(414, 341),
      value: function () {
        return !!this[e = 649, r = qt, Jt(e, r - -120)]["click" + (t = 669, n = Ft, Kt(n, t - 328))];
        var t, n, e, r;
      }
    }, {
      key: "checked",
      value: function () {
        return !!this.obj[t = 73, n = 53, Kt(n, t - -287) + "ed"];
        var t, n;
      }
    }, {
      key: Kt(392, t) + "able",
      value: function () {
        var t = 336;
        function n(n, e) {
          return Kt(n, e - t);
        }
        return !!this[n(jt, 821)][n(707, 696) + "able"];
      }
    }, {
      key: Kt(484, e) + "ed",
      value: function () {
        return !!this.obj[t = -238, n = -322, Yt(n, t - -1155) + "ed"];
        var t, n;
      }
    }, {
      key: Jt(549, 580) + Jt(524, r),
      value: function () {
        var t,
          n,
          e,
          r,
          i = 1529;
        return !!this.obj[e = -396, r = -330, Kt(e, r - -715) + (t = 902, n = 875, Wt(t, n - i))];
      }
    }, {
      key: Yt(818, 889) + "ed",
      value: function () {
        return !!this.obj[t = -249, n = -265, Kt(n, t - -634) + "ed"];
        var t, n;
      }
    }, {
      key: Jt(i, 624) + "lickable",
      value: function () {
        return !!this.obj[e = -633, r = -635, Kt(r, e - -1062) + (t = -428, n = -355, Wt(n, t - 231)) + "ble"];
        var t, n, e, r;
      }
    }, {
      key: "selected",
      value: function () {
        return !!this.obj.selected;
      }
    }, {
      key: "_remo" + Wt(-664, -613) + Wt(-633, -628),
      value: function (t) {
        var n = 1456;
        function e(t, e) {
          return Wt(e, t - n);
        }
        var r,
          i,
          u = arguments[e(Tt, 968) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : [],
          o = arguments.length > 2 && 0 !== arguments[2] ? arguments[2] : {};
        if (!u.length) {
          if ("yjnfd" === e(829, 825)) {
            var a = arguments.length > 0 && arguments[0] !== yνqjfcqmzcc ? arguments[0] : "";
            return this.classNameMatches(e(885, Ot) + a);
          }
          u[e(Dt, Pt)](this["selectorPa" + (r = Nt, i = 1152, Yt(r, i - 183))]);
        }
        return this.server.JsonRPC(t, u, o);
      }
    }, {
      key: Kt(480, 483),
      value: function () {
        var t,
          n,
          e = 463;
        function r(t, n) {
          return Wt(t, n - e);
        }
        if (!this[r(-145, -139) + "g"][r(-274, -193) + "e"]) {
          var i = this[t = 551, n = 579, Kt(n, t - 177) + "s"]();
          return this._remoteJsonRPC(function (t, n) {
            return Wt(n, t - 1861);
          }(zt, 1288), [i.centerX(), i.centerY()]);
        }
        function u(t, n) {
          return Jt(n, t - -1024);
        }
        return this["_remo" + u(-447, -507) + u(-462, -421)](u(-346, -384));
      }
    }, {
      key: "longClick",
      value: function () {
        if (!this.config.native) {
          var t = this.bounds();
          return this[n(Mt, 1207) + "teJso" + e(717, 664)]("longClick", [t.centerX(), t.centerY()]);
        }
        function n(t, n) {
          return Kt(n, t - 869);
        }
        function e(t, n) {
          return Jt(t, n - 102);
        }
        return this[n(Bt, 1175) + e(702, 679) + "nRPC"]("longC" + n(Rt, 1302));
      }
    }, {
      key: Wt(-665, -630) + "xt",
      value: function () {
        function t(t, n) {
          return Kt(n, t - 46);
        }
        var n,
          e,
          r = arguments[t(532, Et) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function i(t, n) {
          return Kt(t, n - 40);
        }
        return this[t(417, St) + "teJsonRPC"]("setText", [this[i(459, 455) + (n = -329, e = -398, Jt(e, n - -894)) + i(481, 505)], r]);
      }
    }, {
      key: "copy",
      value: function () {}
    }, {
      key: "cut",
      value: function () {}
    }, {
      key: "paste",
      value: function () {}
    }, {
      key: Jt(530, 620) + Jt(714, u) + "on",
      value: function (t, n) {}
    }, {
      key: Kt(461, o) + Wt(-460, -496) + "ard",
      value: function () {
        var t = 94;
        function e(n, e) {
          return Yt(n, e - t);
        }
        var r = !(arguments[i(793, xt) + "h"] > 0 && 0 !== arguments[0]) || arguments[0];
        function i(t, n) {
          return Yt(t, n - -166);
        }
        var u = arguments[e(1015, bt) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : 1;
        return this[i(638, 709) + i(At, 720) + "nRPC"](Yt(It, wt - 91) + function (t, n) {
          return Wt(t, n - Ct);
        }(724, 655) + e(1133, 1095), [this.selectorParam, r, u].filter(n.isDefined));
      }
    }, {
      key: Kt(504, 508) + "lBack" + Yt(a, 1009),
      value: function () {
        function t(t, n) {
          return Yt(n, t - 325);
        }
        function e(t, n) {
          return Wt(t, n - 1920);
        }
        var r,
          i,
          u = !(arguments[e(1342, 1411) + "h"] > 0 && 0 !== arguments[0]) || arguments[0],
          o = arguments[e(1359, mt) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : 1;
        return this._remoteJsonRPC(e(1353, kt) + t(1273, 1284) + "ward", [this[t(1244, 1289) + "torParam"], u, o][r = -32, i = 21, Wt(i, r - 516) + "r"](n.isDefined));
      }
    }, {
      key: Wt(-655, -580) + "t",
      value: function () {}
    }, {
      key: Wt(-596, -592) + "pse",
      value: function () {}
    }, {
      key: "expand",
      value: function () {}
    }, {
      key: Wt(-593, -607),
      value: function () {}
    }, {
      key: "scrollUp",
      value: function () {}
    }, {
      key: "scrollDown",
      value: function () {}
    }, {
      key: Wt(-467, -487) + Kt(352, 405),
      value: function () {}
    }, {
      key: Jt(s, c) + Kt(458, l) + "t",
      value: function () {}
    }, {
      key: "child" + Yt(798, 859),
      value: function () {
        function t(t, n) {
          return Yt(n, t - 117);
        }
        function n(t, n) {
          return Kt(n, t - 595);
        }
        function e(t, n) {
          return Jt(t, n - -619);
        }
        function r(t, n) {
          return Kt(t, n - -806);
        }
        if ("pAako" === n(lt, 1085)) {
          var i,
            u = this;
          if (null !== (i = this.obj[n(939, 873)]) && 0 !== i && i[r(-311, -331) + n(950, 1007)]) {
            var o,
              a = this["selec" + n(965, ft) + e(-23, dt)][n(941, 953)]()[n(1070, pt)]({
                textContains: ""
              }),
              s = null === (o = this[r(-397, -321)][n(939, 909)]) || 0 === o ? 0 : o[n(gt, 1122) + t(976, 1057)][e(-12, 23) + "r"](function (t) {
                return t.attribs;
              });
            return new vt(s.map(function (n) {
              function e(n, e) {
                return t(n - -575, e);
              }
              return u[e(507, 420) + "r"][e(483, 535) + "tCheerioNode"](n);
            }), a);
          }
          return this.find({
            selectorParam: {
              textContains: ""
            }
          });
        }
        var c = !(arguments.length > 0 && arguments[0] !== nptskggkits) || arguments[0];
        this["selec" + n(965, 909) + r(-279, -341)]["scrol" + e(yt, -17)] = !!c;
        return this;
      }
    }, {
      key: Wt(-443, -520) + "Count",
      value: function () {
        var t, n, e, r, i, u;
        function o(t, n) {
          return Kt(t, n - 514);
        }
        function a(t, n) {
          return Jt(n, t - 579);
        }
        return null !== (t = this.obj.node) && 0 !== t && t.children ? (null === (n = this[o(1001, 999)][o(947, 858)]) || 0 === n ? 0 : n["child" + (e = 228, r = 198, Wt(e, r - ct))][a(1221, ot) + "r"](function (t) {
          return t[n = 289, e = 284, a(e - -981, n) + "bs"];
          var n, e;
        })).length : this[a(1259, 1178)]["child" + (i = 299, u = at, Kt(u, i - -32))] || 0;
      }
    }, {
      key: Yt(910, 979),
      value: function () {
        function t(t, n) {
          return Jt(n, t - -284);
        }
        function n(t, n) {
          return Yt(n, t - -438);
        }
        function e(t, n) {
          return Wt(n, t - 256);
        }
        function r(t, n) {
          return Yt(n, t - -1450);
        }
        var i,
          u,
          o = arguments[n(G, Z) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 0;
        if (this[r(-471, -387) + "Count"]() <= 0) {
          return "bVjJT" !== n(488, 570) ? new jndqνtaqiem(this.server["forma" + n(_, 383) + t($, tt) + "de"](null === (u = this[r(-461, -480)][r(-602, -610)]) || 0 === u ? 0 : u[t(378, 441) + "t"]), this[n(481, nt) + "torPa" + r(-481, -528)], ktpojmyinvy(this.config, {
            native: !1
          })) : null;
        }
        var a = this["selec" + t(281, et) + e(-274, -199)][e(-393, -419)]()[r(-471, -421)]({});
        if (null !== (i = this[n(551, rt)][t(255, 281)]) && 0 !== i && i.children) {
          var s,
            c = null === (s = this[r(-461, -371)].node) || 0 === s ? 0 : s["child" + n(421, 377)][e(-292, -246) + "r"](function (t) {
              return t.attribs;
            });
          return c[o] ? new Qt(this[r(-485, -475) + "r"]["forma" + n(457, 425) + t(315, 255) + "de"](c[o]), a, this.config) : null;
        }
        var l = this[e(-368, -378) + "teJso" + n(433, 494)]("objInfo", [this["_remo" + r(-564, -489) + e(-372, -379)]("child" + r(-440, -385) + n(it, ut), [this["selec" + n(436, 378) + t(376, 354)], a, o])]);
        return l ? new Qt(l, a) : null;
      }
    }, {
      key: Kt(486, 428) + "iObject",
      value: function () {
        function t(t, n) {
          return Yt(n, t - -1338);
        }
        function n(t, n) {
          return Yt(n, t - 170);
        }
        return this._remoteJsonRPC(t(-384, -424) + t(-442, -368) + "t", [this["selec" + n(1044, 1126) + n(H, X)]]);
      }
    }, {
      key: "sibling",
      value: function () {
        var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 0;
        function n(t, n) {
          return Jt(t, n - -54);
        }
        function e(t, n) {
          return Jt(n, t - -76);
        }
        var r = this["_remo" + i(520, 510) + "nRPC"](i(564, 620) + e(Q, 662) + n(550, 502), [this["_getU" + i(561, 629) + "ct"](), this["selec" + n(560, 511) + "ram"].clone()[e(533, 606) + "ng"]({
          index: t
        })]);
        function i(t, n) {
          return Kt(t, n - 128);
        }
        return this["_remoteJso" + i(448, 495)](i(L, 598) + "fo", [r]);
      }
    }, {
      key: "parent",
      value: function () {
        function t(t, n) {
          return Yt(t, n - -1052);
        }
        var e, r;
        if (null !== (e = this.obj.node) && 0 !== e && e.parent) {
          return new Qt(this.server[t(-120, -111) + "tChee" + t(-83, -144) + "de"](null === (r = this.obj.node) || 0 === r ? 0 : r.parent), this[o(754, W) + "torParam"], n._extend(this[a(-14, -92) + "g"], {
            native: !1
          }));
        }
        var i = this[t(-126, -133) + t(-150, -178) + t(-102, -83)].clone(),
          u = this["_remo" + o(721, K) + "nRPC"]("getFr" + o(J, 722) + "ent", [this["_getU" + a(-71, 16) + "ct"](), i.sibling({
            textContains: ""
          })], {});
        function o(t, n) {
          return Yt(n, t - -165);
        }
        function a(t, n) {
          return Kt(t, n - -485);
        }
        return this[a(-119, -114) + "teJsonRPC"]("objInfo", [u]);
      }
    }, {
      key: Kt(326, f) + "s",
      value: function () {
        function t(t, n) {
          return Wt(n, t - 1178);
        }
        var n = this[e(356, F)][t(U, 617) + "s"] || {};
        function e(t, n) {
          return Jt(n, t - -324);
        }
        return new ht(n[t(577, V)], n.right, n[e(361, 377)], n[t(639, Y) + "m"]);
      }
    }, {
      key: Kt(379, 374) + Wt(-485, -547) + Wt(-493, -491),
      value: function () {}
    }, {
      key: "drawi" + Wt(-706, -631) + "er",
      value: function () {
        return this[e = 63, r = -13, Yt(r, e - -926)][t = -478, n = -468, Kt(t, n - -931) + "ngOrder"];
        var t, n, e, r;
      }
    }, {
      key: "id",
      value: function () {
        function t(t, n) {
          return Yt(t, n - -1210);
        }
        return "SGWYX" === Yt(841, 865 - -91) ? this[t(-273, -221)].resourceName || "" : (null === (n = this[i = 498, u = j, Jt(i, u - -233)].node) || 0 === n ? 0 : n[e = q, r = 918, Kt(r, e - 437) + "ren"][t(-256, -259) + "r"](function (t) {
          return t.attribs;
        })).length;
        var n, e, r, i, u;
      }
    }, {
      key: "text",
      value: function () {
        return this.obj[function (t, n) {
          return Yt(t, n - -1131);
        }(-293, -284)] || "";
      }
    }, {
      key: Kt(h, 449),
      value: function () {
        return this.obj[e = 289, r = N, Yt(e, r - -665)] || this["contentDescript" + (t = -641, n = -711, Wt(n, t - -63))]();
        var t, n, e, r;
      }
    }, {
      key: "contentDescription",
      value: function () {
        function t(t, n) {
          return Yt(n, t - -1194);
        }
        return this[t(-205, -199)]["conte" + t(-341, -331) + "cription"] || "";
      }
    }, {
      key: "className",
      value: function () {
        return this[t = D, n = 487, Wt(t, n - P)].className || "";
        var t, n;
      }
    }, {
      key: "packa" + Wt(-474, -555) + "e",
      value: function () {
        return this[e = z, r = 564, Yt(e, r - -425)]["packa" + (t = 610, n = T, Yt(t, n - -249) + "e")] || "";
        var t, n, e, r;
      }
    }, {
      key: Wt(-585, -637),
      value: function () {
        var t,
          n,
          e = 471;
        function r(t, n) {
          return Kt(t, n - -437);
        }
        return "uHYMt" !== r(21, S) ? parseInt(this[t = -67, n = -39, Wt(t, n - e)].node.attribs[function (t, n) {
          return Jt(t, n - -549);
        }(M, B)]) || -1 : this[r(-107, -18)](ucfedkrlrnm);
      }
    }, {
      key: Yt(964, v) + "InPar" + Kt(403, 361),
      value: function () {
        function t(t, n) {
          return Jt(n, t - 355);
        }
        function n(t, n) {
          return Yt(t, n - 53);
        }
        if (t(898, 984) === n(975, I)) {
          var e = !(arguments.length > 0 && arguments[0] !== ikipjztνxth) || arguments[0];
          this[n(951, C) + "torParam"].visibleToUser = !!e;
          return this;
        }
        return parseInt(this.obj[t(969, E)]) || -1;
      }
    }, {
      key: "findByText",
      value: function (t) {
        var n = this[e(-219, -175) + u(835, 853) + r(1257, 1266)].clone()[r(k, x)]({
          textContains: t
        });
        function e(t, n) {
          return Kt(n, t - -634);
        }
        function r(t, n) {
          return Jt(t, n - 606);
        }
        var i = this[u(b, 897) + "r"]["objIn" + e(-278, -249) + r(1264, A) + "tances"](n) || [];
        function u(t, n) {
          return Wt(n, t - 1460);
        }
        return i[u(951, w) + "h"] ? new vt(i, n) : null;
      }
    }, {
      key: "findOne",
      value: function (t) {
        var n,
          e,
          r = this[n = -285, e = -273, Jt(n, e - -813)](t);
        return null != r && r.length ? r[0] : null;
      }
    }, {
      key: "find",
      value: function (t) {
        var n = this[r(1204, p) + i(-412, -463) + r(1200, g)][u(361, 435)]().child(t["selec" + i(-536, -463) + u(y, 459)]),
          e = this[r(1260, 1175) + "r"]["objInfoOfA" + r(1149, m) + "tances"](n) || [];
        function r(t, n) {
          return Jt(t, n - 519);
        }
        function i(t, n) {
          return Kt(t, n - -833);
        }
        function u(t, n) {
          return Jt(n, t - -180);
        }
        return new vt(e, n);
      }
    }, {
      key: Wt(-473, -526),
      value: function () {
        function t(t, n) {
          return Kt(n, t - -287);
        }
        return this.server["forma" + t(104, d) + "rioNode"](this.obj[t(57, -12)]);
      }
    }, {
      key: Jt(721, 702) + "ing",
      value: function () {
        function t(t, n) {
          return Kt(t, n - -851);
        }
        function e(t, n) {
          return Kt(t, n - -1019);
        }
        this[e(-638, -558) + "r"].logger[t(-448, -389)]("-----" + t(-558, -514) + e(-676, -638) + "ect t" + t(-389, -383) + t(-391, -417) + e(-751, -682) + "--");
        return n.toJson({
          name: (u = -343, o = -361, Jt(o, u - -919) + (r = -66, i = -64, Kt(i, r - -462)))
        });
        var r, i, u, o;
      }
    }]);
  }(),
  ht = function () {
    var t = 753,
      e = 934,
      r = 438,
      i = 1123,
      u = 1279,
      o = 1300,
      a = 582,
      s = 841;
    function c(t, n) {
      return st(t - s, n);
    }
    function l(t, n) {
      return st(n - 300, t);
    }
    return n._createClass(function t() {
      function e(t, n) {
        return st(n - 171, t);
      }
      var r,
        i,
        s,
        c,
        l = arguments[r = u, i = o, st(r - 858, i) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 0,
        f = arguments[e(524, 592) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : 0,
        h = arguments.length > 2 && 0 !== arguments[2] ? arguments[2] : 0,
        v = arguments.length > 3 && 0 !== arguments[3] ? arguments[3] : 0;
      n._classCallCheck(this, t);
      this[e(a, 500)] = l;
      this[s = 877, c = 822, st(s - 515, c)] = f;
      this.top = h;
      this.bottom = v;
    }, [{
      key: "width",
      value: function () {
        var t,
          n,
          e = 818;
        function r(t, n) {
          return st(n - -708, t);
        }
        function u(t, n) {
          return st(n - -721, t);
        }
        return "gTvNS" !== u(-299, -312) ? sucxawwliia[u(-340, -325) + "r"][r(-284, -336) + "tChee" + (t = 1157, n = i, st(t - e, n) + "de")](thxxzqkpdia) : Math.abs(this.right - this[r(-313, -379)]);
      }
    }, {
      key: "height",
      value: function () {
        return Math[e = 6, r = -70, st(e - -386, r)](this[t = 1144, n = 1142, st(n - 751, t) + "m"] - this.top);
        var t, n, e, r;
      }
    }, {
      key: "centerX",
      value: function () {
        return this.left + this[t = 503, n = r, st(n - 101, t)]() / 2;
        var t, n;
      }
    }, {
      key: "centerY",
      value: function () {
        return this[t = e, n = 972, st(n - 547, t)] + this.height() / 2;
        var t, n;
      }
    }, {
      key: c(1272, 1289) + c(1230, 1288),
      value: function (t) {}
    }, {
      key: l(559, 622) + "sect",
      value: function (t) {}
    }, {
      key: "toString",
      value: function () {
        function e(t, n) {
          return c(t - -1298, n);
        }
        function r(t, n) {
          return l(n, t - -1184);
        }
        O[r(-498, -483) + "r"][r(-487, -398)](e(-185, -118) + e(-185, -136) + r(-614, -695) + st(1146 - 998 - -294, 1134) + "ing-------" + c(686 - -562, t));
        return n.toJson({
          left: this.left,
          right: this.right,
          top: this.top,
          bottom: this.bottom
        });
      }
    }]);
  }(),
  vt = function () {
    var t = 811,
      e = 688,
      r = 843,
      i = 980,
      u = 1089;
    function o(t, n) {
      return st(n - -386, t);
    }
    function a(t, n) {
      return st(n - -748, t);
    }
    function s(t, n) {
      return st(n - -806, t);
    }
    return n._createClass(function t() {
      var e = 710;
      function r(t, n) {
        return st(t - -593, n);
      }
      function i(t, n) {
        return st(n - -658, t);
      }
      function o(t, n) {
        return st(t - 632, n);
      }
      if ("SSdUW" === o(907, 869)) {
        var a = !(arguments[o(1053, 1084) + "h"] > 0 && arguments[0] !== lgqodxykioz) || arguments[0];
        this[i(-232, -308) + "torParam"][r(-298, -212) + "ed"] = !!a;
        return this;
      }
      var s,
        c,
        l = this,
        f = arguments[o(1053, u) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : [],
        h = arguments[s = -205, c = -204, st(c - -625, s) + "h"] > 1 ? arguments[1] : 0;
      n._classCallCheck(this, t);
      !n.isArray(f) && (f = [f]);
      this[r(-212, -158)] = f[i(-211, -276) + "r"](Boolean).filter(function (t) {
        if (!n.isFunction(h[function (t, n) {
          return r(n - 1503, t);
        }(1279, 1292) + "r"])) {
          return !0;
        }
        return h[e = -179, u = -143, i(e, u - 133) + "r"](new ft(t, h));
        var e, u;
      }).map(function (t) {
        return new ft(t, h);
      });
      for (var v = function (t) {
          Object.defineProperty(l, t, {
            get: function () {
              return l[function (t, n) {
                return st(n - 329, t);
              }(795, e)][t];
            }
          });
        }, d = 0; d < this[r(-212, -143)][r(-172, -228) + "h"]; d++) v(d);
    }, [{
      key: s(-387, -410) + "r",
      get: function () {
        return O;
      }
    }, {
      key: s(-321, -385) + "h",
      get: function () {
        return this.nodes.length;
      }
    }, {
      key: s(-452, -433),
      value: function () {
        var t;
        return (t = this.nodes).sort.apply(t, arguments);
      }
    }, {
      key: a(-540, -456),
      value: function () {
        return this.nodes[function (t, n) {
          return st(t - -351 - -568, n);
        }(-498, -501) + "h"];
      }
    }, {
      key: "get",
      value: function (t) {
        function n(t, n) {
          return a(t, n - -176);
        }
        return "kEXif" === n(-611, -547) ? this[n(-465, -543)][t] : mrbilaaogmm;
      }
    }, {
      key: o(-66, -101),
      value: function (t) {
        return this.nodes[n = 447, e = 450, s(e, n - i) + "ch"](t);
        var n, e;
      }
    }, {
      key: "forEach",
      value: function (t) {
        return this.each(t);
      }
    }, {
      key: a(-293, -354),
      value: function () {
        return !this.nodes.length;
      }
    }, {
      key: "nonEmpty",
      value: function () {
        return !this.empty();
      }
    }, {
      key: "find",
      value: function (t) {}
    }, {
      key: "findOne",
      value: function (t) {}
    }, {
      key: o(45, 56) + "ing",
      value: function () {
        var i = 688;
        function u(t, n) {
          return s(t, n - 1221);
        }
        function a(t, n) {
          return o(n, t - i);
        }
        this[u(736, t) + "r"][a(e, 676) + "r"].log("-----" + u(722, 687) + "UICol" + o(57, 131 - 95) + a(571, 634) + u(r, 785) + "g----" + a(574, 589) + "-");
        return n.toJson({
          name: "UICollection"
        });
      }
    }]);
  }();
function dt() {
  var t = ["click", "oard", "kSajw", "const", "clear", "warn", "48419PRcPrL", "lecto", "lengt", "okAwy", "ity", "press", "emula", "reset", "ils", "label", "eInfo", "devic", "exist", "tEven", "find", "206856EqoqBx", "xirZE", "home", "ive", "YYKUp", " fail", "messa", "ame", "229735fnvSas", "teNat", "JsonR", "logge", "Down", "174yXVDLN", "dWwFk", "paste", "recen", "swipe", "tInpu", "serve", "max", "rror:", "AXpuM", "ntPac", "packa", "initi", "Key", "res", "adbut", "PJTXg", "145876jdPylU", "forEa", "appCu", "push", "injec", "ntAct", "touch", "curre", "back", "449892dBXTOM", "apply", "ABmQT", "insta", "Hutlj", "alize", "N_MOV", "conca", "LrgPG", "findO", "1TWwahQ", "ACTIO", "N_UP", "error", "2107712nLJNZn", "6232077RACkgO", "EijWQ", "setTe", "GBkzL", "Jadtu", "ames", "rrent", "lick", "until"];
  return (dt = function () {
    return t;
  })();
}
function pt(t, n) {
  var e = dt();
  return (pt = function (t, n) {
    return e[t -= 141];
  })(t, n);
}
!function () {
  var t = 969,
    n = 930,
    e = 893,
    r = 16,
    i = 1103,
    u = 1080;
  function o(t, n) {
    return pt(n - 868, t);
  }
  var a,
    s,
    c = dt();
  function l(t, n) {
    return pt(t - 779, n);
  }
  function f(t, n) {
    return pt(n - -172, t);
  }
  for (;;) try {
    if (157137 === -parseInt(l(971, 951)) / 1 * (-parseInt(f(42, 1)) / 2) + -parseInt(l(961, t)) / 3 + parseInt(o(1e3, 1011)) / 4 + -parseInt(l(n, e)) / 5 + -parseInt(f(-48, -r)) / 6 * (parseInt(o(i, u)) / 7) + -parseInt((a = -715, s = -738, pt(a - -911, s))) / 8 + parseInt(o(1093, 1065)) / 9) {
      break;
    }
    c.push(c.shift());
  } catch (t) {
    c.push(c.shift());
  }
}();
var gt = {
    ACTION_DOWN: 0,
    ACTION_UP: 1,
    ACTION_MOVE: 2
  },
  yt = function () {
    var t = 643,
      e = 434,
      r = 614,
      i = 531,
      u = 872,
      o = 849,
      a = 1048,
      s = 773,
      l = 725,
      f = 1069,
      h = 1168,
      v = 1209,
      d = 789,
      p = 278,
      g = 350,
      y = 312,
      m = 284,
      k = 1046,
      x = 432,
      b = 556,
      A = 394,
      w = 867,
      I = 683,
      C = 385,
      E = 740,
      S = 782,
      M = 784,
      B = 360,
      z = 1153,
      T = 259,
      D = 1040,
      P = 203,
      N = 45,
      j = 52,
      q = 81,
      F = 235,
      U = 55,
      V = 19,
      Y = 210,
      W = 217;
    function K(t, n) {
      return pt(n - 204, t);
    }
    function J(t, n) {
      return pt(n - -403, t);
    }
    function Q(t, n) {
      return pt(n - -312, t);
    }
    function L(t, n) {
      return pt(n - 93, t);
    }
    return n._createClass(function t() {
      n._classCallCheck(this, t);
    }, [{
      key: "server",
      get: function () {
        return O;
      }
    }, {
      key: J(-218, -235) + K(419, 391),
      value: function (t) {
        var e = 835,
          r = 752,
          i = 838,
          u = 1394,
          o = this,
          a = [c(z, 1190) + "r", v(T, 238) + "ructor", "index", v(189, 214) + "nce", "getSe" + s(1029, 1065) + "rParam", c(1210, 1213) + "SelectorParam", s(D, 1058) + "s", "find", v(224, 234) + "Find", "waitFor", "filter", s(1007, 967) + "nce", "findOne", "toString"];
        function s(t, n) {
          return J(n, t - 1219);
        }
        function c(t, n) {
          return J(n, t - u);
        }
        Object["getOwnPropertyN" + c(1193, 1196)](lt.prototype)[v(202, P) + "ch"](function (t) {
          function e(t, n) {
            return v(n, t - 91);
          }
          if (n.inArray(t, a)) {
            return !1;
          }
          function r(t, n) {
            return v(t, n - -23);
          }
          global[t] && lt.prototype[t] ? global[t] = function () {
            var n;
            return (n = new lt())[t].apply(n, arguments);
          } : o.server[function (t, n) {
            return s(n - -1306, t);
          }(-329, -336) + "r"][r(Y, W)](r(212, 174) + e(307, 313) + e(268, 295) + ":", t);
        });
        var l = [h(54, N) + "ntPackage", "curre" + h(j, q) + "ivity"],
          f = [v(267, F), "longClick", h(91, 83), h(34, 6), "gesture"];
        function h(t, n) {
          return J(n, t - 277);
        }
        function v(t, n) {
          return J(t, n - 432);
        }
        var d = ["home", h(U, V), h(33, 4) + "ts"];
        [][c(1180, 1202) + "t"](l, f, ["setText", "input"], d)[v(225, P) + "ch"](function (t) {
          function n(t, n) {
            return h(t - 750, n);
          }
          global[t] && o[t] ? global[t] = function () {
            return o[t][n = -354, e = -392, pt(n - -537, e)](o, arguments);
            var n, e;
          } : o.server.logger[n(e, 865)](n(792, r) + n(811, i) + " fail:", t);
        });
        return !0;
      }
    }, {
      key: "currentPackage",
      value: function () {
        function t(t, n) {
          return K(n, t - -680);
        }
        function n(t, n) {
          return J(t, n - 601);
        }
        var e, r;
        return (null === (e = this[n(365, B) + "r"][n(366, 369) + "ils"].appCurrent()) || 0 === e ? 0 : e[n(357, 365) + "ge"]) || (null === (r = this.server[function (t, n) {
          return K(n, t - 519);
        }(946, 962) + t(-254, -267)]()) || 0 === r ? 0 : r["curre" + t(-310, -274) + "kageN" + n(365, 348)]) || "";
      }
    }, {
      key: "curre" + K(399, 382) + "ivity",
      value: function () {
        var t;
        function n(t, n) {
          return J(t, n - -301);
        }
        return null === (t = this.server.adbutils[function (t, n) {
          return J(n, t - -511);
        }(-739, -738) + n(-537, -501)]()) || 0 === t ? 0 : t["activ" + n(-462, -488)];
      }
    }, {
      key: "emula" + Q(-118, -160) + Q(-197, -166),
      value: function (t) {
        function n(t, n) {
          return Q(t, n - 932);
        }
        function e(t, n) {
          return Q(n, t - -423);
        }
        try {
          if (t) {
            t();
          }
        } catch (t) {
          this[n(E, S) + "r"].logger[n(782, 815)](e(-517, -528) + n(763, 772) + "ive e" + n(802, M) + " ", t[e(-586, -576) + "ge"]);
          return !1;
        }
        return !0;
      }
    }, {
      key: Q(-188, -167),
      value: function () {
        var t = this;
        return this.emulateNative(function () {
          function n(t, n) {
            return pt(t - 252, n);
          }
          return t[n(414, 391) + "r"].JsonRPC("press" + pt(-653 - -822, -613), [n(397, C)]);
        });
      }
    }, {
      key: "back",
      value: function () {
        function t(t, n) {
          return L(t, n - 444);
        }
        function n(t, n) {
          return J(t, n - 563);
        }
        if (n(A, 361) === n(292, 317)) {
          return cgywνskxzpu[t(674, 699) + "r"].JsonRPC("pressKey", [t(691, 682)]);
        }
        var e,
          r,
          i = this;
        return this[e = w, r = 831, L(e, r - 520) + "teNat" + t(677, I)](function () {
          return i.server.JsonRPC("pressKey", ["back"]);
        });
      }
    }, {
      key: J(-266, -244) + "ts",
      value: function () {
        function t(t, n) {
          return L(t, n - 317);
        }
        var n = this;
        return this["emulateNat" + t(551, b)](function () {
          function e(n, e) {
            return t(e, n - 52);
          }
          return n.server[e(615, 590) + "PC"]("press" + e(631, 594), ["recent"]);
        });
      }
    }, {
      key: "setText",
      value: function () {
        function t(t, n) {
          return Q(t, n - 460);
        }
        function n(t, n) {
          return K(t, n - -760);
        }
        if ("wGctN" === n(-402, -409)) {
          return this["injec" + n(-430, -395) + "tEvent"](vdotpguiixn.ACTION_DOWN, hxmwbihmhxo, raquadrwhnw);
        }
        var e,
          r,
          i = arguments[t(370, 362) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        classNameMatches("edit")[e = -605, r = -630, K(e, r - -976)](function (n) {
          var e, r;
          n[e = -584, r = -547, t(e, r - -894) + "xt"](i);
        });
      }
    }, {
      key: "input",
      value: function () {
        var t = 202,
          n = 240,
          e = 213,
          r = 140,
          i = 317,
          u = 668;
        function o(t, n) {
          return K(t, n - -877);
        }
        var a = this;
        function s(t, n) {
          return K(n, t - 102);
        }
        var c = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this[s(524, 564) + s(458, 460) + "ive"](function () {
          var t = 554;
          function c(t, n) {
            return o(t, n - u);
          }
          function l(n, e) {
            return o(n, e - t);
          }
          function f(t, n) {
            return s(t - -338, n);
          }
          return c(220, 179) === c(216, 181) ? (this[f(130, 115) + "r"][f(122, 148) + "r"].error(c(n, e) + c(r, 147) + "ive e" + c(161, 159) + " ", smytrqcnzhi[function (t, n) {
            return o(n, t - 876);
          }(352, i) + "ge"]), !1) : a[l(70, 43) + "r"].JsonRPC(l(88, 91) + "InputText");
        }) && this[o(-428, -455) + "teNat" + o(-486, -527)](function () {
          function n(t, n) {
            return o(n, t - 666);
          }
          return function (t, n) {
            return o(t, n - -268);
          }(-726, -743) === n(191, 190) ? a.server.JsonRPC("setClipboard", [n(214, t), c]) : tkaytjvasfs[kfldieuytlc].apply(ovxwvsybrkd, arguments);
        }) && this["emula" + function (t, n) {
          return K(t, n - -1081);
        }(-683, -725) + s(452, x)](function () {
          return a[function (t, n) {
            return o(n, t - -40);
          }(-551, -593) + "r"].JsonRPC(o(-774, -733 - -218) + "Clipb" + function (t, n) {
            return Q(t, n - 559 - 87);
          }(557, 541), []);
        });
      }
    }, {
      key: "click",
      value: function (t, n) {
        function e(t, n) {
          return J(t, n - 872);
        }
        if ("rJwzn" !== e(642, 613)) {
          var r = this;
          return this["emula" + e(653, 621) + e(635, 615)](function () {
            return r.server.JsonRPC("click", [t, n]);
          });
        }
        return etfunzdcvqj[i = 289, u = 255, K(u, i - -77) + "r"].JsonRPC("click", [exsefmbtwxq, ccvnpjucfbr]);
        var i, u;
      }
    }, {
      key: "longC" + K(381, 408),
      value: function (t, n) {
        function e(t, n) {
          return L(n, t - -947);
        }
        var r = this;
        return this["emulateNat" + e(-708, -679)](function () {
          return r.server.JsonRPC(function (t, n) {
            return e(t - 1628, n);
          }(980, 1021), [t, n, 600]);
        });
      }
    }, {
      key: Q(-79, -95),
      value: function (t, n) {
        var e = 1243,
          r = this,
          i = arguments.length > 2 && 0 !== arguments[2] ? arguments[2] : 1;
        function u(t, n) {
          return Q(n, t - e);
        }
        return this["emulateNat" + u(1077, k)](function () {
          return r[function (t, n) {
            return u(t - -118, n);
          }(975, 953) + "r"].JsonRPC("click", [t, n, i]);
        });
      }
    }, {
      key: Q(-153, -152),
      value: function (t, n, e, r) {
        var i = 479;
        function u(t, n) {
          return K(t, n - -588);
        }
        var o = this,
          a = arguments.length > 4 && 0 !== arguments[4] ? arguments[4] : 200;
        var s = Math[u(-193, -221)](parseInt(a / 30), 2);
        return this["emula" + u(-205, -232) + "ive"](function () {
          return o[function (t, n) {
            return u(n, t - 795);
          }(573, 586) + "r"].JsonRPC(function (t, n) {
            return J(n, t - i - -462);
          }(-226, -216), [t, n, e, r, s]);
        });
      }
    }, {
      key: "gesture",
      value: function (t) {
        function n(t, n) {
          return J(n, t - 539);
        }
        function e(t, n) {
          return Q(t, n - -251);
        }
        var r = arguments,
          i = this,
          u = [];
        function o(t, n) {
          return K(n, t - 189);
        }
        for (var a = 0; a < (arguments[n(g, 358) + "h"] <= 1 ? 0 : arguments[e(-369, -349) + "h"] - 1); a++) {
          var s = a + 1 < 1 || r.length <= a + 1 ? 0 : r[a + 1];
          u[n(y, m)].apply(u, c(s));
        }
        return this["emula" + e(-396, -411) + "ive"](function () {
          function t(t, n) {
            return o(t - -1135, n);
          }
          if ("AXpuM" === t(-577, -545)) {
            return i[n = 708, e = 750, o(n - 153, e) + "r"].JsonRPC("swipePoints", [u, 2]);
          }
          var n, e;
          nymchbqlpgd.server.logger.warn("initialize" + t(-594, -577) + ":", yftsjohoxge);
        });
      }
    }, {
      key: "injectInpu" + Q(-172, -171) + "t",
      value: function (t, n, e) {
        var r = 54,
          i = 71,
          u = this,
          o = arguments.length > 3 && 0 !== arguments[3] ? arguments[3] : 0;
        return this.emulateNative(function () {
          function a(t, n) {
            return pt(n - -70, t);
          }
          return u.server[a(122, 83) + "PC"](pt(5 - -172, -25) + "tInpu" + a(r, i) + "t", [t, n, e, o]);
        });
      }
    }, {
      key: Q(-155, -133) + K(398, 359),
      value: function (t, n) {
        function e(t, n) {
          return K(n, t - -45);
        }
        return this[e(336, 319) + "tInpu" + e(300, p) + "t"](gt.ACTION_DOWN, t, n);
      }
    }, {
      key: K(395, 383) + "Move",
      value: function (t, n) {
        function e(t, n) {
          return Q(n, t - 892);
        }
        function r(t, n) {
          return K(n, t - d);
        }
        function i(t, n) {
          return K(t, n - 629);
        }
        return "okAwy" === i(1051, a) ? this.injectInputEvent(gt[e(773, 810) + e(768, s) + "E"], t, n) : (null === (u = this.server[e(751, l) + i(f, 1053)][r(h, v) + "rrent"]()) || 0 === u ? 0 : u.package) || (null === (o = this.server[r(1216, 1220) + "eInfo"]()) || 0 === o ? 0 : o["curre" + e(746, 742) + "kageName"]) || "";
        var u, o;
      }
    }, {
      key: "touchUp",
      value: function (t, n) {
        function e(t, n) {
          return K(n, t - 150);
        }
        return "LrgPG" === e(544, 578) && this[e(i, 530) + "tInpu" + function (t, n) {
          return L(t, n - -472);
        }(-196, -238) + "t"](gt["ACTIO" + function (t, n) {
          return L(n, t - 585);
        }(u, o)], t, n);
      }
    }, {
      key: "touchGesture",
      value: function (n) {
        var i = arguments;
        function u(t, n) {
          return J(t, n - 688);
        }
        function o(t, n) {
          return L(t, n - 365);
        }
        for (var a = arguments[d(-380, -410) + "h"], s = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++) {
          if (v(635, t) === u(e, 457)) {
            var l = {
                "jνhqmfjgfxn": 159
              },
              f = this,
              h = arguments.length > 3 && arguments[3] !== olzmjatnudm ? arguments[3] : 0;
            return this[o(700, 676) + d(-442, -422) + "ive"](function () {
              return f[t = -624, n = -600, v(n - -1197, t) + "r"].JsonRPC("injec" + function (t, n) {
                return u(t, n - -305);
              }(l.jνhqmfjgfxn, 141) + "tEvent", [kktrefaoqku, ifuaewhklfl, oqoνtbkcfxq, h]);
              var t, n;
            });
          }
          s[c - 1] = i[c];
        }
        function v(t, n) {
          return Q(n, t - 747);
        }
        function d(t, n) {
          return K(n, t - -798);
        }
        for (var p = s, g = 0; g < p.length; g++) {
          var y = p[g],
            m = y[0],
            k = y[1];
          0 === g && this["touch" + o(614, 613)](m, k);
          this[v(r, 582) + "Move"](m, k);
          if (g === p[v(649, 623) + "h"] - 1) {
            if ("OwMNW" === o(657, 666)) {
              return nxpzqgcdcνq.server.JsonRPC(d(-434, -420), [zcxqszzopdh, zlxgfqjrnqc, dbfpdrgljtν, gvxiswomseh, icddkufpome]);
            }
            this.touchUp(m, k);
          }
        }
        return !0;
      }
    }, {
      key: "gestu" + K(405, 374),
      value: function () {}
    }]);
  }();
function mt(t, n) {
  var e = kt();
  return (mt = function (t, n) {
    return e[t -= 279];
  })(t, n);
}
function kt() {
  var t = ["initA", "runti", "confi", "serve", "152855FlcrQz", "504yPNUUz", "3065532zTNdev", "172gTLhgf", "setLe", "90dxhVGo", "10242QYvUaT", "4606965yIUinJ", "18BCEkLs", "环境初始化", "level", "只需要执行", "S] 运行", "120169eMtept", "32647527ZpsEqf", "9537420wCAzyB", "isIni", "一次！", "log", "vel", "tAuto", "initi", "AutoJ", "utoJS", "中...", "[init", "logge"];
  return (kt = function () {
    return t;
  })();
}
!function () {
  var t = 450,
    n = 151,
    e = 148,
    r = 1079,
    i = 1090,
    u = 433,
    o = kt();
  function a(t, n) {
    return mt(t - -729, n);
  }
  function s(t, n) {
    return mt(n - -141, t);
  }
  function c(t, n) {
    return mt(t - 156, n);
  }
  function l(t, n) {
    return mt(t - 795, n);
  }
  for (;;) try {
    if (993744 === parseInt(c(443, t)) / 1 * (-parseInt(a(-441, -447)) / 2) + -parseInt(s(n, e)) / 3 + parseInt(l(1080, 1076)) / 4 * (-parseInt(c(438, 425)) / 5) + parseInt(l(r, 1064)) / 6 + -parseInt(l(i, 1096)) / 7 * (parseInt(a(-446, -445)) / 8) + -parseInt(a(-439, -453)) / 9 * (-parseInt(a(-432, -429)) / 10) + parseInt(a(-u, -433)) / 11) {
      break;
    }
    o.push(o.shift());
  } catch (t) {
    o.push(o.shift());
  }
}();
var xt = function () {
    var t = 1010,
      e = 984,
      r = 989,
      i = 1012,
      u = 140,
      o = 995,
      a = 1032,
      s = 142,
      c = 997,
      l = 1013,
      f = 1207,
      h = 1197,
      v = 974;
    function d(t, n) {
      return mt(t - -126, n);
    }
    function p(t, n) {
      return mt(n - 691, t);
    }
    function g(t, n) {
      return mt(n - -503, t);
    }
    return n._createClass(function t() {
      var e, r, i, u;
      n._classCallCheck(this, t);
      this[i = f, u = h, mt(i - 899, u) + "r"] = T;
      this[e = 961, r = v, mt(r - 676, e) + "tAutoJS"] = !1;
    }, [{
      key: g(-212, -222) + "r",
      get: function () {
        return O;
      }
    }, {
      key: p(1007, 1e3) + d(179, 180),
      value: function (n) {
        var f,
          h,
          v = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {};
        if (this["isIni" + k(142, 131) + "JS"]) {
          this.logger[k(140, 142)](y(29, 25) + y(33, 22) + k(134, 147) + "环境初始化" + y(-5, 11) + m(t, 1009));
          return !0;
        }
        function y(t, n) {
          return d(n - -156, t);
        }
        function m(t, n) {
          return g(t, n - 1213);
        }
        this.logger[m(994, 996) + x(1005, 994)](parseInt((null == n || null === (f = n[x(e, r) + "g"]) || 0 === f ? 0 : f[m(i, 1018) + "rType"]) || (null == n || null === (h = n.logger) || 0 === h ? 0 : h[k(132, 145)])) || 0);
        this[y(22, 26) + "r"][k(u, 153)](k(147, 156) + "AutoJS] 运行" + x(o, 982) + m(1007, 1016));
        if (!this.server.init(n, v)) {
          this.logger.warn(m(a, 1017) + m(1021, 1014) + k(134, 133) + "环境初始化失败！");
          return !1;
        }
        function k(t, n) {
          return p(n, t - -851);
        }
        function x(t, n) {
          return d(t - 830, n);
        }
        this[y(-4, -3) + "me"] = new yt();
        return this["isIni" + k(s, 132) + "JS"] = this[y(12, -3) + "me"][m(c, l) + "alize"]();
      }
    }]);
  }(),
  bt = new xt();
function At() {
  var t = ["9vvJXeb", "12322500xrfURc", "345174DlCqEB", "52nmGdvF", "2374035TELIoF", "1325944MOuZtr", "551682YulSTN", "1216902rMMAMq", "49gBibjr", "316430PAZSjC"];
  return (At = function () {
    return t;
  })();
}
function wt(t, n) {
  var e = At();
  return (wt = function (t, n) {
    return e[t -= 167];
  })(t, n);
}
function It(t, n) {
  var e = Ct();
  return (It = function (t, n) {
    return e[t -= 405];
  })(t, n);
}
function Ct() {
  var t = ["textC", "831341vpjBsp", "text", "OCR", "248556FGKskm", "ndsWi", "atche", "nCapt", "ure", "326845fcotKb", "findN", "init", "tarts", "2601832PfUCWs", "conte", "5434912ZHKqZM", "2542771xqqbOj", "geNam", "429114XtFVKl", "6nKJBDU", "请先允许截", "lengt", "textM", "packa", "OCR_N", "ontai", "失败！", "图/录屏权", "grZWA", "kage"];
  return (Ct = function () {
    return t;
  })();
}
{
  !function () {
    var t = 594,
      n = 214,
      e = 593,
      r = 244,
      i = 42;
    function u(t, n) {
      return wt(t - -764, n);
    }
    function o(t, n) {
      return wt(t - -423, n);
    }
    function a(t, n) {
      return wt(n - i, t);
    }
    function s(t, n) {
      return wt(t - -299, n);
    }
    for (var c = At();;) try {
      if (962868 === parseInt(u(-593, -t)) / 1 * (-parseInt(a(210, 215)) / 2) + parseInt(a(n, 217)) / 3 + parseInt(u(-590, -595)) / 4 * (-parseInt(s(-129, -125)) / 5) + -parseInt(o(-255, -251)) / 6 * (-parseInt(u(-595, -e)) / 7) + -parseInt(o(-247, -r)) / 8 + parseInt(s(-132, -132)) / 9 + parseInt(a(217, 214)) / 10) {
        break;
      }
      c.push(c.shift());
    } catch (t) {
      c.push(c.shift());
    }
  }();
  (function () {
    var t,
      n,
      e = 241,
      r = 243,
      i = 235,
      u = 602,
      o = 511,
      a = Ct();
    function s(t, n) {
      return It(t - -170, n);
    }
    function c(t, n) {
      return It(n - -933, t);
    }
    for (;;) try {
      if (771867 === parseInt(s(238, 223)) / 1 + parseInt(s(241, e)) / 2 + parseInt(s(255, r)) / 3 + parseInt(s(250, i)) / 4 + -parseInt(c(-503, -517)) / 5 * (-parseInt((t = u, n = 616, It(n - 190, t))) / 6) + -parseInt(c(-504, -510)) / 7 + -parseInt(c(-525, -o)) / 8) {
        break;
      }
      a.push(a.shift());
    } catch (t) {
      a.push(a.shift());
    }
  })();
  files.cwd();
}
var Et = function () {
  var t = 291,
    e = 716,
    r = 269,
    i = 259,
    u = 1102,
    o = 102;
  function a(t, n) {
    return It(t - o, n);
  }
  function s(t, n) {
    return It(t - -861, n);
  }
  return n._createClass(function t() {
    n._classCallCheck(this, t);
  }, [{
    key: "logger",
    get: function () {
      return St;
    }
  }, {
    key: s(-443, -457),
    value: function (t) {
      function n(t, n) {
        return s(t - -36, n);
      }
      function e(t, n) {
        return s(t - 1539, n);
      }
      this[n(-476, -472) + "xt"] = t;
      if (!this[n(-476, -489) + "xt"]) {
        throw new Error("OCRService服务初始化" + e(1111, 1115));
      }
      if (!this.context["isOwnScree" + (o = r, a = i, s(o - 716, a)) + e(1093, 1082)]()) {
        throw new Error(n(-470, -460) + e(1112, u) + "限！");
      }
      var o, a;
      return !0;
    }
  }, {
    key: "exists",
    value: function () {
      var t = 694,
        n = arguments[e(-96, -103) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {};
      function e(t, n) {
        return s(t - 337, n);
      }
      return !!this[e(-107, -104) + "odes"](n)[function (n, e) {
        return s(e - t, n);
      }(248, 261) + "h"];
    }
  }, {
    key: a(519, 527) + "odes",
    value: function () {
      var r = 180,
        i = 1352,
        u = 1345,
        o = arguments[f(-8, -3) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {};
      if (o.packageName) {
        return o[h(277, 285) + h(282, 279) + "e"] === this[h(t, 276) + "xt"]["currentPac" + l(-494, -492)]() ? [{
          packageName: this.context.currentPackage()
        }] : [];
      }
      var c = o.text || o[f(-11, -24) + l(-467, -466) + "ns"] || o[h(295, 284) + l(-498, -485) + "s"] || o["textS" + h(262, 274) + "With"] || o.textEndsWith;
      if (!c) {
        return [];
      }
      function l(t, n) {
        return s(n - -37, t);
      }
      function f(t, n) {
        return a(n - -533, t);
      }
      function h(t, n) {
        return s(n - e, t);
      }
      o.text ? c = c : c = function (t) {
        var e,
          a,
          c,
          v = 672;
        try {
          if (o[p(188, 181) + "ontains"]) {
            e = new RegExp(t);
          } else {
            if (o["textM" + function (t, n) {
              return h(n, t - -595);
            }(-327, -320) + "s"]) {
              p(r, 179) !== g(i, u) ? ikipjztνxth = new ykdiwνyjula(rwckimdsncb + "$") : n.isRegExp(t) ? e = t : e = new RegExp(t);
            } else {
              if (o.textStartsWith) {
                e = new RegExp("^" + t);
              } else {
                if (o["textE" + (a = 1394, c = 1383, f(c, a - 1413) + "th")]) {
                  e = new RegExp(t + "$");
                } else {
                  var d = g(1384, 1371) + "OT_FOUND";
                  e = new RegExp(d, "g");
                }
              }
            }
          }
        } catch (n) {
          e = new RegExp("\\" + t, "g");
        }
        function p(t, n) {
          return l(t, n - v);
        }
        function g(t, n) {
          return s(n - 199 - 1602, t);
        }
        return e;
      }(c);
      var v = this[f(-19, -10) + "xt"].findByOCR(c, {
        isReturned: !0
      });
      var d = n.isString(c);
      return v = (n.isArray(v) ? v : []).filter(function (t) {
        var n, e, r;
        return d ? (null == t ? 0 : t.text) === c : (null == t || null === (n = t[e = -550, r = -542, f(r, e - -528)]) || 0 === n ? 0 : n.search(c)) >= 0;
      });
    }
  }]);
}();
var St = new n.Logger(It(1267 - 857, 1263)),
  Mt = new Et();
function Bt() {
  var t = ["findN", "1449105UWuasJ", "lDown", "paste", "heigh", "bound", "190Newywj", "Selec", "descM", "now", "ZZwyz", "xXOCW", "size", "lable", "torPa", "map", "ntDes", "insta", "4445574tfJAiZ", "nonEm", "nodes", "----", "each", "find", "mUoMn", "serve", "findO", "getSe", "descS", "descr", "nMatc", "EMrXe", "conta", "ble", "focus", "nCont", "With", "click", "expan", "Kepwm", "left", "UISel", "xtigZ", "tsWit", "class", "apply", "sInsi", "lForw", "Match", "odes", "Rect ", "rCvga", "resou", "child", "NameE", "selec", "hes", "8MELduG", "lengt", "leToU", "xysvz", "ward", "cript", "filte", "longC", "abs", "(.*)", "125719WPGRhu", "ect t", "iRuWz", "geNam", "aIMqE", "licka", "lBack", "check", "textE", "Tnxye", "lRigh", "22084WmlSqA", "descC", "logge", "295qMXfrb", "idEnd", "NameM", "textM", "toStr", "text", "372wVgMcA", "-----", "ndsWi", "ted", "scrol", "ches", "rtsWi", "rPara", "ent", "XxpBW", "fqEsC", "ring-", "NameC", "right", "index", "descE", "---", "eStar", "depth", "cente", "enabl", "vsvRH", "idCon", "ector", "log", "ren", "ngOrd", "nStar", "539712zlGGwE", "ains", "desc", "8256724kokgib", "idMat", "atche", "XviNH", "top", "sect", "eMatc", "rceId", "99953cGmyao", "XRkuu", "sourc", "iptio", "exist", "sort", "obj", "sWith", "copy", "visib", "width", "Name", "yText", "forEa", "lecti", "oStri", "nce", "ontai", "lUp", "able", "4aFxrFN", "Strin", "eProp", "UICol", "lLeft", "reset", "botto", "ram", "ion", "ng---", "ing", "lecto", "packa", "rzXAM", "lick"];
  return (Bt = function () {
    return t;
  })();
}
function Rt(t, n) {
  var e = Bt();
  return (Rt = function (t, n) {
    return e[t -= 250];
  })(t, n);
}
!function () {
  var t = 515,
    n = 879,
    e = 520,
    r = 191,
    i = 114,
    u = 697,
    o = 506;
  function a(t, n) {
    return Rt(n - -184, t);
  }
  var s = Bt();
  function c(t, n) {
    return Rt(n - 447, t);
  }
  function l(t, n) {
    return Rt(n - -776, t);
  }
  for (;;) try {
    if (697886 === -parseInt(a(89, 125)) / 1 * (parseInt(l(-415, -447)) / 2) + -parseInt(c(748, 792)) / 3 + parseInt(l(-535, -t)) / 4 * (parseInt(c(704, 711)) / 5) + parseInt(c(n, 809)) / 6 + -parseInt(l(-e, -475)) / 7 * (parseInt(c(923, 848)) / 8) + parseInt(a(r, i)) / 9 * (parseInt(c(752, 797)) / 10) + parseInt(c(702, u)) / 11 * (parseInt(l(-570, -o)) / 12)) {
      break;
    }
    s.push(s.shift());
  } catch (t) {
    s.push(s.shift());
  }
}();
var zt = function () {
    var t = 1192,
      e = 1132,
      r = 303,
      i = 371,
      u = 244,
      o = 294,
      a = 310,
      s = 958,
      c = 405,
      l = 371,
      f = 429,
      h = 381,
      v = 1141,
      d = 1070,
      p = 1010,
      g = 394,
      y = 333,
      m = 112,
      k = 852,
      x = 875,
      b = 788,
      A = 763,
      w = 391,
      I = 817,
      C = 1361,
      E = 971,
      S = 473,
      M = 1179,
      B = 816,
      z = 1315,
      T = 411,
      O = 1152,
      D = 1210,
      P = 62,
      N = 653,
      j = 612,
      q = 1266,
      F = 1046,
      U = 1054,
      V = 1263,
      Y = 336,
      W = 398,
      K = 1006,
      J = 919,
      Q = 686,
      L = 671,
      H = 1550,
      X = 109,
      G = 902,
      Z = 822,
      _ = 697,
      $ = 841,
      tt = 208,
      nt = 1743,
      et = 1054,
      rt = 1099,
      it = 1040,
      ut = 1120,
      ot = 1147,
      at = 1142,
      st = 1723,
      ct = 1659,
      lt = 1044,
      ft = 1347,
      ht = 1371,
      vt = 1288,
      dt = 653,
      pt = 634,
      gt = 684,
      yt = 1199,
      mt = 582,
      kt = 367,
      xt = 49,
      bt = 1102,
      At = 598,
      wt = 645,
      It = 1210,
      Ct = 51;
    function Et(t, n) {
      return Rt(n - 760, t);
    }
    function St(t, n) {
      return Rt(n - -9, t);
    }
    function Bt(t, n) {
      return Rt(t - -856, n);
    }
    function zt(t, n) {
      return Rt(t - -912, n);
    }
    return n._createClass(function t() {
      function e(t, n) {
        return Rt(n - -307, t);
      }
      n._classCallCheck(this, t);
      this[e(170, 92) + e(-20, Ct) + e(88, 29)] = {};
    }, [{
      key: zt(-543, -577) + "r",
      get: function () {
        return Mt;
      }
    }, {
      key: zt(-643, -716),
      value: function () {
        function t(t, n) {
          return zt(t - 563, n);
        }
        var n = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        this[t(50, 17) + "torParam"][t(-80, -53)] = n;
        return this;
      }
    }, {
      key: "textContains",
      value: function () {
        function t(t, n) {
          return Bt(n - 1740, t);
        }
        var n = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        this[function (t, n) {
          return zt(n - 1158, t);
        }(At, wt) + "torPa" + t(1207, 1220)]["textC" + t(1277, It) + "ns"] = n;
        return this;
      }
    }, {
      key: Bt(-589, -557) + "atches",
      value: function () {
        var t,
          e,
          r = arguments[i(148, 123) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function i(t, n) {
          return Bt(t - 602, n);
        }
        n.isRegExp(r) && (r = r.source);
        this["selectorPa" + function (t, n) {
          return Bt(n - bt, t);
        }(593, 582)][t = 1271, e = 1210, St(t, e - 952) + i(xt, 1) + "s"] = r;
        return this;
      }
    }, {
      key: "textStartsWith",
      value: function () {
        function t(t, n) {
          return St(t, n - 189);
        }
        var n = arguments[t(628, mt) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this[t(kt, 447) + "atches"]("^" + n);
      }
    }, {
      key: Bt(-598, -543) + "ndsWith",
      value: function (t) {
        var n = 338;
        return this[function (t, e) {
          return Bt(t - n, e);
        }(-251, -300) + "atches"](t + "$");
      }
    }, {
      key: "desc",
      value: function () {
        var t,
          n,
          e = arguments[r(1208, 1219) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function r(t, n) {
          return Et(t, n - 57);
        }
        this["selectorPa" + (t = 613, n = gt, zt(n - 1260, t))][r(yt, 1190) + function (t, n) {
          return zt(n - 555, t);
        }(-75, -45) + "n"] = e;
        return this;
      }
    }, {
      key: Et(1037, 1022) + "ontains",
      value: function () {
        var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function n(t, n) {
          return St(n, t - 264);
        }
        this["selec" + n(613, dt) + "ram"]["descriptio" + n(pt, 601) + "ains"] = t;
        return this;
      }
    }, {
      key: "descM" + Bt(-553, -512) + "s",
      value: function () {
        function t(t, n) {
          return zt(n - 1837, t);
        }
        function e(t, n) {
          return Bt(n - 409, t);
        }
        var r,
          i,
          u = arguments[e(21, -45) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        n.isRegExp(u) && (u = u[r = 530, i = 582, zt(i - 1183, r) + "e"]);
        this[t(vt, 1324) + e(-8, -89) + "ram"]["descr" + t(1284, 1237) + function (t, n) {
          return Et(t, n - -1702);
        }(-576, -568) + "hes"] = u;
        return this;
      }
    }, {
      key: Et(t, e) + "tarts" + St(r, i),
      value: function () {
        var t,
          n,
          e = 1910,
          r = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function i(t, n) {
          return zt(n - e, t);
        }
        this[t = 1209, n = 1178, zt(t - 1722, n) + i(1356, 1356) + i(1406, 1334)][i(ft, ht) + "iptio" + i(1317, 1295) + i(1398, 1385) + "h"] = r;
        return this;
      }
    }, {
      key: Bt(-571, -520) + Bt(-584, -595) + "th",
      value: function () {
        var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this[function (t, n) {
          return Et(t, n - -137);
        }(lt, 975) + function (t, n) {
          return Bt(t - 307, n);
        }(-246, -251) + "s"]("(.*)" + t);
      }
    }, {
      key: "id",
      value: function () {
        var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        this.selectorParam.resourceId = t;
        return this;
      }
    }, {
      key: zt(-620, -622) + "tains",
      value: function () {
        function t(t, n) {
          return Et(n, t - -1251);
        }
        var n = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this[t(-189, -186) + t(-216, -140)]("(.*)" + n + function (t, n) {
          return Bt(n - -88, t);
        }(-611, -534));
      }
    }, {
      key: "idSta" + Et(1009, 1036) + "th",
      value: function () {
        function t(t, n) {
          return Et(n, t - -810);
        }
        var n,
          e,
          r = arguments[t(352, 385) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this[n = -655, e = -633, Bt(e - -79, n) + "ches"](r + t(360, 356));
      }
    }, {
      key: Bt(-591, -568) + St(296, 307),
      value: function () {
        var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this.idMatches("(.*)" + t);
      }
    }, {
      key: zt(-610, -678) + "ches",
      value: function () {
        function t(t, n) {
          return St(t, n - 740);
        }
        function e(t, n) {
          return zt(n - st, t);
        }
        function r(t, n) {
          return Et(n, t - -10);
        }
        if (e(1230, 1206) === r(et, 1080)) {
          this.server.logger[r(1044, 1110)]("-----" + e(1093, 1082) + "UISelector toSt" + r(1031, rt) + "---------");
          return tsννvcfolpp({
            name: t(1166, 1116) + t(it, 1024),
            data: this["selectorPa" + function (t, n) {
              return Bt(n - ct, t);
            }(1085, 1139)]
          });
        }
        var i = arguments[t(ut, 1133) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        n.isRegExp(i) && (i = i.source);
        this[t(1099, 1130) + t(1136, 1089) + e(1091, ot)][e(1158, 1207) + "rceId" + r(at, 1178) + "es"] = i;
        return this;
      }
    }, {
      key: Bt(-468, -411) + St(u, 311),
      value: function () {
        var t,
          n,
          e = 707,
          r = arguments[function (t, n) {
            return St(t, n - -126);
          }(tt, 267) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        this["selectorPa" + (t = 1270, n = 1223, Bt(n - nt, t))][function (t, n) {
          return St(t, n - e);
        }(1086, 1086) + "Name"] = r;
        return this;
      }
    }, {
      key: "class" + zt(-630, -555) + "ontains",
      value: function () {
        function t(t, n) {
          return Et(n, t - -329);
        }
        var n,
          e,
          r = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this[function (t, n) {
          return St(t, n - -870);
        }(-473, -491) + t(_, 702) + (n = -694, e = -622, zt(n - -85, e)) + "s"]("(.*)" + r + t($, 869));
      }
    }, {
      key: Bt(-468, -484) + "NameStartsWith",
      value: function () {
        var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function n(t, n) {
          return zt(t - 12, n);
        }
        return this[n(-512, -517) + n(-634, -669) + "atches"](t + Bt(876 - 1322, 802));
      }
    }, {
      key: Et(1184, 1148) + zt(-514, -548) + Bt(-584, -649) + "th",
      value: function () {
        var t = 1290;
        function n(n, e) {
          return Bt(n - t, e);
        }
        var e = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this[n(Z, 810) + "NameM" + n(737, 771) + "s"]("(.*)" + e);
      }
    }, {
      key: "classNameM" + St(372, o) + "s",
      value: function () {
        var t = 90;
        function e(n, e) {
          return zt(e - t, n);
        }
        var r = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function i(t, n) {
          return Et(n, t - -1237);
        }
        n.isRegExp(r) && (e(-629, -563) !== e(-534, -563) ? this[i(-78, -57) + function (t, n) {
          return Et(t, n - -279);
        }(795, 839) + "ram"] = {} : r = r.source);
        this["selec" + e(-398, -464) + "ram"]["classNameM" + i(-174, -115) + "s"] = r;
        return this;
      }
    }, {
      key: "packa" + Bt(-603, -554) + "e",
      value: function () {
        var t = 553,
          n = arguments[e(-559, -585) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function e(t, n) {
          return Bt(n - -131, t);
        }
        this[e(-526, -588) + function (n, e) {
          return St(e, n - t);
        }(G, 902) + e(-643, -651)].packageName = n;
        return this;
      }
    }, {
      key: St(a, 332) + zt(-659, -612) + "eCont" + St(301, 290),
      value: function () {
        function t(t, n) {
          return Bt(n - 526, t);
        }
        function n(t, n) {
          return Bt(n - 383, t);
        }
        var e = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this[n(-119, -132) + n(-151, -220) + "eMatc" + t(X, 70)](Bt(708 - 1154, 709) + e + t(37, 80));
      }
    }, {
      key: "packa" + Et(1015, 1013) + zt(-625, -655) + St(313, 378) + "h",
      value: function () {
        function t(t, n) {
          return zt(t - 147, n);
        }
        function n(t, n) {
          return St(t, n - -884);
        }
        if (n(-476, -507) === n(-509, -507)) {
          var e = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
          return this[t(-424, -384) + "geNam" + function (t, n) {
            return Bt(t - H, n);
          }(1001, 1079) + function (t, n) {
            return zt(t - 1586, n);
          }(1074, 1122)](e + t(-355, -383));
        }
        wibibwihgvl = jblsojfpsmd[n(-561, -582) + "e"];
      }
    }, {
      key: "packa" + Et(s, 1013) + "eEnds" + St(c, l),
      value: function () {
        function t(t, n) {
          return Bt(n - 1293, t);
        }
        function n(t, n) {
          return zt(t - 150, n);
        }
        var e = arguments[n(-360, -407) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return this["packa" + t(716, 690) + t(L, 744) + n(-362, -283)](n(-352, -299) + e);
      }
    }, {
      key: "packa" + Bt(-603, -587) + zt(-605, -555) + "hes",
      value: function () {
        var t = 1155;
        var e = arguments[r(701, 642) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function r(n, e) {
          return Bt(n - t, e);
        }
        n.isRegExp(e) && (e = e[r(610, Q) + "e"]);
        this["selec" + r(657, 687) + "ram"][r(640, 571) + "geNam" + r(606, 673) + function (t, n) {
          return zt(n - 24, t);
        }(-539, -488)] = e;
        return this;
      }
    }, {
      key: "bounds",
      value: function (t, n, e, r) {}
    }, {
      key: "bound" + St(f, h) + "de",
      value: function (t, n, e, r) {
        var i,
          u,
          o,
          a,
          s = 282;
        function c(t, n) {
          return Et(t, n - -153);
        }
        this[c(1081, K) + c(J, 965) + (o = -238, a = -170, Bt(o - s, a))][i = 870, u = 935, zt(i - 1433, u) + "sInside"] = {
          left: t,
          top: n,
          right: e,
          buttom: r
        };
        return this;
      }
    }, {
      key: zt(-563, -589) + "sContains",
      value: function (t, n, e, r) {}
    }, {
      key: "drawingOrder",
      value: function () {
        "iXGcW" !== function (t, n) {
          return Bt(t - 940, n);
        }(Y, W) || (xyfzfpbdmjp = thkyastνukh.source);
      }
    }, {
      key: Et(1070, v) + "able",
      value: function () {
        var t = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
        this["selectorPa" + function (t, n) {
          return St(t, n - 329);
        }(665, 656)].clickable = !!t;
        return this;
      }
    }, {
      key: Bt(-448, -447) + "licka" + Bt(-479, -410),
      value: function () {
        var t = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
        function n(t, n) {
          return Bt(n - 565, t);
        }
        this["selec" + n(64, 67) + "ram"]["longC" + n(-98, -36) + "ble"] = !!t;
        return this;
      }
    }, {
      key: "check" + Et(1123, 1088),
      value: function () {
        function t(t, n) {
          return Bt(t - 1717, n);
        }
        function n(t, n) {
          return zt(n - 120, t);
        }
        function e(t, n) {
          return zt(t - 698, n);
        }
        if (n(-399, -437) === function (t, n) {
          return Bt(t - 1527, n);
        }(U, 1035)) {
          var r = !(arguments.length > 0 && arguments[0] !== fcntmmeqlfo) || arguments[0];
          this["selectorPa" + e(122, 139)][n(-343, -411) + "able"] = !!r;
          return this;
        }
        var i = !(arguments[t(V, 1307) + "h"] > 0 && 0 !== arguments[0]) || arguments[0];
        this["selec" + t(1219, 1213) + "ram"][n(-495, -535) + e(114, 151)] = !!i;
        return this;
      }
    }, {
      key: Et(938, 1017) + "ed",
      value: function () {
        var t = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
        function n(t, n) {
          return Bt(t - 467, n);
        }
        this["selec" + n(-31, -14) + n(-53, -70)][n(-132, -165) + "ed"] = !!t;
        return this;
      }
    }, {
      key: "selec" + Et(d, 1033),
      value: function () {
        var t,
          n,
          e,
          r,
          i = !(arguments[t = -124, n = -103, zt(t - 386, n) + "h"] > 0 && 0 !== arguments[0]) || arguments[0];
        function u(t, n) {
          return St(n, t - -450);
        }
        this[e = F, r = 1023, St(e, r - 633) + "torPa" + u(-123, -67)]["selec" + u(-186, -221)] = !!i;
        return this;
      }
    }, {
      key: St(313, 281) + "ed",
      value: function () {
        var t = 885;
        function n(t, n) {
          return Bt(t - 1354, n);
        }
        if ("fqEsC" !== n(778, 808)) {
          this["selec" + function (t, n) {
            return St(t, n - 377);
          }(743, 726) + "ram"]["bound" + (e = q, r = 1243, St(r, e - t) + "de")] = {
            left: wwoxplgwwfl,
            top: ygwxfeiqdνu,
            right: nrqodonrvνt,
            buttom: cmtoeefuffa
          };
          return this;
        }
        var e,
          r,
          i = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
        this.selectorParam[n(788, 854) + "ed"] = !!i;
        return this;
      }
    }, {
      key: Et(p, 1048),
      value: function () {
        var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 0;
        function n(t, n) {
          return St(n, t - 388);
        }
        this[n(778, 836) + "torPa" + n(715, N)][n(667, j)] = t;
        return this;
      }
    }, {
      key: zt(-638, -655) + "lable",
      value: function () {
        var t = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
        this["selec" + function (t, n) {
          return St(n, t - -690);
        }(-341, -371) + "ram"]["scrol" + function (t, n) {
          return Et(t, n - -1172);
        }(-12, -55)] = !!t;
        return this;
      }
    }, {
      key: "edita" + St(351, 368),
      value: function () {
        var t,
          n,
          e = 1369;
        return this[t = 1225, n = D, Et(t, n - P) + function (t, n) {
          return Bt(n - e, t);
        }(746, 795) + "ontains"]("Edit");
      }
    }, {
      key: "multiLine",
      value: function () {
        var t,
          n,
          e,
          r,
          i = !(arguments[t = -554, n = -611, Et(n, t - -1716) + "h"] > 0 && 0 !== arguments[0]) || arguments[0];
        this.selectorParam[e = 1125, r = O, Et(e, r - 118) + "lable"] = !!i;
        return this;
      }
    }, {
      key: "index",
      value: function () {
        var t,
          n,
          e = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 0;
        this[function (t, n) {
          return Bt(t - 930, n);
        }(473, T) + (t = 713, n = 674, zt(n - 1228, t)) + "ram"].index = e;
        return this;
      }
    }, {
      key: zt(-628, -689) + "InPar" + St(339, 269),
      value: function (t) {
        return this[n = -647, e = -640, zt(e - -12, n)](t);
        var n, e;
      }
    }, {
      key: Bt(-538, -496) + St(417, g) + "ser",
      value: function () {
        var t,
          n,
          e = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
        function r(t, n) {
          return Et(t, n - -1758);
        }
        this[r(-602, -599) + r(-675, -640) + "ram"]["visib" + (t = 1274, n = z, zt(t - 1783, n) + "ser")] = !!e;
        return this;
      }
    }, {
      key: zt(-534, -560) + Et(1076, 1088),
      value: function () {
        var t,
          n,
          e = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
        this["selec" + (t = B, n = 858, Bt(t - 1314, n) + "ram")].focusable = !!e;
        return this;
      }
    }, {
      key: "focused",
      value: function () {
        var t = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
        function n(t, n) {
          return St(t, n - 852);
        }
        this[function (t, n) {
          return St(n, t - 111);
        }(501, S) + n(1141, 1201) + n(1165, M)].focused = !!t;
        return this;
      }
    }, {
      key: zt(-551, -597) + "nce",
      value: function (t) {
        function n(t, n) {
          return Et(t, n - 171);
        }
        var e, r;
        this[n(1268, 1330) + (e = 700, r = 720, Bt(e - 1198, r)) + "ram"]["insta" + n(1241, 1256)] = t;
        return this;
      }
    }, {
      key: Bt(-485, -524) + "lecto" + Bt(-579, -642) + "m",
      value: function () {
        return this[function (t, n) {
          return St(n, t - E);
        }(C, 1434) + "torParam"];
      }
    }, {
      key: Bt(-522, -545) + Bt(-505, -497) + zt(-554, -564) + St(301, 327),
      value: function () {
        function t(t, n) {
          return Bt(n - I, t);
        }
        function n(t, n) {
          return zt(n - w, t);
        }
        function e(t, n) {
          return Et(n, t - -283);
        }
        if (e(852, 828) !== e(k, x)) {
          var r = arguments[i = 301, u = 239, Bt(u - 693, i) + "h"] > 0 && arguments[0] !== jνvzpyhkfhy ? arguments[0] : "";
          hvtdljzfmdb(r) && (r = r[e(b, A) + "e"]);
          this[n(-187, -122) + "torParam"]["descr" + n(-185, -209) + "nMatches"] = r;
          return this;
        }
        var i, u;
        this[t(318, 360) + "torPa" + t(372, 297)] = {};
      }
    }, {
      key: Et(1045, 1073) + "s",
      value: function () {
        function t(t, n) {
          return Bt(n - 58, t);
        }
        return this.server[n = -139, e = -65, Bt(e - 478, n) + "s"](this[t(-392, -427) + "lecto" + t(-588, -521) + "m"]());
        var n, e;
      }
    }, {
      key: zt(-545, -477),
      value: function () {
        var t = this["getSelecto" + e(-102, -79) + "m"]();
        var n = this[e(-10, -61) + "r"][e(-35, -28) + function (t, n) {
          return zt(n - 1133, t);
        }(597, 614)](t) || [];
        function e(t, n) {
          return Et(n, t - -1139);
        }
        return new Dt(n, t);
      }
    }, {
      key: "untilFind",
      value: function () {}
    }, {
      key: "waitFor",
      value: function () {}
    }, {
      key: "filter",
      value: function (t) {
        var n, e, r, i;
        this["selec" + (r = -205, i = -232, Bt(r - 293, i) + "ram")][n = 750, e = 704, Bt(e - 1153, n) + "r"] = t;
        return this;
      }
    }, {
      key: St(y, 361) + Bt(-531, -560),
      value: function () {
        return this.find()[0];
      }
    }, {
      key: "findOne",
      value: function () {
        var t,
          n,
          e,
          r = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 6e4,
          i = Date[n = -396, e = -346, Et(e, n - -1509)]();
        for (; !(t || Date.now() - i >= r);) t = this[u(-15, -40) + "nce"]();
        function u(t, n) {
          return St(t, n - -401);
        }
        return t;
      }
    }, {
      key: "toString",
      value: function () {
        function t(t, n) {
          return St(n, t - -669);
        }
        function e(t, n) {
          return St(n, t - 289);
        }
        this[e(649, 631) + "r"].logger[e(574, 576)]("-----" + t(-407, -375) + t(-293, -214) + t(-385, -310) + " toSt" + e(561, 492) + "-----" + t(-313, -352));
        return n.toJson({
          name: t(-293, -353) + "ector",
          data: this["selectorPa" + (r = m, i = 44, zt(r - 688, i))]
        });
        var r, i;
      }
    }]);
  }(),
  Tt = function () {
    var t = 467,
      e = 564,
      r = 586,
      i = 518,
      u = 594,
      o = 576,
      a = 537,
      s = 524,
      c = 525,
      l = 483,
      f = 16,
      h = 58,
      v = 1742,
      d = 885,
      p = 934,
      g = 1038,
      y = 1042,
      m = 94,
      k = 203,
      x = 169,
      b = 45,
      A = 236,
      w = 1166,
      I = 205,
      C = 1289,
      E = 839,
      S = 599,
      M = 102,
      B = 380;
    function z(t, n) {
      return Rt(n - -509, t);
    }
    function T(t, n) {
      return Rt(n - 195, t);
    }
    function O(t, n) {
      return Rt(n - 177, t);
    }
    function D(t, n) {
      return Rt(n - -879, t);
    }
    return n._createClass(function t() {
      var e,
        r,
        i = 53,
        u = arguments[function (t, n) {
          return Rt(n - i, t);
        }(391, 455) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {},
        o = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {};
      n._classCallCheck(this, t);
      this[e = B, r = 380, Rt(r - 65, e)] = u;
      this.selectorParam = o;
    }, [{
      key: D(-582, -510) + "r",
      get: function () {
        function t(t, n) {
          return D(n, t - M);
        }
        function n(t, n) {
          return D(n, t - 1168);
        }
        if ("VXRQr" === n(S, 601)) {
          var e = arguments[n(691, 734) + "h"] > 0 && arguments[0] !== jwvafnwunex ? arguments[0] : "";
          ffdejcupujb(e) && (e = e.source);
          this["selec" + t(-419, -470) + "ram"][t(-381, -448) + (r = 1165, i = 1234, D(i, r - 1736)) + "Matches"] = e;
          return this;
        }
        return Mt;
        var r, i;
      }
    }, {
      key: "clickable",
      value: function () {
        return !1;
      }
    }, {
      key: O(472, 434) + "ed",
      value: function () {
        return !1;
      }
    }, {
      key: "checkable",
      value: function () {
        return !1;
      }
    }, {
      key: O(455, t) + "ed",
      value: function () {
        return !1;
      }
    }, {
      key: "focusable",
      value: function () {
        function t(t, n) {
          return D(n, t - -54);
        }
        function n(t, n) {
          return D(n, t - 509);
        }
        if ("DGmtw" === t(-565, -523)) {
          var e = !(arguments.length > 0 && arguments[0] !== zcgcasnbqei) || arguments[0];
          this[n(29, 40) + t(-575, -531) + n(-34, -12)]["selec" + (r = 814, i = E, O(i, r - 364))] = !!e;
          return this;
        }
        return !1;
        var r, i;
      }
    }, {
      key: "focused",
      value: function () {
        return !1;
      }
    }, {
      key: "longC" + z(-323, -254) + z(-140, -132),
      value: function () {
        return !1;
      }
    }, {
      key: "selected",
      value: function () {
        return !1;
      }
    }, {
      key: "click",
      value: function () {}
    }, {
      key: "longC" + O(512, 520),
      value: function () {}
    }, {
      key: "setText",
      value: function () {}
    }, {
      key: D(-544, -562),
      value: function () {}
    }, {
      key: "cut",
      value: function () {}
    }, {
      key: O(e, 524),
      value: function () {}
    }, {
      key: "setSelection",
      value: function (t, n) {}
    }, {
      key: "scrol" + T(615, r) + "ard",
      value: function () {
        O(1345, 1332 - 753);
      }
    }, {
      key: "scrol" + z(-206, -253) + D(-433, -474),
      value: function () {
        function t(t, n) {
          return O(n, t - -343);
        }
        if (t(88, b) === t(238, 234)) {
          var n = arguments[i = w, u = 1182, z(i, u - C) + "h"] > 0 && arguments[0] !== cbdgntoarsj ? arguments[0] : "";
          return this[e = -521, r = -515, z(r, e - -400) + "NameM" + t(137, I) + "s"]("(.*)" + n + "(.*)");
        }
        var e, r, i, u;
        t(A, 272);
      }
    }, {
      key: T(i, u) + "t",
      value: function () {}
    }, {
      key: "collapse",
      value: function () {}
    }, {
      key: O(576, 559) + "d",
      value: function () {}
    }, {
      key: "show",
      value: function () {}
    }, {
      key: z(-163, -235) + D(-520, -552),
      value: function () {}
    }, {
      key: "scrol" + z(-187, -163),
      value: function () {}
    }, {
      key: "scrol" + O(o, 510),
      value: function () {}
    }, {
      key: O(518, 451) + z(-209, -249) + "t",
      value: function () {}
    }, {
      key: "child" + z(-202, -214),
      value: function () {}
    }, {
      key: D(-499, -482) + "Count",
      value: function () {
        return 0;
      }
    }, {
      key: "child",
      value: function () {
        return null;
      }
    }, {
      key: "parent",
      value: function () {
        return null;
      }
    }, {
      key: D(-502, -530) + "s",
      value: function () {
        function t(t, n) {
          return T(t, n - -407);
        }
        var n,
          e,
          r = this.obj[t(k, 137) + "s"] || {};
        return new Ot(r.left, r.right, r[t(x, 93)], r[n = -115, e = -196, O(n, e - -708) + "m"]);
      }
    }, {
      key: "boundsInParent",
      value: function () {}
    }, {
      key: "drawi" + O(470, 473) + "er",
      value: function () {
        return null;
      }
    }, {
      key: "id",
      value: function () {
        return null;
      }
    }, {
      key: T(535, 464),
      value: function () {
        return this.obj[t = 835, n = 895, T(t, n - 431)] || "";
        var t, n;
      }
    }, {
      key: z(-255, -209),
      value: function () {
        return this.obj.desc || this["conte" + (e = -629, r = -676, D(r, e - -110)) + (t = 382, n = 440, T(t, n - -161)) + function (t, n) {
          return D(n, t - 699);
        }(157, m)]();
        var t, n, e, r;
      }
    }, {
      key: "conte" + O(475, a) + O(s, 583) + "ion",
      value: function () {
        return this[e = -761, r = -685, O(e, r - -1177)]["contentDes" + (t = 1231, n = 1256, D(t, n - 1729) + "ion")] || "";
        var t, n, e, r;
      }
    }, {
      key: "class" + O(c, 497),
      value: function () {
        return null;
      }
    }, {
      key: "packageName",
      value: function () {
        return this.obj[t = 25, n = 45, T(t, n - -491) + "geName"] || "";
        var t, n;
      }
    }, {
      key: "depth",
      value: function () {
        return -1;
      }
    }, {
      key: "indexInParent",
      value: function () {
        return -1;
      }
    }, {
      key: "findB" + O(l, 498),
      value: function (t) {
        return null;
      }
    }, {
      key: "findOne",
      value: function (t) {
        return null;
      }
    }, {
      key: "find",
      value: function (t) {
        function n(t, n) {
          return z(t, n - 85);
        }
        function e(t, n) {
          return D(t, n - 1511);
        }
        if ("UzUQt" !== n(10, -70)) {
          return null;
        }
        var r = arguments[n(-60, -22) + "h"] > 0 && arguments[0] !== bpscbgjqwgg ? arguments[0] : "";
        return this[e(d, p) + "ches"](r + e(g, y));
      }
    }, {
      key: z(-242, -241) + "ing",
      value: function () {
        function t(t, n) {
          return T(n, t - -503);
        }
        console[t(-14, -75)]("----------UIObj" + t(-57, 13) + t(f, h) + (D(1171, 1201 - v) + "-------"));
        return n.toJson({
          name: "UIObject"
        });
      }
    }]);
  }(),
  Ot = function () {
    var t = 5,
      e = 66,
      r = 104,
      i = 1004,
      u = 941;
    function o(t, n) {
      return Rt(t - -246, n);
    }
    function a(t, n) {
      return Rt(t - -643, n);
    }
    function s(t, n) {
      return Rt(t - -908, n);
    }
    function c(t, n) {
      return Rt(n - -902, t);
    }
    return n._createClass(function t() {
      var e,
        o,
        a = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 0,
        s = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : 0,
        c = arguments[f(1025, 1008) + "h"] > 2 && 0 !== arguments[2] ? arguments[2] : 0,
        l = arguments[e = 97, o = r, Rt(o - -298, e) + "h"] > 3 && 0 !== arguments[3] ? arguments[3] : 0;
      function f(t, n) {
        return Rt(n - 606, t);
      }
      n._classCallCheck(this, t);
      this.left = a;
      this.right = s;
      this.top = c;
      this[f(i, u) + "m"] = l;
    }, [{
      key: c(-564, -583),
      value: function () {
        return Math.abs(this[t = 1242, n = 1197, c(t, n - 1816)] - this.left);
        var t, n;
      }
    }, {
      key: c(-587, -554) + "t",
      value: function () {
        function t(t, n) {
          return o(t - 188, n);
        }
        return Math[t(351, 300)](this[t(277, 274) + "m"] - this.top);
      }
    }, {
      key: o(43, 106) + "rX",
      value: function () {
        return this[e = 1217, r = 1139, a(e - 1476, r)] + this[t = -200, n = -262, o(n - -335, t)]() / 2;
        var t, n, e, r;
      }
    }, {
      key: o(43, 55) + "rY",
      value: function () {
        return this[t = 823, n = 873, c(t, n - 1470)] + this.height() / 2;
        var t, n;
      }
    }, {
      key: s(-532, -548) + "ins",
      value: function (t) {}
    }, {
      key: "inter" + s(-602, -562),
      value: function (t) {}
    }, {
      key: o(22, 56) + s(-569, -517),
      value: function () {
        var r = 562;
        function i(t, n) {
          return s(t - r, n);
        }
        function u(t, n) {
          return o(t - -103, n);
        }
        function c(t, n) {
          return s(t - 1574, n);
        }
        this[u(20, -25) + "r"][i(-83, -13) + "r"][i(-52, t)](u(-78, -59) + i(-75, -2) + c(1060, 1118) + "toString-------" + function (t, n) {
          return a(n - e, t);
        }(-349, -291));
        return n.toJson({
          left: this[c(1050, 973)],
          right: this.right,
          top: this[u(-44, -91)],
          bottom: this.bottom
        });
      }
    }]);
  }(),
  Dt = function () {
    var t = 815,
      e = 733,
      r = 748,
      i = 1226,
      u = 341,
      o = 267,
      a = 1184,
      s = 267,
      c = 1150,
      l = 1220,
      f = 1043,
      h = 1056,
      v = 99,
      d = 23,
      p = 1263,
      g = 1132,
      y = 1103,
      m = 2,
      k = 1207;
    function x(t, n) {
      return Rt(n - 385, t);
    }
    function b(t, n) {
      return Rt(t - 958, n);
    }
    function A(t, n) {
      return Rt(n - 538, t);
    }
    function w(t, n) {
      return Rt(t - m, n);
    }
    return n._createClass(function t() {
      var e = 273,
        r = this,
        i = arguments[u(682, 675) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : [];
      function u(t, n) {
        return Rt(n - e, t);
      }
      function o(t, n) {
        return Rt(t - -424, n);
      }
      var a = arguments[u(748, 675) + "h"] > 1 ? arguments[1] : 0;
      function s(t, n) {
        return Rt(t - 874, n);
      }
      n._classCallCheck(this, t);
      !n.isArray(i) && (i = [i]);
      this.nodes = i.filter(Boolean).filter(function (t) {
        if (!n.isFunction(a[e = 146, r = 71, s(e - -1135, r) + "r"])) {
          return !0;
        }
        var e, r;
        return a.filter(new Tt(t, a));
      })[s(1233, k)](function (t) {
        function n(t, n) {
          return o(t - 1152, n);
        }
        if (n(1070, 1067) === s(1156 - -60, 1200)) {
          return new Tt(t, a);
        }
        arguments.length > 0 && yνmcgyyugoh;
        arguments[n(1130, 1171) + "h"] > 1 && nmrcmvzgqrv;
      });
      for (var c = function (t) {
          function n(t, n) {
            return o(n - -266, t);
          }
          Object["defin" + n(-316, -359) + "erty"](r, t, {
            get: function () {
              return r[e = 168, i = 96, n(i, e - 494)][t];
              var e, i;
            }
          });
        }, l = 0; l < this.nodes.length; l++) c(l);
    }, [{
      key: x(t, 754) + "r",
      get: function () {
        return Mt;
      }
    }, {
      key: x(764, 787) + "h",
      get: function () {
        function t(t, n) {
          return w(n - -772, t);
        }
        function n(t, n) {
          return w(t - -855, n);
        }
        if ("azqtf" === t(-516, -479)) {
          var e = this[t(-367, -399) + (i = g, u = y, w(i - 790, u)) + "rParam"](),
            r = this[n(-484, -507) + "r"].findNodes(e) || [];
          return new νocfstzuwgu(r, e);
        }
        return this.nodes[n(-451, -392) + "h"];
        var i, u;
      }
    }, {
      key: w(316, 322),
      value: function () {
        var t;
        function n(t, n) {
          return A(n, t - -1130);
        }
        return (t = this[n(-228, -251)]).sort[n(-203, -277)](t, arguments);
      }
    }, {
      key: w(358, 397),
      value: function () {
        return this.nodes[t = 85, n = 119, b(t - -1275, n) + "h"];
        var t, n;
      }
    }, {
      key: "get",
      value: function (t) {
        return this[n = 1297, e = p, x(e, n - 548)][t];
        var n, e;
      }
    }, {
      key: w(368, 320),
      value: function (t) {
        return this.nodes[n = 67, e = d, b(n - -1213, e) + "ch"](t);
        var n, e;
      }
    }, {
      key: x(755, 707) + "ch",
      value: function (t) {
        return this[n = -197, e = -182, b(e - -1506, n)](t);
        var n, e;
      }
    }, {
      key: "empty",
      value: function () {
        var t = 724;
        function n(t, n) {
          return w(n - -226, t);
        }
        function e(n, e) {
          return w(e - t, n);
        }
        return "uuBdf" === e(973, 1005) ? (this[n(87, 145) + "r"][e(931, 989) + "r"].log("-----" + w(-155 - -428, -192) + e(f, 1058) + n(75, 99) + "on to" + e(1086, h) + "g----------"), jlhprthxgtp({
          name: e(1014, 1058) + n(167, v) + "on"
        })) : !this.nodes.length;
      }
    }, {
      key: x(e, r) + "pty",
      value: function () {
        return !this.empty();
      }
    }, {
      key: x(699, 752),
      value: function (t) {}
    }, {
      key: b(1328, 1272) + "ne",
      value: function (t) {}
    }, {
      key: b(i, 1174) + w(u, o),
      value: function () {
        var t,
          e,
          r = 888;
        function i(t, n) {
          return w(n - r, t);
        }
        this.server[t = 253, e = 223, A(t, e - -578) + "r"][i(1208, a)](b(s - -962, 340) + "-----UICollection to" + i(c, l) + "g----------");
        return n.toJson({
          name: "UICol" + i(1222, 1213) + "on"
        });
      }
    }]);
  }();
function Pt() {
  var t = ["takeS", "2ATUXJk", "kage", "gestu", "lengt", "witho", "lick", "rPara", "press", "lecto", " fail", "3152435ZymPxS", "shot", "confi", "ior", "initi", "rlCVJ", "hidTy", "ntPac", "conca", "14184MyztzX", "wPtQK", "insta", "Selec", "back", "reset", "setTe", "206482xQvRTd", "findO", "12186muxfLL", "apply", "2540IblELe", "behav", "aOzFV", "recen", "type", "ntAct", "serve", "2134965moAdWH", "warn", "alize", "click", "kIDau", "gcmlx", "torPa", "curre", "nce", "196323hGhnuf", "Find", "home", "12TdfaUo", "12285264UijPYI", "proto", "tap", "creen", "6STyOjf", "777xZcmWM"];
  return (Pt = function () {
    return t;
  })();
}
function Nt(t, n) {
  var e = Pt();
  return (Nt = function (t, n) {
    return e[t -= 117];
  })(t, n);
}
!function () {
  var t = 110,
    n = 126,
    e = 583,
    r = 178,
    i = 174,
    u = 578,
    o = 604,
    a = 577,
    s = 895;
  function c(t, n) {
    return Nt(t - -325, n);
  }
  var l = Pt();
  function f(t, n) {
    return Nt(n - -30, t);
  }
  function h(t, n) {
    return Nt(t - -742, n);
  }
  function v(t, n) {
    return Nt(t - 740, n);
  }
  for (;;) try {
    if (239724 === -parseInt(f(t, 106)) / 1 * (-parseInt(f(123, 137)) / 2) + -parseInt(f(125, n)) / 3 * (-parseInt(h(-583, -e)) / 4) + parseInt(c(-r, -i)) / 5 * (parseInt(h(-u, -o)) / 6) + -parseInt(h(-a, -581)) / 7 * (parseInt(f(119, 99)) / 8) + -parseInt(h(-o, -595)) / 9 * (-parseInt(v(880, s)) / 10) + parseInt(v(860, 880)) / 11 + -parseInt(c(-165, -184)) / 12) {
      break;
    }
    l.push(l.shift());
  } catch (t) {
    l.push(l.shift());
  }
}();
var jt = function () {
  var t = 628,
    e = 520,
    r = 603,
    i = 673,
    u = 672,
    o = 55,
    a = 157,
    s = 364,
    c = 973,
    l = 1009,
    f = 979,
    h = 1010,
    v = 1001,
    d = 310,
    p = 338,
    g = 341,
    y = 345,
    m = 1013,
    k = 1023,
    x = 36,
    b = 385,
    A = 48;
  function w(t, n) {
    return Nt(t - 535, n);
  }
  function I(t, n) {
    return Nt(n - -275, t);
  }
  function C(t, n) {
    return Nt(t - -581, n);
  }
  function E(t, n) {
    return Nt(t - -998, n);
  }
  return n._createClass(function t() {
    function e(t, n) {
      return Nt(n - -543, t);
    }
    var r,
      i,
      u = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : {};
    n._classCallCheck(this, t);
    this[e(-448, -421) + "g"] = u;
    u[e(-343, -372) + "utHID"] ? this.behavior = new n.BaseBehavior() : this.behavior = n.createHIDBehavior(u[r = 186, i = 164, Nt(r - 60, i) + "pe"] || 0, u);
  }, [{
    key: I(-140, -129) + "r",
    get: function () {
      return Mt;
    }
  }, {
    key: I(-126, -151) + I(-123, -126),
    value: function (t) {
      var e = this,
        r = ["server", "constructor", "index", o(-850, -845) + "nce", "getSe" + M(c, 972) + M(1028, l) + "m", o(-847, -819) + M(987, f) + i(-552, -559) + "ram", "exists", "find", "until" + i(-583, -555), "waitFor", "filter", "findO" + M(h, v), a(d, p) + "ne", "toString"];
      function i(t, n) {
        return C(n - -131, t);
      }
      Object.getOwnPropertyNames(zt[i(-569, -551) + a(317, 293)]).forEach(function (t) {
        function e(t, n) {
          return i(n, t - 978);
        }
        if (n.inArray(t, r)) {
          return !1;
        }
        function u(t, n) {
          return i(n, t - 1114);
        }
        function o(t, n) {
          return M(t - -969, n);
        }
        if (global[t] && zt["proto" + o(30, 53)][t]) {
          global[t] = function () {
            var n;
            return (n = new zt())[t].apply(n, arguments);
          };
        } else {
          if (o(11, x) !== e(391, 403)) {
            return this[u(543, 557) + "ior"][o(A, 70)](jbmkyyνopvr, knziqnyemgp);
          }
          console[u(550, 536)]("initialize" + e(b, 373) + ":", t);
        }
      });
      var u = [o(-827, -839) + i(-561, -585) + a(g, 354), "curre" + i(-595, -567) + "ivity"];
      function o(t, n) {
        return w(t - -1516, n);
      }
      function a(t, n) {
        return I(n, t - 448);
      }
      var s = ["click", "longC" + a(y, 345), i(-582, -595), "swipe", i(-565, -543) + "re"],
        E = [a(308, 298) + "xt", "input"],
        S = [M(m, k), "back", o(-838, -856) + "ts", "takeS" + a(336, 349) + a(294, 279)];
      function M(t, n) {
        return C(t - 1436, n);
      }
      [][o(-853, -839) + "t"](u, s, E, S).forEach(function (t) {
        global[t] && e[t] ? global[t] = function () {
          return e[t][n = 621, r = 611, Nt(n - 482, r)](e, arguments);
          var n, r;
        } : console.warn(function (t, n) {
          return a(n - -106, t);
        }(181, 191) + a(-374 - -696, -374) + " fail:", t);
      });
      return !0;
    }
  }, {
    key: "currentPackage",
    value: function () {
      function t(t, n) {
        return w(t - -532, n);
      }
      return this["behav" + t(126, 103)][t(a, 179) + "ntPac" + (n = 1063, e = 1067, w(e - s, n))]() || "";
      var n, e;
    }
  }, {
    key: "curre" + w(680, 699) + "ivity",
    value: function () {
      var t,
        n = 1328;
      function e(t, n) {
        return I(t, n - 210);
      }
      return "aOzFV" === function (t, e) {
        return E(e - n, t);
      }(487, 472) ? this[e(o, 76) + "ior"][e(94, 89) + "ntActivity"]() || "" : (t = new xwbhbhahqin())[yiνukνqzpdc].apply(t, arguments);
    }
  }, {
    key: I(-113, -117),
    value: function (t) {
      return this.behavior.home();
    }
  }, {
    key: I(-125, -142),
    value: function () {
      var t, n;
      return this[t = 162, n = 185, E(n - 1042, t) + "ior"].back();
    }
  }, {
    key: "recents",
    value: function () {
      function t(t, n) {
        return E(t - 1549, n);
      }
      return "gcmlx" !== t(703, 680) ? this["behav" + t(674, i)]["takeScreen" + t(u, 653)]() : this.behavior[function (t, n) {
        return I(n, t - -134);
      }(-266, -248) + "ts"]();
    }
  }, {
    key: "setText",
    value: function () {
      (function (t, n) {
        C(t - 1014, n);
      })(r, 592);
      return !1;
    }
  }, {
    key: "input",
    value: function () {
      (function (t, n) {
        w(t - -138, n);
      })(567, 596);
      return !1;
    }
  }, {
    key: C(-431, -432),
    value: function (t, n) {
      return this.behavior[e = -613, r = -593, C(r - -174, e)](t, n);
      var e, r;
    }
  }, {
    key: "longC" + I(-130, -103),
    value: function (t, n) {
      return this[e = 308, r = 333, C(e - 772, r)](t, n, 600);
      var e, r;
    }
  }, {
    key: "press",
    value: function (t, n) {
      var e = arguments[r(1044, 1038) + "h"] > 2 && 0 !== arguments[2] ? arguments[2] : 1;
      function r(t, n) {
        return I(t, n - 1143);
      }
      function i(t, n) {
        return C(n - -101, t);
      }
      return this[i(-535, -541) + r(1002, 991)][i(-570, -565)](t, n, e);
    }
  }, {
    key: "swipe",
    value: function (n, r, i, u) {
      function o(t, n) {
        return w(t - -29, n);
      }
      if ("wPtQK" === o(636, t)) {
        var a = arguments[o(676, 692) + "h"] > 4 && 0 !== arguments[4] ? arguments[4] : 300;
        return this.behavior.swipe(n, r, i, u, a);
      }
      arguments[function (t, n) {
        return C(n - 957, t);
      }(e, 546) + "h"] > 0 && mjνdmcdirtν;
      return !1;
    }
  }, {
    key: "gesture",
    value: function (t) {
      var n,
        e,
        r,
        i = arguments;
      function u(t, n) {
        return w(n - -488, t);
      }
      for (var o = arguments[u(196, 217) + "h"], a = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) a[s - 1] = i[s];
      return (n = this[u(161, 188) + (e = -88, r = -99, E(r - 776, e))]).gesture[u(199, 186)](n, [t].concat(a));
    }
  }, {
    key: E(-832, -813) + "creenshot",
    value: function () {
      var t,
        n,
        e = 1376;
      function r(t, n) {
        return w(t - 334, n);
      }
      function i(t, n) {
        return E(n - 548, t);
      }
      return i(-288, -299) === r(1020, 1027) ? this[i(-326, -309) + r(992, 971)][i(-299, -284) + "creen" + (t = 943, n = 927, I(n, t - 1097))]() : this.behavior[function (t, n) {
        return C(t - e, n);
      }(953, 965)]();
    }
  }]);
}();
function qt() {
  var t = ["initi", "logge", "44zpeGNt", "tAuto", "utHID", "8695xcUtim", "377vJoMRg", "log", "serve", "warn", "环境初始化", "S] 运行", "[init", "56bqvPLI", "utoJS", "4907988uGPeGQ", "1281788KxUhCT", "只需要执行", "vel", "AutoJ", "init", "2yIjwmH", "3XoSVMq", "level", "120480hoTryU", "762kUIARP", "isIni", "257819aPomvX", "867500tvDDCw", "443457GZEoDc", "lengt"];
  return (qt = function () {
    return t;
  })();
}
function Ft(t, n) {
  var e = qt();
  return (Ft = function (t, n) {
    return e[t -= 128];
  })(t, n);
}
!function () {
  var t = 223,
    n = 211,
    e = 153,
    r = 291,
    i = 818,
    u = 832,
    o = 831,
    a = 793,
    s = 148,
    c = 69,
    l = 21;
  function f(t, n) {
    return Ft(t - -960, n);
  }
  function h(t, n) {
    return Ft(t - l, n);
  }
  function v(t, n) {
    return Ft(n - c, t);
  }
  function d(t, n) {
    return Ft(t - s, n);
  }
  for (var p = qt();;) try {
    if (575536 === -parseInt(v(226, t)) / 1 * (parseInt(v(n, 217)) / 2) + -parseInt(v(218, 218)) / 3 * (parseInt(h(164, e)) / 4) + parseInt(v(201, 201)) / 5 * (parseInt(d(300, r)) / 6) + parseInt(h(177, 165)) / 7 * (parseInt(v(201, 209)) / 8) + parseInt(f(-i, -u)) / 9 + parseInt(v(234, 224)) / 10 * (-parseInt(f(-o, -834)) / 11) + -parseInt(f(-809, -a)) / 12 * (-parseInt(f(-827, -815)) / 13)) {
      break;
    }
    p.push(p.shift());
  } catch (t) {
    p.push(p.shift());
  }
}();
var Ut = function () {
    var t = 759,
      e = 750,
      r = 947;
    function i(t, n) {
      return Ft(t - -919, n);
    }
    return n._createClass(function t() {
      n._classCallCheck(this, t);
      this.logger = St;
      this["isIni" + function (t, n) {
        return Ft(n - r, t);
      }(1085, 1077) + "JS"] = !1;
    }, [{
      key: i(-784, -787) + "r",
      get: function () {
        return Mt;
      }
    }, {
      key: "initA" + i(-778, -764),
      value: function (n) {
        function r(t, n) {
          return Ft(t - -1175 - 937, n);
        }
        var u, o;
        function a(t, n) {
          return i(n - 425, t);
        }
        var s = arguments[c(t, 761) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
        if (this.isInitAutoJS) {
          this[c(744, 732) + "r"].log(c(732, 743) + c(752, e) + "S] 运行环境初始化" + a(-358, -350) + "一次！");
          return !0;
        }
        function c(t, n) {
          return i(n - 1523, t);
        }
        function l(t, n) {
          return i(t - 682, n);
        }
        this.logger["setLe" + r(-93, -101)](parseInt((null == n || null === (u = n.config) || 0 === u ? 0 : u.loggerType) || (null == n || null === (o = n[r(-110, -107) + "r"]) || 0 === o ? 0 : o[l(-87, -80)])) || 0);
        this.logger[c(754, 738)]("[initAutoJ" + c(731, 742) + a(-360, -357) + "中...");
        return this.server[l(-90, -97)](n) ? (this.runtime = new jt(s), this[r(-85, -71) + r(-108, -105) + "JS"] = !!s["witho" + r(-107, -116)] || this.runtime[c(759, 762) + "alize"](), this[a(-326, -341) + r(-108, -112) + "JS"]) : (this.logger[c(749, 740)](a(-346, -355) + a(-356, -348) + l(-99, -97) + "环境初始化失败！"), !1);
      }
    }]);
  }(),
  Vt = new Ut();
function Yt(t, n) {
  return function (t) {
    if (Array.isArray(t)) {
      return t;
    }
  }(t) || function (t, n) {
    var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (null != e) {
      var r,
        i,
        u,
        o,
        a = [],
        s = !0,
        c = !1;
      try {
        u = (e = e.call(t)).next;
        if (0 === n) {
          ;
        } else {
          for (; !(s = (r = u.call(e)).done) && (a.push(r.value), a.length !== n); s = !0);
        }
      } catch (t) {
        c = !0;
        i = t;
      } finally {
        try {
          if (!s && null != e.return && (o = e.return(), Object(o) !== o)) {
            return;
          }
        } finally {
          if (c) {
            throw i;
          }
        }
      }
      return a;
    }
  }(t, n) || s(t, n) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
var Wt = Math.abs,
  Kt = Math.cos,
  Jt = Math.sin,
  Qt = Math.acos,
  Lt = Math.atan2,
  Ht = Math.sqrt,
  Xt = Math.pow;
function Gt(t) {
  return t < 0 ? -Xt(-t, 1 / 3) : Xt(t, 1 / 3);
}
var Zt = Math.PI,
  _t = 2 * Zt,
  $t = Zt / 2,
  tn = Number.MAX_SAFE_INTEGER || 9007199254740991,
  nn = Number.MIN_SAFE_INTEGER || -9007199254740991,
  en = {
    x: 0,
    y: 0,
    z: 0
  },
  rn = {
    Tvalues: [-.06405689286260563, .06405689286260563, -.1911188674736163, .1911188674736163, -.3150426796961634, .3150426796961634, -.4337935076260451, .4337935076260451, -.5454214713888396, .5454214713888396, -.6480936519369755, .6480936519369755, -.7401241915785544, .7401241915785544, -.820001985973903, .820001985973903, -.8864155270044011, .8864155270044011, -.9382745520027328, .9382745520027328, -.9747285559713095, .9747285559713095, -.9951872199970213, .9951872199970213],
    Cvalues: [.12793819534675216, .12793819534675216, .1258374563468283, .1258374563468283, .12167047292780339, .12167047292780339, .1155056680537256, .1155056680537256, .10744427011596563, .10744427011596563, .09761865210411388, .09761865210411388, .08619016153195327, .08619016153195327, .0733464814110803, .0733464814110803, .05929858491543678, .05929858491543678, .04427743881741981, .04427743881741981, .028531388628933663, .028531388628933663, .0123412297999872, .0123412297999872],
    arcfn: function (t, n) {
      var e = n(t),
        r = e.x * e.x + e.y * e.y;
      0 !== e.z && (r += e.z * e.z);
      return Ht(r);
    },
    compute: function (t, n, e) {
      if (0 === t) {
        n[0].t = 0;
        return n[0];
      }
      var r = n.length - 1;
      if (1 === t) {
        n[r].t = 1;
        return n[r];
      }
      var i = 1 - t,
        u = n;
      if (0 === r) {
        n[0].t = t;
        return n[0];
      }
      if (1 === r) {
        var o = {
          x: i * u[0].x + t * u[1].x,
          y: i * u[0].y + t * u[1].y,
          t: t
        };
        e && (o.z = i * u[0].z + t * u[1].z);
        return o;
      }
      if (r < 4) {
        var a,
          s,
          c,
          l = i * i,
          f = t * t,
          h = 0;
        2 === r ? (u = [u[0], u[1], u[2], en], a = l, s = i * t * 2, c = f) : 3 === r && (a = l * i, s = l * t * 3, c = i * f * 3, h = t * f);
        var v = {
          x: a * u[0].x + s * u[1].x + c * u[2].x + h * u[3].x,
          y: a * u[0].y + s * u[1].y + c * u[2].y + h * u[3].y,
          t: t
        };
        e && (v.z = a * u[0].z + s * u[1].z + c * u[2].z + h * u[3].z);
        return v;
      }
      for (var d = JSON.parse(JSON.stringify(n)); d.length > 1;) {
        for (var p = 0; p < d.length - 1; p++) {
          d[p] = {
            x: d[p].x + (d[p + 1].x - d[p].x) * t,
            y: d[p].y + (d[p + 1].y - d[p].y) * t
          };
          0 !== d[p].z && (d[p].z = d[p].z + (d[p + 1].z - d[p].z) * t);
        }
        d.splice(d.length - 1, 1);
      }
      d[0].t = t;
      return d[0];
    },
    computeWithRatios: function (t, n, e, r) {
      var i,
        u = 1 - t,
        o = e,
        a = n,
        s = o[0],
        c = o[1],
        l = o[2],
        f = o[3];
      s *= u;
      c *= t;
      return 2 === a.length ? (i = s + c, {
        x: (s * a[0].x + c * a[1].x) / i,
        y: (s * a[0].y + c * a[1].y) / i,
        z: !!r && (s * a[0].z + c * a[1].z) / i,
        t: t
      }) : (s *= u, c *= 2 * u, l *= t * t, 3 === a.length ? (i = s + c + l, {
        x: (s * a[0].x + c * a[1].x + l * a[2].x) / i,
        y: (s * a[0].y + c * a[1].y + l * a[2].y) / i,
        z: !!r && (s * a[0].z + c * a[1].z + l * a[2].z) / i,
        t: t
      }) : (s *= u, c *= 1.5 * u, l *= 3 * u, f *= t * t * t, 4 === a.length ? (i = s + c + l + f, {
        x: (s * a[0].x + c * a[1].x + l * a[2].x + f * a[3].x) / i,
        y: (s * a[0].y + c * a[1].y + l * a[2].y + f * a[3].y) / i,
        z: !!r && (s * a[0].z + c * a[1].z + l * a[2].z + f * a[3].z) / i,
        t: t
      }) : 0));
    },
    derive: function (t, n) {
      for (var e = [], r = t, i = r.length, u = i - 1; i > 1; i--, u--) {
        for (var o, a = [], s = 0; s < u; s++) {
          o = {
            x: u * (r[s + 1].x - r[s].x),
            y: u * (r[s + 1].y - r[s].y)
          };
          n && (o.z = u * (r[s + 1].z - r[s].z));
          a.push(o);
        }
        e.push(a);
        r = a;
      }
      return e;
    },
    between: function (t, n, e) {
      return n <= t && t <= e || rn.approximately(t, n) || rn.approximately(t, e);
    },
    approximately: function (t, n, e) {
      return Wt(t - n) <= (e || 1e-6);
    },
    length: function (t) {
      for (var n, e = rn.Tvalues.length, r = 0, i = 0; i < e; i++) {
        n = .5 * rn.Tvalues[i] + .5;
        r += rn.Cvalues[i] * rn.arcfn(n, t);
      }
      return .5 * r;
    },
    map: function (t, n, e, r, i) {
      return r + (i - r) * ((t - n) / (e - n));
    },
    lerp: function (t, n, e) {
      var r = {
        x: n.x + t * (e.x - n.x),
        y: n.y + t * (e.y - n.y)
      };
      0 !== n.z && 0 !== e.z && (r.z = n.z + t * (e.z - n.z));
      return r;
    },
    pointToString: function (t) {
      var n = t.x + "/" + t.y;
      0 !== t.z && (n += "/" + t.z);
      return n;
    },
    pointsToString: function (t) {
      return "[" + t.map(rn.pointToString).join(", ") + "]";
    },
    copy: function (t) {
      return JSON.parse(JSON.stringify(t));
    },
    angle: function (t, n, e) {
      var r = n.x - t.x,
        i = n.y - t.y,
        u = e.x - t.x,
        o = e.y - t.y;
      return Lt(r * o - i * u, r * u + i * o);
    },
    round: function (t, n) {
      var e = "" + t,
        r = e.indexOf(".");
      return parseFloat(e.substring(0, r + 1 + n));
    },
    dist: function (t, n) {
      var e = t.x - n.x,
        r = t.y - n.y;
      return Ht(e * e + r * r);
    },
    closest: function (t, n) {
      var e,
        r,
        i = Xt(2, 63);
      t.forEach(function (t, u) {
        if ((r = rn.dist(n, t)) < i) {
          i = r;
          e = u;
        }
      });
      return {
        mdist: i,
        mpos: e
      };
    },
    abcratio: function (t, n) {
      if (2 !== n && 3 !== n) {
        return !1;
      }
      if (0 === t) {
        t = .5;
      } else {
        if (0 === t || 1 === t) {
          return t;
        }
      }
      var e = Xt(t, n) + Xt(1 - t, n);
      return Wt((e - 1) / e);
    },
    projectionratio: function (t, n) {
      if (2 !== n && 3 !== n) {
        return !1;
      }
      if (0 === t) {
        t = .5;
      } else {
        if (0 === t || 1 === t) {
          return t;
        }
      }
      var e = Xt(1 - t, n);
      return e / (Xt(t, n) + e);
    },
    lli8: function (t, n, e, r, i, u, o, a) {
      var s = (t - e) * (u - a) - (n - r) * (i - o);
      return 0 != s && {
        x: ((t * r - n * e) * (i - o) - (t - e) * (i * a - u * o)) / s,
        y: ((t * r - n * e) * (u - a) - (n - r) * (i * a - u * o)) / s
      };
    },
    lli4: function (t, n, e, r) {
      var i = t.x,
        u = t.y,
        o = n.x,
        a = n.y,
        s = e.x,
        c = e.y,
        l = r.x,
        f = r.y;
      return rn.lli8(i, u, o, a, s, c, l, f);
    },
    lli: function (t, n) {
      return rn.lli4(t, t.c, n, n.c);
    },
    makeline: function (t, n) {
      return new dn(t.x, t.y, (t.x + n.x) / 2, (t.y + n.y) / 2, n.x, n.y);
    },
    findbbox: function (t) {
      var n = tn,
        e = tn,
        r = nn,
        i = nn;
      t.forEach(function (t) {
        var u = t.bbox();
        n > u.x.min && (n = u.x.min);
        e > u.y.min && (e = u.y.min);
        r < u.x.max && (r = u.x.max);
        i < u.y.max && (i = u.y.max);
      });
      return {
        x: {
          min: n,
          mid: (n + r) / 2,
          max: r,
          size: r - n
        },
        y: {
          min: e,
          mid: (e + i) / 2,
          max: i,
          size: i - e
        }
      };
    },
    shapeintersections: function (t, n, e, r, i) {
      if (!rn.bboxoverlap(n, r)) {
        return [];
      }
      var u = [],
        o = [t.startcap, t.forward, t.back, t.endcap],
        a = [e.startcap, e.forward, e.back, e.endcap];
      o.forEach(function (n) {
        n.virtual || a.forEach(function (r) {
          if (!r.virtual) {
            var o = n.intersects(r, i);
            if (o.length > 0) {
              o.c1 = n;
              o.c2 = r;
              o.s1 = t;
              o.s2 = e;
              u.push(o);
            }
          }
        });
      });
      return u;
    },
    makeshape: function (t, n, e) {
      var r = n.points.length,
        i = t.points.length,
        u = rn.makeline(n.points[r - 1], t.points[0]),
        o = rn.makeline(t.points[i - 1], n.points[0]),
        a = {
          startcap: u,
          forward: t,
          back: n,
          endcap: o,
          bbox: rn.findbbox([u, t, n, o]),
          intersections: function (t) {
            return rn.shapeintersections(a, a.bbox, t, t.bbox, e);
          }
        };
      return a;
    },
    getminmax: function (t, n, e) {
      if (!e) {
        return {
          min: 0,
          max: 0
        };
      }
      var r,
        i,
        u = tn,
        o = nn;
      -1 === e.indexOf(0) && (e = [0].concat(e));
      -1 === e.indexOf(1) && e.push(1);
      for (var a = 0, s = e.length; a < s; a++) {
        r = e[a];
        (i = t.get(r))[n] < u && (u = i[n]);
        i[n] > o && (o = i[n]);
      }
      return {
        min: u,
        mid: (u + o) / 2,
        max: o,
        size: o - u
      };
    },
    align: function (t, n) {
      var e = n.p1.x,
        r = n.p1.y,
        i = -Lt(n.p2.y - r, n.p2.x - e);
      return t.map(function (t) {
        return {
          x: (t.x - e) * Kt(i) - (t.y - r) * Jt(i),
          y: (t.x - e) * Jt(i) + (t.y - r) * Kt(i)
        };
      });
    },
    roots: function (t, n) {
      n = n || {
        p1: {
          x: 0,
          y: 0
        },
        p2: {
          x: 1,
          y: 0
        }
      };
      var e = t.length - 1,
        r = rn.align(t, n),
        i = function (t) {
          return 0 <= t && t <= 1;
        };
      if (2 === e) {
        var u = r[0].y,
          o = r[1].y,
          a = r[2].y,
          s = u - 2 * o + a;
        if (0 !== s) {
          var c = -Ht(o * o - u * a),
            l = -u + o;
          return [-(c + l) / s, -(-c + l) / s].filter(i);
        }
        return o !== a && 0 === s ? [(2 * o - a) / (2 * o - 2 * a)].filter(i) : [];
      }
      var f = r[0].y,
        h = r[1].y,
        v = r[2].y,
        d = 3 * h - f - 3 * v + r[3].y,
        p = 3 * f - 6 * h + 3 * v,
        g = -3 * f + 3 * h,
        y = f;
      if (rn.approximately(d, 0)) {
        if (rn.approximately(p, 0)) {
          return rn.approximately(g, 0) ? [] : [-y / g].filter(i);
        }
        var m = Ht(g * g - 4 * p * y),
          k = 2 * p;
        return [(m - g) / k, (-g - m) / k].filter(i);
      }
      var x,
        b = (3 * (g /= d) - (p /= d) * p) / 3,
        A = b / 3,
        w = (2 * p * p * p - 9 * p * g + 27 * (y /= d)) / 27,
        I = w / 2,
        C = I * I + A * A * A;
      if (C < 0) {
        var E = -b / 3,
          S = Ht(E * E * E),
          M = -w / (2 * S),
          B = Qt(M < -1 ? -1 : M > 1 ? 1 : M),
          z = 2 * Gt(S);
        return [z * Kt(B / 3) - p / 3, z * Kt((B + _t) / 3) - p / 3, z * Kt((B + 2 * _t) / 3) - p / 3].filter(i);
      }
      if (0 === C) {
        return [2 * (I < 0 ? x = Gt(-I) : x = -Gt(I)) - p / 3, -x - p / 3].filter(i);
      }
      var T = Ht(C);
      return [(x = Gt(-I + T)) - Gt(I + T) - p / 3].filter(i);
    },
    droots: function (t) {
      if (3 === t.length) {
        var n = t[0],
          e = t[1],
          r = t[2],
          i = n - 2 * e + r;
        if (0 !== i) {
          var u = -Ht(e * e - n * r),
            o = -n + e;
          return [-(u + o) / i, -(-u + o) / i];
        }
        return e !== r && 0 === i ? [(2 * e - r) / (2 * (e - r))] : [];
      }
      if (2 === t.length) {
        var a = t[0],
          s = t[1];
        return a !== s ? [a / (a - s)] : [];
      }
      return [];
    },
    curvature: function (t, n, e, r, i) {
      var u,
        o,
        a,
        s,
        c,
        l,
        f = rn.compute(t, n),
        h = rn.compute(t, e),
        v = f.x * f.x + f.y * f.y;
      r ? (u = Ht(Xt(f.y * h.z - h.y * f.z, 2) + Xt(f.z * h.x - h.z * f.x, 2) + Xt(f.x * h.y - h.x * f.y, 2)), o = Xt(v + f.z * f.z, 1.5)) : (u = f.x * h.y - f.y * h.x, o = Xt(v, 1.5));
      if (0 === u || 0 === o) {
        return {
          k: 0,
          r: 0
        };
      }
      c = u / o;
      l = o / u;
      if (!i) {
        var d = rn.curvature(t - .001, n, e, r, !0).k,
          p = rn.curvature(t + .001, n, e, r, !0).k;
        s = (p - c + (c - d)) / 2;
        a = (Wt(p - c) + Wt(c - d)) / 2;
      }
      return {
        k: c,
        r: l,
        dk: s,
        adk: a
      };
    },
    inflections: function (t) {
      if (t.length < 4) {
        return [];
      }
      var n = rn.align(t, {
          p1: t[0],
          p2: t.slice(-1)[0]
        }),
        e = n[2].x * n[1].y,
        r = n[3].x * n[1].y,
        i = n[1].x * n[2].y,
        u = 18 * (-3 * e + 2 * r + 3 * i - n[3].x * n[2].y),
        o = 18 * (3 * e - r - 3 * i),
        a = 18 * (i - e);
      if (rn.approximately(u, 0)) {
        if (!rn.approximately(o, 0)) {
          var s = -a / o;
          if (0 <= s && s <= 1) {
            return [s];
          }
        }
        return [];
      }
      var c = 2 * u;
      if (rn.approximately(c, 0)) {
        return [];
      }
      var l = o * o - 4 * u * a;
      if (l < 0) {
        return [];
      }
      var f = Math.sqrt(l);
      return [(f - o) / c, -(o + f) / c].filter(function (t) {
        return 0 <= t && t <= 1;
      });
    },
    bboxoverlap: function (t, n) {
      for (var e, r, i, u, o = ["x", "y"], a = o.length, s = 0; s < a; s++) if (r = t[e = o[s]].mid, i = n[e].mid, u = (t[e].size + n[e].size) / 2, Wt(r - i) >= u) {
        return !1;
      }
      return !0;
    },
    expandbox: function (t, n) {
      n.x.min < t.x.min && (t.x.min = n.x.min);
      n.y.min < t.y.min && (t.y.min = n.y.min);
      n.z && n.z.min < t.z.min && (t.z.min = n.z.min);
      n.x.max > t.x.max && (t.x.max = n.x.max);
      n.y.max > t.y.max && (t.y.max = n.y.max);
      n.z && n.z.max > t.z.max && (t.z.max = n.z.max);
      t.x.mid = (t.x.min + t.x.max) / 2;
      t.y.mid = (t.y.min + t.y.max) / 2;
      t.z && (t.z.mid = (t.z.min + t.z.max) / 2);
      t.x.size = t.x.max - t.x.min;
      t.y.size = t.y.max - t.y.min;
      t.z && (t.z.size = t.z.max - t.z.min);
    },
    pairiteration: function (t, n, e) {
      var r = t.bbox(),
        i = n.bbox(),
        u = 1e5,
        o = e || .5;
      if (r.x.size + r.y.size < o && i.x.size + i.y.size < o) {
        return [(u * (t._t1 + t._t2) / 2 | 0) / u + "/" + (u * (n._t1 + n._t2) / 2 | 0) / u];
      }
      var a = t.split(.5),
        s = n.split(.5),
        c = [{
          left: a.left,
          right: s.left
        }, {
          left: a.left,
          right: s.right
        }, {
          left: a.right,
          right: s.right
        }, {
          left: a.right,
          right: s.left
        }];
      c = c.filter(function (t) {
        return rn.bboxoverlap(t.left.bbox(), t.right.bbox());
      });
      var l = [];
      return 0 === c.length ? l : (c.forEach(function (t) {
        l = l.concat(rn.pairiteration(t.left, t.right, o));
      }), l = l.filter(function (t, n) {
        return l.indexOf(t) === n;
      }));
    },
    getccenter: function (t, n, e) {
      var r,
        i = n.x - t.x,
        u = n.y - t.y,
        o = e.x - n.x,
        a = e.y - n.y,
        s = i * Kt($t) - u * Jt($t),
        c = i * Jt($t) + u * Kt($t),
        l = o * Kt($t) - a * Jt($t),
        f = o * Jt($t) + a * Kt($t),
        h = (t.x + n.x) / 2,
        v = (t.y + n.y) / 2,
        d = (n.x + e.x) / 2,
        p = (n.y + e.y) / 2,
        g = h + s,
        y = v + c,
        m = d + l,
        k = p + f,
        x = rn.lli8(h, v, g, y, d, p, m, k),
        b = rn.dist(x, t),
        A = Lt(t.y - x.y, t.x - x.x),
        w = Lt(n.y - x.y, n.x - x.x),
        I = Lt(e.y - x.y, e.x - x.x);
      A < I ? ((A > w || w > I) && (A += _t), A > I && (r = I, I = A, A = r)) : I < w && w < A ? (r = I, I = A, A = r) : I += _t;
      x.s = A;
      x.e = I;
      x.r = b;
      return x;
    },
    numberSort: function (t, n) {
      return t - n;
    }
  },
  un = function () {
    function t(e) {
      n._classCallCheck(this, t);
      this.curves = [];
      this._3d = !1;
      e && (this.curves = e, this._3d = this.curves[0]._3d);
    }
    return n._createClass(t, [{
      key: "valueOf",
      value: function () {
        return this.toString();
      }
    }, {
      key: "toString",
      value: function () {
        return "[" + this.curves.map(function (t) {
          return rn.pointsToString(t.points);
        }).join(", ") + "]";
      }
    }, {
      key: "addCurve",
      value: function (t) {
        this.curves.push(t);
        this._3d = this._3d || t._3d;
      }
    }, {
      key: "length",
      value: function () {
        return this.curves.map(function (t) {
          return t.length();
        }).reduce(function (t, n) {
          return t + n;
        });
      }
    }, {
      key: "curve",
      value: function (t) {
        return this.curves[t];
      }
    }, {
      key: "bbox",
      value: function () {
        for (var t = this.curves, n = t[0].bbox(), e = 1; e < t.length; e++) rn.expandbox(n, t[e].bbox());
        return n;
      }
    }, {
      key: "offset",
      value: function (n) {
        var e = [];
        this.curves.forEach(function (t) {
          var r;
          (r = e).push.apply(r, c(t.offset(n)));
        });
        return new t(e);
      }
    }]);
  }(),
  on = Math.abs,
  an = Math.min,
  sn = Math.max,
  cn = Math.cos,
  ln = Math.sin,
  fn = Math.acos,
  hn = Math.sqrt,
  vn = Math.PI,
  dn = function () {
    function e(t) {
      n._classCallCheck(this, e);
      var r = t && t.forEach ? t : Array.from(arguments).slice(),
        i = !1;
      if ("object" === n._typeof(r[0])) {
        i = r.length;
        var u = [];
        r.forEach(function (t) {
          ["x", "y", "z"].forEach(function (n) {
            if (0 !== t[n]) {
              u.push(t[n]);
            }
          });
        });
        r = u;
      }
      var o = !1,
        a = r.length;
      if (i) {
        if (i > 4) {
          if (1 !== arguments.length) {
            throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
          }
          o = !0;
        }
      } else {
        if (6 !== a && 8 !== a && 9 !== a && 12 !== a && 1 !== arguments.length) {
          throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
        }
      }
      for (var s = this._3d = !o && (9 === a || 12 === a) || t && t[0] && 0 !== t[0].z, c = this.points = [], l = 0, f = s ? 3 : 2; l < a; l += f) {
        var h = {
          x: r[l],
          y: r[l + 1]
        };
        s && (h.z = r[l + 2]);
        c.push(h);
      }
      var v = this.order = c.length - 1,
        d = this.dims = ["x", "y"];
      s && d.push("z");
      this.dimlen = d.length;
      var p = rn.align(c, {
          p1: c[0],
          p2: c[v]
        }),
        g = rn.dist(c[0], c[v]);
      this._linear = p.reduce(function (t, n) {
        return t + on(n.y);
      }, 0) < g / 50;
      this._lut = [];
      this._t1 = 0;
      this._t2 = 1;
      this.update();
    }
    return n._createClass(e, [{
      key: "getUtils",
      value: function () {
        return e.getUtils();
      }
    }, {
      key: "valueOf",
      value: function () {
        return this.toString();
      }
    }, {
      key: "toString",
      value: function () {
        return rn.pointsToString(this.points);
      }
    }, {
      key: "toSVG",
      value: function () {
        if (this._3d) {
          return !1;
        }
        for (var t = this.points, n = ["M", t[0].x, t[0].y, 2 === this.order ? "Q" : "C"], e = 1, r = t.length; e < r; e++) {
          n.push(t[e].x);
          n.push(t[e].y);
        }
        return n.join(" ");
      }
    }, {
      key: "setRatios",
      value: function (t) {
        if (t.length !== this.points.length) {
          throw new Error("incorrect number of ratio values");
        }
        this.ratios = t;
        this._lut = [];
      }
    }, {
      key: "verify",
      value: function () {
        var t = this.coordDigest();
        if (t !== this._print) {
          this._print = t;
          this.update();
        }
      }
    }, {
      key: "coordDigest",
      value: function () {
        return this.points.map(function (t, n) {
          return "" + n + t.x + t.y + (t.z ? t.z : 0);
        }).join("");
      }
    }, {
      key: "update",
      value: function () {
        this._lut = [];
        this.dpoints = rn.derive(this.points, this._3d);
        this.computedirection();
      }
    }, {
      key: "computedirection",
      value: function () {
        var t = this.points,
          n = rn.angle(t[0], t[this.order], t[1]);
        this.clockwise = n > 0;
      }
    }, {
      key: "length",
      value: function () {
        return rn.length(this.derivative.bind(this));
      }
    }, {
      key: "getABC",
      value: function (t, n) {
        n = n || this.get(t);
        var r = this.points[0],
          i = this.points[this.order];
        return e.getABC(this.order, r, n, i, t);
      }
    }, {
      key: "getLUT",
      value: function (t) {
        this.verify();
        t = t || 100;
        if (this._lut.length === t + 1) {
          return this._lut;
        }
        this._lut = [];
        t++;
        this._lut = [];
        for (var n, e, r = 0; r < t; r++) {
          e = r / (t - 1);
          (n = this.compute(e)).t = e;
          this._lut.push(n);
        }
        return this._lut;
      }
    }, {
      key: "on",
      value: function (n, e) {
        e = e || 5;
        for (var r, i = this.getLUT(), u = [], o = 0; o < i.length; o++) {
          r = i[o];
          rn.dist(r, n) < e && (u.push(r), o / i.length);
        }
        return !!u.length && (t /= u.length);
      }
    }, {
      key: "project",
      value: function (t) {
        var n,
          e,
          r = this.getLUT(),
          i = r.length - 1,
          u = rn.closest(r, t),
          o = u.mpos,
          a = (o - 1) / i,
          s = (o + 1) / i,
          c = .1 / i,
          l = u.mdist,
          f = a,
          h = f;
        for (l += 1; f < s + c; f += c) {
          n = this.compute(f);
          (e = rn.dist(t, n)) < l && (l = e, h = f);
        }
        h < 0 ? h = 0 : h > 1 ? h = 1 : h = h;
        (n = this.compute(h)).t = h;
        n.d = l;
        return n;
      }
    }, {
      key: "get",
      value: function (t) {
        return this.compute(t);
      }
    }, {
      key: "point",
      value: function (t) {
        return this.points[t];
      }
    }, {
      key: "compute",
      value: function (t) {
        return this.ratios ? rn.computeWithRatios(t, this.points, this.ratios, this._3d) : rn.compute(t, this.points, this._3d, this.ratios);
      }
    }, {
      key: "raise",
      value: function () {
        for (var t, n, r = this.points, i = [r[0]], u = r.length, o = 1; o < u; o++) {
          t = r[o];
          n = r[o - 1];
          i[o] = {
            x: (u - o) / u * t.x + o / u * n.x,
            y: (u - o) / u * t.y + o / u * n.y
          };
        }
        i[u] = r[u - 1];
        return new e(i);
      }
    }, {
      key: "derivative",
      value: function (t) {
        return rn.compute(t, this.dpoints[0], this._3d);
      }
    }, {
      key: "dderivative",
      value: function (t) {
        return rn.compute(t, this.dpoints[1], this._3d);
      }
    }, {
      key: "align",
      value: function () {
        var t = this.points;
        return new e(rn.align(t, {
          p1: t[0],
          p2: t[t.length - 1]
        }));
      }
    }, {
      key: "curvature",
      value: function (t) {
        return rn.curvature(t, this.dpoints[0], this.dpoints[1], this._3d);
      }
    }, {
      key: "inflections",
      value: function () {
        return rn.inflections(this.points);
      }
    }, {
      key: "normal",
      value: function (t) {
        return this._3d ? this.__normal3(t) : this.__normal2(t);
      }
    }, {
      key: "__normal2",
      value: function (t) {
        var n = this.derivative(t),
          e = hn(n.x * n.x + n.y * n.y);
        return {
          t: t,
          x: -n.y / e,
          y: n.x / e
        };
      }
    }, {
      key: "__normal3",
      value: function (t) {
        var n = this.derivative(t),
          e = this.derivative(t + .01),
          r = hn(n.x * n.x + n.y * n.y + n.z * n.z),
          i = hn(e.x * e.x + e.y * e.y + e.z * e.z);
        n.x /= r;
        n.y /= r;
        n.z /= r;
        e.x /= i;
        e.y /= i;
        e.z /= i;
        var u = {
            x: e.y * n.z - e.z * n.y,
            y: e.z * n.x - e.x * n.z,
            z: e.x * n.y - e.y * n.x
          },
          o = hn(u.x * u.x + u.y * u.y + u.z * u.z);
        u.x /= o;
        u.y /= o;
        u.z /= o;
        var R = [u.x * u.x, u.x * u.y - u.z, u.x * u.z + u.y, u.x * u.y + u.z, u.y * u.y, u.y * u.z - u.x, u.x * u.z - u.y, u.y * u.z + u.x, u.z * u.z];
        return {
          t: t,
          x: R[0] * n.x + R[1] * n.y + R[2] * n.z,
          y: R[3] * n.x + R[4] * n.y + R[5] * n.z,
          z: R[6] * n.x + R[7] * n.y + R[8] * n.z
        };
      }
    }, {
      key: "hull",
      value: function (t) {
        var n = this.points,
          e = [],
          r = [],
          i = 0;
        for (r[i++] = n[0], r[i++] = n[1], r[i++] = n[2], 3 === this.order && (r[i++] = n[3]); n.length > 1;) {
          e = [];
          for (var u, o = 0, a = n.length - 1; o < a; o++) {
            u = rn.lerp(t, n[o], n[o + 1]);
            r[i++] = u;
            e.push(u);
          }
          n = e;
        }
        return r;
      }
    }, {
      key: "split",
      value: function (t, n) {
        if (0 === t && n) {
          return this.split(n).left;
        }
        if (1 === n) {
          return this.split(t).right;
        }
        var r = this.hull(t),
          i = {
            left: 2 === this.order ? new e([r[0], r[3], r[5]]) : new e([r[0], r[4], r[7], r[9]]),
            right: 2 === this.order ? new e([r[5], r[4], r[2]]) : new e([r[9], r[8], r[6], r[3]]),
            span: r
          };
        i.left._t1 = rn.map(0, 0, 1, this._t1, this._t2);
        i.left._t2 = rn.map(t, 0, 1, this._t1, this._t2);
        i.right._t1 = rn.map(t, 0, 1, this._t1, this._t2);
        i.right._t2 = rn.map(1, 0, 1, this._t1, this._t2);
        return n ? (n = rn.map(n, t, 1, 0, 1), i.right.split(n).left) : i;
      }
    }, {
      key: "extrema",
      value: function () {
        var t = {},
          n = [];
        this.dims.forEach(function (e) {
          var r = function (t) {
              return t[e];
            },
            i = this.dpoints[0].map(r);
          t[e] = rn.droots(i);
          3 === this.order && (i = this.dpoints[1].map(r), t[e] = t[e].concat(rn.droots(i)));
          t[e] = t[e].filter(function (t) {
            return t >= 0 && t <= 1;
          });
          n = n.concat(t[e].sort(rn.numberSort));
        }.bind(this));
        t.values = n.sort(rn.numberSort).filter(function (t, e) {
          return n.indexOf(t) === e;
        });
        return t;
      }
    }, {
      key: "bbox",
      value: function () {
        var t = this.extrema(),
          n = {};
        this.dims.forEach(function (e) {
          n[e] = rn.getminmax(this, e, t[e]);
        }.bind(this));
        return n;
      }
    }, {
      key: "overlaps",
      value: function (t) {
        var n = this.bbox(),
          e = t.bbox();
        return rn.bboxoverlap(n, e);
      }
    }, {
      key: "offset",
      value: function (t, n) {
        if (0 !== n) {
          var r = this.get(t),
            i = this.normal(t),
            u = {
              c: r,
              n: i,
              x: r.x + i.x * n,
              y: r.y + i.y * n
            };
          this._3d && (u.z = r.z + i.z * n);
          return u;
        }
        if (this._linear) {
          var o = this.normal(0),
            a = this.points.map(function (n) {
              var e = {
                x: n.x + t * o.x,
                y: n.y + t * o.y
              };
              n.z && o.z && (e.z = n.z + t * o.z);
              return e;
            });
          return [new e(a)];
        }
        return this.reduce().map(function (n) {
          return n._linear ? n.offset(t)[0] : n.scale(t);
        });
      }
    }, {
      key: "simple",
      value: function () {
        if (3 === this.order) {
          var t = rn.angle(this.points[0], this.points[3], this.points[1]),
            n = rn.angle(this.points[0], this.points[3], this.points[2]);
          if (t > 0 && n < 0 || t < 0 && n > 0) {
            return !1;
          }
        }
        var e = this.normal(0),
          r = this.normal(1),
          i = e.x * r.x + e.y * r.y;
        this._3d && (i += e.z * r.z);
        return on(fn(i)) < vn / 3;
      }
    }, {
      key: "reduce",
      value: function () {
        var t,
          n,
          e = 0,
          r = 0,
          i = .01,
          u = [],
          o = [],
          a = this.extrema().values;
        for (-1 === a.indexOf(0) && (a = [0].concat(a)), -1 === a.indexOf(1) && a.push(1), e = a[0], t = 1; t < a.length; t++) {
          r = a[t];
          (n = this.split(e, r))._t1 = e;
          n._t2 = r;
          u.push(n);
          e = r;
        }
        u.forEach(function (t) {
          for (e = 0, r = 0; r <= 1;) for (r = e + i; r <= 1.01; r += i) if (!(n = t.split(e, r)).simple()) {
            if (on(e - (r -= i)) < i) {
              return [];
            }
            (n = t.split(e, r))._t1 = rn.map(e, 0, 1, t._t1, t._t2);
            n._t2 = rn.map(r, 0, 1, t._t1, t._t2);
            o.push(n);
            e = r;
            break;
          }
          if (e < 1) {
            (n = t.split(e, 1))._t1 = rn.map(e, 0, 1, t._t1, t._t2);
            n._t2 = t._t2;
            o.push(n);
          }
        });
        return o;
      }
    }, {
      key: "translate",
      value: function (t, n, r) {
        "number" == typeof r ? r = r : r = n;
        var i = this.order,
          u = this.points.map(function (t, e) {
            return (1 - e / i) * n + e / i * r;
          });
        return new e(this.points.map(function (n, e) {
          return {
            x: n.x + t.x * u[e],
            y: n.y + t.y * u[e]
          };
        }));
      }
    }, {
      key: "scale",
      value: function (t) {
        var n = this,
          r = this.order,
          i = !1;
        "function" == typeof t && (i = t);
        if (i && 2 === r) {
          return this.raise().scale(i);
        }
        var u = this.clockwise,
          o = this.points;
        if (this._linear) {
          return this.translate(this.normal(0), i ? i(0) : t, i ? i(1) : t);
        }
        var a = i ? i(0) : t,
          s = i ? i(1) : t,
          c = [this.offset(0, 10), this.offset(1, 10)],
          l = [],
          f = rn.lli4(c[0], c[0].c, c[1], c[1].c);
        if (!f) {
          throw new Error("cannot scale this curve. Try reducing it first.");
        }
        [0, 1].forEach(function (t) {
          var n = l[t * r] = rn.copy(o[t * r]);
          n.x += (t ? s : a) * c[t].n.x;
          n.y += (t ? s : a) * c[t].n.y;
        });
        return i ? ([0, 1].forEach(function (n) {
          if (2 !== r || !n) {
            var e = o[n + 1],
              a = {
                x: e.x - f.x,
                y: e.y - f.y
              },
              s = i ? i((n + 1) / r) : t;
            if (i && !u) {
              s = -s;
            }
            var c = hn(a.x * a.x + a.y * a.y);
            a.x /= c;
            a.y /= c;
            l[n + 1] = {
              x: e.x + s * a.x,
              y: e.y + s * a.y
            };
          }
        }), new e(l)) : ([0, 1].forEach(function (t) {
          if (2 !== r || !t) {
            var e = l[t * r],
              i = n.derivative(t),
              u = {
                x: e.x + i.x,
                y: e.y + i.y
              };
            l[t + 1] = rn.lli4(e, u, f, o[t + 1]);
          }
        }), new e(l));
      }
    }, {
      key: "outline",
      value: function (t, n, r, i) {
        0 === n ? n = t : n = n;
        if (this._linear) {
          var u,
            o,
            a = this.normal(0),
            s = this.points[0],
            c = this.points[this.points.length - 1];
          0 === r && (r = t, i = n);
          u = {
            x: s.x + a.x * t,
            y: s.y + a.y * t
          };
          o = {
            x: c.x + a.x * r,
            y: c.y + a.y * r
          };
          var l = [u, {
            x: (u.x + o.x) / 2,
            y: (u.y + o.y) / 2
          }, o];
          u = {
            x: s.x - a.x * n,
            y: s.y - a.y * n
          };
          var f = [o = {
              x: c.x - a.x * i,
              y: c.y - a.y * i
            }, {
              x: (u.x + o.x) / 2,
              y: (u.y + o.y) / 2
            }, u],
            h = rn.makeline(f[2], l[0]),
            v = rn.makeline(l[2], f[0]),
            d = [h, new e(l), v, new e(f)];
          return new un(d);
        }
        var p,
          g = this.reduce(),
          y = g.length,
          m = [],
          k = [],
          x = 0,
          b = this.length(),
          A = 0 !== r && 0 !== i;
        function w(t, n, e, r, i) {
          return function (u) {
            var o = r / e,
              a = (r + i) / e,
              s = n - t;
            return rn.map(u, 0, 1, t + o * s, t + a * s);
          };
        }
        g.forEach(function (e) {
          var u = e.length();
          A ? (m.push(e.scale(w(t, r, b, x, u))), k.push(e.scale(w(-n, -i, b, x, u)))) : (m.push(e.scale(t)), k.push(e.scale(-n)));
          x += u;
        });
        k = k.map(function (t) {
          (p = t.points)[3] ? t.points = [p[3], p[2], p[1], p[0]] : t.points = [p[2], p[1], p[0]];
          return t;
        }).reverse();
        var I = m[0].points[0],
          C = m[y - 1].points[m[y - 1].points.length - 1],
          E = k[y - 1].points[k[y - 1].points.length - 1],
          S = k[0].points[0],
          M = rn.makeline(E, I),
          B = rn.makeline(C, S),
          z = [M].concat(m).concat([B]).concat(k);
        return new un(z);
      }
    }, {
      key: "outlineshapes",
      value: function (t, n, e) {
        n = n || t;
        for (var r = this.outline(t, n).curves, i = [], u = 1, o = r.length; u < o / 2; u++) {
          var a = rn.makeshape(r[u], r[o - u], e);
          a.startcap.virtual = u > 1;
          a.endcap.virtual = u < o / 2 - 1;
          i.push(a);
        }
        return i;
      }
    }, {
      key: "intersects",
      value: function (t, n) {
        return t ? t.p1 && t.p2 ? this.lineIntersects(t) : (t instanceof e && (t = t.reduce()), this.curveintersects(this.reduce(), t, n)) : this.selfintersects(n);
      }
    }, {
      key: "lineIntersects",
      value: function (t) {
        var n = this,
          e = an(t.p1.x, t.p2.x),
          r = an(t.p1.y, t.p2.y),
          i = sn(t.p1.x, t.p2.x),
          u = sn(t.p1.y, t.p2.y);
        return rn.roots(this.points, t).filter(function (t) {
          var o = n.get(t);
          return rn.between(o.x, e, i) && rn.between(o.y, r, u);
        });
      }
    }, {
      key: "selfintersects",
      value: function (t) {
        for (var n, e, r, i = this.reduce(), u = i.length - 2, o = [], a = 0; a < u; a++) {
          e = i.slice(a, a + 1);
          r = i.slice(a + 2);
          n = this.curveintersects(e, r, t);
          o.push.apply(o, c(n));
        }
        return o;
      }
    }, {
      key: "curveintersects",
      value: function (t, n, e) {
        var r = [];
        t.forEach(function (t) {
          n.forEach(function (n) {
            if (t.overlaps(n)) {
              r.push({
                left: t,
                right: n
              });
            }
          });
        });
        var i = [];
        r.forEach(function (t) {
          var n = rn.pairiteration(t.left, t.right, e);
          if (n.length > 0) {
            i = i.concat(n);
          }
        });
        return i;
      }
    }, {
      key: "arcs",
      value: function (t) {
        t = t || .5;
        return this._iterate(t, []);
      }
    }, {
      key: "_error",
      value: function (t, n, e, r) {
        var i = (r - e) / 4,
          u = this.get(e + i),
          o = this.get(r - i),
          a = rn.dist(t, n),
          s = rn.dist(t, u),
          c = rn.dist(t, o);
        return on(s - a) + on(c - a);
      }
    }, {
      key: "_iterate",
      value: function (t, n) {
        var e,
          r = 0,
          i = 1;
        do {
          e = 0;
          i = 1;
          var u = this.get(r),
            o = 0,
            a = 0,
            s = 0,
            c = 0,
            l = !1,
            f = !1,
            h = 0,
            v = i,
            d = 1;
          do {
            f = l;
            c = s;
            v = (r + i) / 2;
            o = this.get(v);
            a = this.get(i);
            (s = rn.getccenter(u, o, a)).interval = {
              start: r,
              end: i
            };
            l = this._error(s, u, r, i) <= t;
            (h = f && !l) || (d = i);
            if (l) {
              if (i >= 1) {
                s.interval.end = d = 1;
                c = s;
                if (i > 1) {
                  var p = {
                    x: s.x + s.r * cn(s.e),
                    y: s.y + s.r * ln(s.e)
                  };
                  s.e += rn.angle({
                    x: s.x,
                    y: s.y
                  }, p, this.get(1));
                }
                break;
              }
              i += (i - r) / 2;
            } else {
              i = v;
            }
          } while (!h && e++ < 100);
          if (e >= 100) {
            break;
          }
          c = c || s;
          n.push(c);
          r = d;
        } while (i < 1);
        return n;
      }
    }], [{
      key: "quadraticFromPoints",
      value: function (t, n, r, i) {
        0 === i && (i = .5);
        if (0 === i) {
          return new e(n, n, r);
        }
        if (1 === i) {
          return new e(t, n, n);
        }
        var u = e.getABC(2, t, n, r, i);
        return new e(t, u.A, r);
      }
    }, {
      key: "cubicFromPoints",
      value: function (t, n, r, i, u) {
        if (0 === i) {
          i = .5;
        }
        var o = e.getABC(3, t, n, r, i);
        if (0 === u) {
          u = rn.dist(n, o.C);
        }
        var a = u * (1 - i) / i,
          s = rn.dist(t, r),
          c = (r.x - t.x) / s,
          l = (r.y - t.y) / s,
          f = u * c,
          h = u * l,
          v = a * c,
          d = a * l,
          p = n.x - f,
          g = n.y - h,
          y = n.x + v,
          m = n.y + d,
          k = o.A,
          x = k.x + (p - k.x) / (1 - i),
          b = k.y + (g - k.y) / (1 - i),
          A = k.x + (y - k.x) / i,
          w = k.y + (m - k.y) / i;
        return new e(t, {
          x: t.x + (x - t.x) / i,
          y: t.y + (b - t.y) / i
        }, {
          x: r.x + (A - r.x) / (1 - i),
          y: r.y + (w - r.y) / (1 - i)
        }, r);
      }
    }, {
      key: "getUtils",
      value: function () {
        return rn;
      }
    }, {
      key: "PolyBezier",
      get: function () {
        return un;
      }
    }, {
      key: "getABC",
      value: function () {
        var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 2,
          n = arguments.length > 1 ? arguments[1] : 0,
          e = arguments.length > 2 ? arguments[2] : 0,
          r = arguments.length > 3 ? arguments[3] : 0,
          i = arguments.length > 4 && 0 !== arguments[4] ? arguments[4] : .5,
          u = rn.projectionratio(i, t),
          o = 1 - u,
          a = {
            x: u * n.x + o * r.x,
            y: u * n.y + o * r.y
          },
          s = rn.abcratio(i, t);
        return {
          A: {
            x: e.x + (e.x - a.x) / s,
            y: e.y + (e.y - a.y) / s
          },
          B: e,
          C: a,
          S: n,
          E: r
        };
      }
    }]);
  }();
function pn(t, n) {
  var e = mn();
  return (pn = function (t, n) {
    return e[t -= 376];
  })(t, n);
}
function gn() {
  var t,
    n,
    e = 26,
    r = 674,
    i = 558,
    u = 549,
    o = 34,
    a = 305;
  try {
    var s = !Boolean[c(26, 35) + c(21, e)][t = r, n = 682, pn(n - a, t) + "Of"][function (t, n) {
      return pn(t - -934, n);
    }(-i, -u)](Reflect["const" + c(o, 28)](Boolean, [], function () {}));
  } catch (t) {}
  function c(t, n) {
    return pn(t - -357, n);
  }
  return (gn = function () {
    return !!s;
  })();
}
!function () {
  var t = 1144,
    n = 592,
    e = 1145,
    r = 590,
    i = 82;
  function u(t, n) {
    return pn(t - -980, n);
  }
  function o(t, n) {
    return pn(t - 757, n);
  }
  var a = mn();
  function s(t, n) {
    return pn(n - -475, t);
  }
  for (;;) try {
    if (315106 === -parseInt(u(-583, -582)) / 1 + parseInt(o(t, 1152)) / 2 + parseInt(u(-601, -n)) / 3 * (parseInt(o(1145, 1142)) / 4) + -parseInt(u(-582, -573)) / 5 + parseInt(s(-84, -81)) / 6 * (parseInt(o(1141, e)) / 7) + -parseInt(u(-r, -578)) / 8 + parseInt(s(-92, -i)) / 9) {
      break;
    }
    a.push(a.shift());
  } catch (t) {
    a.push(a.shift());
  }
}();
var yn = function (t) {
  var e = 1386,
    r = 1397,
    i = 1402;
  function u() {
    function t(t, n) {
      return pn(t - 1e3, n);
    }
    function o(t, n) {
      return pn(t - -661, n);
    }
    function a(t, n) {
      return pn(n - -732, t);
    }
    if ("RhKAx" !== t(e, r)) {
      var s = arguments;
      n._classCallCheck(this, u);
      for (var c = arguments.length, l = new Array(c), f = 0; f < c; f++) if ("WRDzS" !== o(-269, -266)) {
        l[f] = s[f];
      } else {
        var h = wewlbwmndbn[0],
          v = guepirhtmpu[1],
          d = ozptagvnxeh[2],
          p = gzqndνydklg[3],
          g = fwyyzdmfiid.abs(h - (d - h) / 2),
          y = usizpsoissr.abs(v + (p - v) / 2);
        omznhhazwet[t(1396, 1385) + "e"](2, 0, g);
        ccdvikhdvgx[a(-346, -336) + "e"](3, 0, y);
      }
      n._typeof(l[0]);
      if (4 === l[a(-337, -347) + "h"]) {
        var m = l[0],
          k = l[1],
          x = l[2],
          b = l[3],
          A = Math[o(-281, -279)](m - (x - m) / 2),
          w = Math[a(-345, -352)](k + (b - k) / 2);
        l[t(1396, i) + "e"](2, 0, A);
        l[o(-265, -270) + "e"](3, 0, w);
      }
      return function (t, e, r) {
        function i(t, n) {
          return pn(t - -890, n);
        }
        e = n._getPrototypeOf(e);
        return n._possibleConstructorReturn(t, gn() ? Reflect[i(-508, -516) + "ruct"](e, r || [], n._getPrototypeOf(t)["const" + i(-509, -507) + "r"]) : e[pn(389, 486)](t, r));
      }(this, u, [][t(1395, 1385) + "t"](l));
    }
    gttyafsndyu[jwνwsνdewjq] = fzqyecagfuv[dyvatjiνgνr];
  }
  n._inherits(u, t);
  return n._createClass(u);
}(dn);
function mn() {
  var t = ["type", "48YnIEQH", "abs", "ructo", "const", "proto", "14FiCZFl", "lengt", "NzrpC", "65488VaaQMh", "112616GsChjS", "apply", "3517352rcRHGa", "ruct", "VtgJx", "7704162PoOzkT", "585198PqgKpL", "conca", "splic", "175482IvaFFu", "3020175vBwsRj", "call", "value"];
  return (mn = function () {
    return t;
  })();
}
function kn(t, n) {
  return bn(n - 433, t);
}
function xn(t, n) {
  return bn(t - -717, n);
}
function bn(t, n) {
  var e = An();
  return (bn = function (t, n) {
    return e[t -= 341];
  })(t, n);
}
function An() {
  var t = ["kByIm", "olor", "test", ": 传参为", " obje", "[isCh", "/logs", "volum", "recyc", "drawT", "r App", "retur", "out", "isUIO", "ccess", "kByCo", "APP再试", " mill", "split", "textE", "corre", "rupt", "utils", "safeT", "scale", "To Su", "geDis", "unds]", "setSc", "Cache", "eArea", "图坐标 ", "[scro", "ineMi", "xecut", "ibili", "lityB", "T_X", "lity", "DOM", "s emp", "launc", "isOwn", "Exit", "App]:", "filte", "Priva", "viceI", " open", "AutoJ", "ultiC", "Info", "visib", "立即开始", "ecuti", "pp]: ", "top", "etabl", "rotat", "setMu", "ght", "]: 概率", "findO", " 等待启动", "ndomM", "nel", "在关闭所有", "止引擎..", "unt", "pOYve", "ssibi", "dRunt", "rea: ", "stScr", "untim", "waitN", "artAp", "reenM", "Found", "]: in", "$once", "int", "lable", "Exit.", "close", "[dism", "hread", "eted ", "bound", "age", "info", "scrol", "endX", "js6", "lTo", "d]: 中", "openA", "getAn", "[exit", "adapt", "tal I", "il_co", "nes]:", "isApp", "AppSe", "llAnd", "rtApp", " 没有传入", "ear_x", "sEngi", "paren", "essag", "cache", "image", "ByRan", "”与识别结", "gativ", "ortcu", "r the", "lApps", "SWIPE", "devic", "ility", "reScr", "getLo", "ng Fa", "Canno", "babil", "-hh-m", "e]: 网", "ture:", "清除全部数", " area", "safeB", "2038264hXyBhf", "#0000", "tors", "start", "desto", "RSxxm", "AndFi", "Thres", "orIma", "isCon", "ckabl", "een", "t is ", "ector", ": cli", "sleep", "ack", "eFunc", "Compl", "home", "rcept", " elem", "[home", "e rec", "swipe", "creen", "片实例..", "Down", "ollec", "r]: S", "试重启AP", "anelS", "eyDow", "ZXGpL", "tion.", "ail..", "teGes", "ByExp", "eenOn", "ycle", "%，当前因", "ZON_P", ": 获取屏", "Build", "Cront", " must", "nList", " 子线层模", "navig", "Execu", "rd/Pi", "nAppC", "fromJ", "child", "ative", "VkXrQ", "[ensu", "warn", "funct", "resol", " temp", "dProm", "ute]:", "olors", "QoSii", "ToRec", "toJso", "eInit", "lear", "isExe", "eTask", "ithMo", "lects", "orFor", "age]:", "me]: ", "gauss", "cYBSO", "leOCR", " safe", "请重启手机", "NCE", "ck Cl", "clear", "esent", "ckage", "Threa", "lockS", "isIni", " Clic", "方应用！", "n] 执行", "] 执行中", "chTim", "execu", "readE", "itySh", "e_dow", "initW", "ack i", "achTi", "ianBl", "Equal", "p]: f", "brand", "rentA", "vibra", "[back", " Fail", "servi", "ierSw", "ail!", "[pres", "lIFuj", "ingAw", "robab", "vEncu", "rLzRs", "T_Y", "BySel", "behav", " wait", "utojs", "通过复杂查", "killT", "reInA", "force", "tasks", " or y", "Not F", "edule", "执行中..", " 找不到小", "[dblc", "ToMed", "killE", "getIM", "afhgs", "limit", "止线程..", "orSel", "ists]", "To]: ", "getPa", "Choos", "eAllK", "ick", "updat", "teByR", "tion", "hideC", "desc", "yBoun", "waitT", "EbjsB", "confi", "valTi", "isBez", "mark", "本“暂停”", "]: cl", "lick", "尝试修正.", "ions]", "p]: P", "valId", ", 结束坐", "min", " is E", "ress.", "#ff00", "ycle.", "lert", "Time", "坐标 ", "er_fa", "re.", "ct_la", "elect", "isAli", "offse", "able", "fromB", "AppPa", "ndom", ": ope", "/png;", ": scr", "isUIS", "isten", "finis", "mplet", "HQBhb", "setTe", "[laun", "k]: ", "compl", "[keyC", "NlKVo", "keys", "DURAT", "vaila", "atl", "setCo", "Netwo", "lecto", "停止！", "resho", "addTa", "lMTnE", "/clea", "che", "ine", "reen]", "onExi", "LkRrb", "$on", "then", "estSc", "e to ", "now", "xMzYg", "showC", "ivity", "depth", "ramet", "nCapt", "tton", "t Err", "eAllL", "entPa", "s/__D", "ound", "grays", "rGest", "load", "thres", "wice ", "g...", "prev", "find", "eleme", "backT", "素...", "bubbl", "cance", "NotFo", "VTsfS", "[acce", "check", "...", "bject", "max", "[isAv", "onTim", "call", "cale", "leToU", "DISTA", "killA", ".log", "nBlur", "oREIR", "[setC", "待网络恢复", "ForCl", "setAp", "recen", "bindD", "pByRa", " exce", "AppNa", "nds", "[long", "AllAp", "gmlki", "tab", "ANDOM", "ion", "lToTo", "[clic", "toStr", "aRiGT", "LONG_", "ime", "isNat", "catio", "a]: x", "longC", "getPr", "sts参数", "Exist", "P修复中.", "存储占用", "vate ", "xt is", "imum ", "heigh", "makeI", "on an", "ble A", "ure]:", "s...", "DPNJu", "og] 执", " isNo", "ess", "back", "nds!", "tific", "apply", "[wait", "alert", "imed", "iffer", "ByCol", "yOCR", "ssNot", "logNa", "HORIZ", "obabi", "Setti", "lityA", "dom", "R识别结果", "清除数据", "son", "clean", "e pro", "ache]", "remov", "dblcl", "width", "]: In", "#8888", "ToSho", " is ", "bVwmW", "reenC", ": Wai", "val", "[powe", "192785RZAygy", "read", "org.a", "UseV4", "5606120jZNuwx", "isScr", "为空...", "果无匹配.", "d]: 尝", "nActi", "[rece", "isBin", "]: Th", "killO", "ipe", "]: St", "ureSc", "[$emi", "stopA", "nce", "pPaus", "HUAWE", "完成！", "shot", "InPar", "keyCo", " isUn", "lengt", "heck ", "inRan", ": 节点不", "oid.l", "[$on]", "Shade", "cture", "kage]", "title", "Paren", ": sta", "exit", "[ocrR", "assin", "]-[", "sdkIn", "t]: I", "adset", "ctive", "setPo", "ot pr", "始坐标: ", "e]: 等", "kBySi", "nshot", "_swip", ": Is ", "gestu", "thers", "abled", "lume", "endY", "chPac", "Over", "ick F", "nd...", "timeo", "rging", "ickBy", "ceil", "ratio", "SNVdd", "ON_DU", "ement", "hold", "ase64", "findB", "[swip", "ionEn", "lePat", "gSize", "isAva", "ter p", "rkAva", "或重新启动", "push", "utton", "ect p", "出所有AP", "defin", "ntAct", "nds d", "rDial", "p]: 退", "ity c", "20214wBVgjv", "[star", "CslxP", "ToCli", ": UIS", "[Acce", " Avai", "ate", " seco", "式下，UI", "stop", "l...", "ePane", "oJUfc", "isFro", "幕授权失败", "maxTi", "Kwrlb", "找出多个元", "SHORT", "clip", "ickEl", "showA", "pture", "Trans", "kByBo", "部数据成功", "ache ", "toast", "ppSet", "eOCR", "sent", "kSett", "se64", "nZZFs", "roadc", "xists", "[getP", "Dialo", "rizon", "ityAl", "lip] ", "lick]", "srwvg", "annot", "press", " Not ", "add", "dmYuN", "[bubb", "ake", "VTR-A", "传递错误:", "[find", "event", "Other", "uawei", "yOLKb", "ence.", "isCha", "fig", "[isEx", "niabs", "[getB", "rando", "ure", "maxEx", "ncorr", "]: OC", "传参为UI", "_HORI", "SwLSL", "在前台运行", "captu", "tting", "动唤醒失败", "te el", "xXpTb", "rever", "eHeig", "清除缓存", "733582ydVEyr", "hToNe", "络已恢复！", "ounds", "exitA", "uncti", "lity]", "left", "or...", "_TIME", "lndJq", "sibil", "e]: c", "ear_y", "hhRXB", "nuoSN", "_POIN", "match", "Model", " 执行中.", "VERSI", "hPack", " 程序退出", "onDon", "versi", "WATCH", "once ", "yout_", "refre", "y] 执行", "SDK_I", "log", "exist", "oLiGd", "ty...", " prog", "durat", "ined", "dStar", "or:", "MAGE_", "失败！", "ation", "行中...", "Engin", "Optio", "abrup", "llApp", ": 点击允", "BOTTO", "inter", "p]: 脚", "setBr", "应用...", "Area:", " done", "undef", "ckByO", "ndexI", "getBa", "DUvMy", "getRa", "障碍服务.", "cente", "iseco", "nTime", "llEng", "Inter", "eenDo", "ntPac", "llTo]", "Color", "[slee", "notif", "k is ", "findM", "[whil", "LrHlY", "mage ", "catch", "ightn", "s]: s", "ityBu", "e_up", "resiz", "daemo", "wakeU", "enabl", "art O", "argin", "icati", "switc", "AHdtA", "otInA", "ting", "OINT_", "ttery", "unc", "ficat", "aptur", "er pa", "nextC", "P...", "essMo", "conca", "#2222", " time", "reque", "[padd", "[getI", "fore", "power", "$to", "e max", "for ", "hade", "s Exi", "ei_cl", "eWidt", "Confi", "saveT", "hWVSw", "dismi", ": cur", "cutio", "e fai", "ponit", "eFutu", "INE", "，重试超过", "引擎不主动", "ByOCR", "Image", "ing", "paddl", "ect", "getDe", "Click", "isUIT", "当前应用未", "searc", "callb", "vNuaw", "/sdca", "_.png", "eID", "中...", "16380Wshwlv", " Area", "36156xaFxAw", "nds]:", "logge", "error", "P失败..", "xtSiz", "kage", "ruct", "，退出所有", "nextT", "ionRa", "kable", "ettin", "UTpTc", "Acces", "eTime", "mRPrV", "eenCa", "isOCR", "dexIn", "xitin", "isUIC", "join", "$slee", "pect]", "getWi", "Dismi", "存在：", " of s", "tor，尝", "tstra", "kAvai", "sort", "turn", "del", "[clea", "hoose", "trigg", "rrent", "Back ", " ms..", "y not", "etect", "kBySe", "[gest", "1398UqJtJi", "ailab", "Pause", "nAppS", " on t", "takeS", "click", "lock", "cvtCo", "CripF", "BiQBV", "mplat", "ines", "重试...", "MEI", "lor", "getCl", "ilabl", "tionT", "dsetH", "Wrong", " 启动失败", "iveTh", "bling", "[gmlk", "cle]:", "resta", "exitM", "arame", "zDjqs", "or ", "[setE", "em is", "Avail", "ngine", "5XriOqH", "isAut", "[curr", "N_RAN", "value", "OGAaE", "图片实例！", ".auto", "index", "ed fo", "sicVo", "ByBou", "TIME", "ior", "wrap", "ForNe", "all", "inspe", "mage_", "hToPr", "onRea", "Xiaom", "[lock", "getBr", "ForSe", "next", " 非正常图", "ineMa", "dPool", "ds]: ", "showT", "s Not", "Navig", "LFTYV", "Scree", " clic", "unloc", "lVibr", "map", "oast", "r pas", "kByEx", "getMu", "e]: ", "tionS", "name", "]: ", " laye", "ByExi", "waitF", "media", "botto", "threa", "e don", "滑动失败，", "g] 执行", "eClic", "全部清除", "Loop ", "[spli", "leAre", "ltTsT", " in a", "llect", "eCons", "$emit", "form", "eout ", "[rest", "inSub", "concu", "getIn", "ms...", "ifica", "befor", "orPac", "e64", "failu", "限制！", "41510kUcKAc", "keepS", "t tim", "on...", "iew", "MAkfU", "findI", "assig", "$try", "KbKuV", "xWcPf", "eSlee", "blur", "urned", "setTh", "acces", "hook_", "yyyyM", "text", "p]: 正", "dth", "proto", "_huaw", "off", "[quic", "forEa", "k]: I", "em Te", "eners", "parse", "ser", "mage", "findC", "round", "e]: 主", "ION_R", "curre", "函数exi", "en] 执", "sts"];
  return (An = function () {
    return t;
  })();
}
function wn() {
  var t = 1193,
    n = 814,
    e = 1014;
  try {
    var r = !Boolean[u(t, n) + "type"].valueOf[u(603, 938)](Reflect["const" + u(1020, 1494)](Boolean, [], function () {}));
  } catch (t) {}
  function i(t, n) {
    return bn(t - 178, n);
  }
  function u(t, n) {
    return bn(t - 190, n);
  }
  return (wn = function () {
    function t(t, n) {
      return i(t - -480, n);
    }
    function n(t, n) {
      return i(n - -1043, t);
    }
    if ("DUvMy" === n(-455, -131)) {
      return !!r;
    }
    var u,
      o,
      a,
      s = null === (u = Tujcplkzifu) || 0 === u ? 0 : u[n(-184, 135)]();
    return Gzygiultvru[o = 1214, a = 1295, i(o - 36, a)] !== s ? (this[n(454, -40) + "r"].warn("[clickBySi" + n(-351, 26) + t(e, 712) + n(-319, -251) + "em Te" + t(151, -185) + t(337, 670) + "Equal...", Fqeatpireot.text, s), !1) : 0;
  })();
}
function In(t, n) {
  var e, r;
  (function (t, n) {
    var e = {
        XvCujrwvxmv: 244,
        CrWmtypysmk: 1175,
        CpVfqemxgpz: 1171,
        EwWjgtndrfz: 342,
        IaIsknyvfyh: 54,
        "CuUoyνrlytw": 1802
      },
      r = {
        "OcFgcnksνnc": 776
      };
    function i(t, n) {
      return bn(n - 880, t);
    }
    function u(t, n) {
      return bn(t - -115, n);
    }
    function o(t, n) {
      return bn(n - -208, t);
    }
    function a(t, n) {
      return bn(t - r.OcFgcnksνnc, n);
    }
    if (n.has(t)) {
      throw new TypeError(i(2520, 2028) + "t initialize the same pri" + o(-218, e.XvCujrwvxmv) + a(e.CrWmtypysmk, 1089) + "nts t" + a(e.CpVfqemxgpz, 1489) + u(e.EwWjgtndrfz, e.IaIsknyvfyh) + a(e.CuUoyνrlytw, 1511) + "ct");
    }
  })(t, n);
  n[e = 473, r = 947, bn(r - 307, e)](t);
}
function Cn(t, n) {
  return bn(n - -401, t);
}
!function () {
  var t = 208,
    n = 581,
    e = 125,
    r = 74,
    i = 25,
    u = 576,
    o = 670,
    a = 745,
    s = 301,
    c = 320,
    l = 529;
  function f(t, n) {
    return bn(t - -312, n);
  }
  function h(t, n) {
    return bn(t - -292, n);
  }
  var v,
    d,
    p = An();
  for (;;) try {
    if (827003 === -parseInt(h(t, n)) / 1 + parseInt(h(382, e)) / 2 + parseInt(bn(1732 - 909, 1441)) / 3 + -parseInt((v = r, d = i, bn(v - -430, d))) / 4 * (parseInt(h(611, 1087)) / 5) + parseInt(h(u, 830)) / 6 * (-parseInt(f(o, 248)) / 7) + -parseInt(f(844, a)) / 8 + -parseInt(h(s, c)) / 9 * (-parseInt(h(l, 646)) / 10)) {
      break;
    }
    p.push(p.shift());
  } catch (t) {
    p.push(p.shift());
  }
}();
var En = "OPPO" === device[kn(1430, 1693)],
  Sn = device[Pn(1330, 1795)] === Cn(65, 120) + "I";
device[kn(2053, 1693)];
var Mn = device[xn(543, 983)] === Cn(229, 523) + "i",
  Bn = Sn && device.model === Pn(1354, 1179) + "L00",
  Rn = device.release || android.os[kn(1897, 1632)][Cn(491, 293) + "ON"].RELEASE,
  zn = device[Cn(99, 142) + "t"] || android.os.Build.VERSION[kn(948, 1137) + "NT"],
  Tn = !1,
  On = !1,
  Dn = new n.EventEmitter();
function Pn(t, n) {
  return bn(n - 535, t);
}
events.on(Cn(445, 138), function () {
  Dn.trigger("exit");
});
var Nn = function () {
  var t = 1701,
    e = 1327,
    r = 1152,
    i = 1179,
    u = 234,
    o = 168,
    a = 1632,
    s = 1156,
    l = 241,
    f = 120,
    h = 976,
    v = 1399,
    d = 970,
    p = 1304,
    g = 1541,
    y = 1400,
    m = 1400,
    k = 633,
    x = 610,
    b = 1357,
    A = 507,
    w = 356,
    I = 603,
    C = 313,
    E = 733,
    S = 1593,
    M = 783,
    B = 1279,
    z = 1305,
    T = 1109,
    O = 429,
    D = 1706,
    P = 1139,
    N = 706,
    j = 406,
    q = 1321,
    F = 1057,
    U = 533,
    V = 400,
    Y = 1042,
    W = 229,
    K = 1895,
    J = 637,
    Q = 1217,
    L = 1487,
    H = 1070,
    X = 239,
    G = 645,
    Z = 1586,
    _ = 252,
    $ = 608,
    tt = 1539,
    nt = 1222,
    et = 294,
    rt = 1151,
    it = 1266,
    ut = 830,
    ot = 1291,
    at = 671,
    st = 452,
    ct = 15,
    lt = 1119,
    ft = 192,
    ht = 85,
    vt = 82,
    dt = 251,
    pt = 761,
    gt = 312,
    yt = 342,
    mt = 199,
    kt = 342,
    xt = 611,
    bt = 490,
    At = 254,
    wt = 748,
    It = 1038,
    Ct = 623,
    Et = 1180,
    St = 386,
    Mt = 784,
    Bt = 636,
    Rt = 727,
    zt = 1102,
    Tt = 1373,
    Ot = 1566,
    Dt = 1586,
    Pt = 1268,
    Nt = 652,
    jt = 770,
    qt = 860,
    Ft = 529,
    Ut = 62,
    Vt = 1579,
    Wt = 30,
    Kt = 1142,
    Jt = 1270,
    Qt = 819,
    Lt = 205,
    Ht = 672,
    Xt = 680,
    Gt = 1143,
    Zt = 265,
    _t = 1096,
    $t = 639,
    tn = 1284,
    nn = 1119,
    en = 1258,
    rn = 217,
    un = 659,
    on = 1248,
    an = 966,
    sn = 1186,
    cn = 345,
    ln = 474,
    fn = 692,
    hn = 873,
    vn = 1814,
    dn = 926,
    pn = 1933,
    gn = 1682,
    mn = 1587,
    xn = 1575,
    An = 1568,
    wn = 2386,
    In = 1958,
    Cn = 1276,
    Nn = 854,
    jn = 1117,
    qn = 1637,
    Fn = 336,
    Un = 62,
    Vn = 185,
    Yn = 685,
    Wn = 819,
    Kn = 902,
    Jn = 600,
    Qn = 102,
    Ln = 982,
    Hn = 295,
    Xn = 750,
    Gn = 1214,
    Zn = 126,
    _n = 1263,
    $n = 884,
    te = 444,
    ne = 602,
    ee = 1328,
    re = 962,
    ie = 785,
    ue = 992,
    oe = 1730,
    ae = 1276,
    se = 1435,
    ce = 1331,
    le = 1141,
    fe = 1411,
    he = 1795,
    ve = 1441,
    de = 611,
    pe = 1868,
    ge = 1059,
    ye = 583,
    me = 1529,
    ke = 1382,
    xe = 1415,
    be = 976,
    Ae = 1748,
    we = 1569,
    Ie = 1326,
    Ce = 1031,
    Ee = 746,
    Se = 750,
    Me = 1428,
    Be = 1021,
    Re = 1784,
    ze = 833,
    Te = 1203,
    Oe = 1443,
    De = 1523,
    Pe = 562,
    Ne = 518,
    je = 146,
    qe = 1068,
    Fe = 189,
    Ue = 1454,
    Ve = 256,
    Ye = 655,
    We = 704,
    Ke = 1102,
    Je = 1374,
    Qe = 55,
    Le = 1361,
    He = 2067,
    Xe = 104,
    Ge = 1001,
    Ze = 1408,
    _e = 565,
    $e = 1604,
    tr = 1715,
    nr = 661,
    er = 916,
    rr = 1027,
    ir = 224,
    ur = 1493,
    or = 1731,
    ar = 805,
    sr = 442,
    cr = 2232,
    lr = 268,
    fr = 1118,
    hr = 455,
    vr = 1832,
    dr = 1775,
    pr = 1458,
    gr = 2039,
    yr = 817,
    mr = 174,
    kr = 1348,
    xr = 1474,
    br = 1045,
    Ar = 1670,
    wr = 1990,
    Ir = 1004,
    Cr = 1428,
    Er = 1425,
    Sr = 593,
    Mr = 1052,
    Br = 1260,
    Rr = 1144,
    zr = 688,
    Tr = 1679,
    Or = 1564,
    Dr = 1139,
    Pr = 852,
    Nr = 1365,
    jr = 829,
    qr = 713,
    Fr = 522,
    Ur = 680,
    Vr = 549,
    Yr = 702,
    Wr = 525,
    Kr = 933,
    Jr = 617,
    Qr = 745,
    Lr = 286,
    Hr = 830,
    Xr = 198,
    Gr = 1576,
    Zr = 1345,
    _r = 495,
    $r = 203,
    ti = 1009,
    ni = 277,
    ei = 707,
    ri = 1182,
    ii = 661,
    ui = 234,
    oi = 632,
    ai = 493,
    si = 354,
    ci = 1493,
    li = 1344,
    fi = 708,
    hi = 278,
    vi = 234,
    di = 371,
    pi = 356,
    gi = 995,
    yi = 1254,
    mi = 243,
    ki = 70,
    xi = 430,
    bi = 1079,
    Ai = 1408,
    wi = 1904,
    Ii = 1037,
    Ci = 725,
    Ei = 1193,
    Si = 949,
    Mi = 118,
    Bi = 1274,
    Ri = 1361,
    zi = 696,
    Ti = 534,
    Oi = 644,
    Di = 531,
    Pi = 1709,
    Ni = 444,
    ji = 123,
    qi = 443,
    Fi = 485,
    Ui = 956,
    Vi = 73,
    Yi = 403,
    Wi = 1562,
    Ki = 491,
    Ji = 2020,
    Qi = 846,
    Li = 1161,
    Hi = 1650,
    Xi = 804,
    Gi = 719,
    Zi = 1021,
    _i = 265,
    $i = 898,
    tu = 443,
    nu = 298,
    eu = 1287,
    ru = 360,
    iu = 248,
    uu = 729,
    ou = 1107,
    au = 338,
    su = 1004,
    cu = 1498,
    lu = 1565,
    fu = 1060,
    hu = 1310,
    vu = 243,
    du = 2e3,
    pu = 270,
    gu = 526,
    yu = 998,
    mu = 976,
    ku = 307,
    xu = 540,
    bu = 1734,
    Au = 767,
    wu = 682,
    Iu = 1361,
    Cu = 498,
    Eu = 505,
    Su = 974,
    Mu = 2055,
    Bu = 1177,
    Ru = 1663,
    zu = 545,
    Tu = 1596,
    Ou = 800,
    Du = 1314,
    Pu = 1706,
    Nu = 844,
    ju = 783,
    qu = 2021,
    Fu = 2068,
    Uu = 662,
    Vu = 1921,
    Yu = 1631,
    Wu = 771,
    Ku = 1533,
    Ju = 801,
    Qu = 1472,
    Lu = 1713,
    Hu = 1175,
    Xu = 685,
    Gu = 705,
    Zu = 1231,
    _u = 1412,
    $u = 1031,
    to = 705,
    no = 1063,
    eo = 2026,
    ro = 325,
    io = 28,
    uo = 459,
    oo = 550,
    ao = 1089,
    so = 1457,
    co = 173,
    lo = 1480,
    fo = 698,
    ho = 2114,
    vo = 447,
    po = 1250,
    go = 1865,
    yo = 1775,
    mo = 164,
    ko = 857,
    xo = 334,
    bo = 726,
    Ao = 204,
    wo = 744,
    Io = 188,
    Co = 473,
    Eo = 151,
    So = 1143,
    Mo = 1596,
    Bo = 482,
    Ro = 939,
    zo = 966,
    To = 994,
    Oo = 544,
    Do = 603,
    Po = 552,
    No = 1047,
    jo = 645,
    qo = 840,
    Fo = 432,
    Uo = 727,
    Vo = 380,
    Yo = 1391,
    Wo = 788,
    Ko = 1415,
    Jo = 888,
    Qo = 496,
    Lo = 1417,
    Ho = 1014,
    Xo = 1032,
    Go = 828,
    Zo = 1330,
    _o = 1184,
    $o = 1281,
    ta = 1323,
    na = 1846,
    ea = 952,
    ra = 1439,
    ia = 1547,
    ua = 542,
    oa = 284,
    aa = 624,
    sa = 1020,
    ca = 1633,
    la = 1927,
    fa = 1380,
    ha = 1598,
    va = 1149,
    da = 64,
    pa = 789,
    ga = 870,
    ya = 1557,
    ma = 1183,
    ka = 719,
    xa = 1379,
    ba = 507,
    Aa = 11,
    wa = 838,
    Ia = 1220,
    Ca = 838,
    Ea = 1084,
    Sa = 687,
    Ma = 447,
    Ba = 1140,
    Ra = 1424,
    za = 1428,
    Ta = 1237,
    Oa = 1406,
    Da = 1088,
    Pa = 1477,
    Na = 797,
    ja = 1164,
    qa = 782,
    Fa = 1333,
    Ua = 472,
    Va = 589,
    Ya = 1012,
    Wa = 659,
    Ka = 718,
    Ja = 25,
    Qa = 507,
    La = 900,
    Ha = 466,
    Xa = 559,
    Ga = 418,
    Za = 338,
    _a = 646,
    $a = 131,
    ts = 816,
    ns = 49,
    es = 233,
    rs = 30,
    is = 121,
    us = 1019,
    os = 1160,
    as = 1035,
    ss = 515,
    cs = 947,
    ls = 116,
    fs = 1003,
    hs = 568,
    vs = 1286,
    ds = 438,
    ps = 188,
    gs = 116,
    ys = 864,
    ms = 1371,
    ks = 870,
    xs = 181,
    bs = 1228,
    As = 1014,
    ws = 306,
    Is = 773,
    Cs = 822,
    Es = 549,
    Ss = 378,
    Ms = 597,
    Bs = 864,
    Rs = 1237,
    zs = 804,
    Ts = 460,
    Os = 1407,
    Ds = 1438,
    Ps = 1320,
    Ns = 1702,
    js = 610,
    qs = 1746,
    Fs = 1341,
    Us = 335,
    Vs = 150,
    Ys = 897,
    Ws = 62,
    Ks = 334,
    Js = 1520,
    Qs = 1660,
    Ls = 1025,
    Hs = 1427,
    Xs = 367,
    Gs = 876,
    Zs = 120,
    _s = 63,
    $s = 1637,
    tc = 207,
    nc = 496,
    ec = 771,
    rc = 249,
    ic = 137,
    uc = 516,
    oc = 1330,
    ac = 1503,
    sc = 1895,
    cc = 1983,
    lc = 677,
    fc = 1800,
    hc = 352,
    vc = 1385,
    dc = 375,
    pc = 67,
    gc = 1412,
    yc = 769,
    mc = 958,
    kc = 1433,
    xc = 797,
    bc = 242,
    Ac = 937,
    wc = 117,
    Ic = 754,
    Cc = 1204,
    Ec = 1564,
    Sc = 258,
    Mc = 1500,
    Bc = 341,
    Rc = 634,
    zc = 938,
    Tc = 1182,
    Oc = 898,
    Dc = 454,
    Pc = 941,
    Nc = 764,
    jc = 794,
    qc = 689,
    Fc = 903,
    Uc = 1594,
    Vc = 364,
    Yc = 1055,
    Wc = 1300,
    Kc = 731,
    Jc = 1145,
    Qc = 1696,
    Lc = 985,
    Hc = 1545,
    Xc = 1056,
    Gc = 399,
    Zc = 617,
    _c = 1087,
    $c = 1014,
    tl = 1042,
    nl = 1039,
    el = 1504,
    rl = 1175,
    il = 1110,
    ul = 315,
    ol = 1974,
    al = 1467,
    sl = 1117,
    cl = 1590,
    ll = 568,
    fl = 443,
    hl = 542,
    vl = 426,
    dl = 427,
    pl = 1095,
    gl = 1672,
    yl = 1732,
    ml = 1546,
    kl = 1802,
    xl = 368,
    bl = 832,
    Al = 1033,
    wl = 1481,
    Il = 1569,
    Cl = 686,
    El = 606,
    Sl = 334,
    Ml = 1708,
    Bl = 322,
    Rl = 1513,
    zl = 1260,
    Tl = 1571,
    Ol = 1781,
    Dl = 192,
    Pl = 405,
    Nl = 1148,
    jl = 188,
    ql = 177,
    Fl = 116,
    Ul = 88,
    Vl = 1287,
    Yl = 435,
    Wl = 439,
    Kl = 1036,
    Jl = 1632,
    Ql = 545,
    Ll = 467,
    Hl = 1617,
    Xl = 239,
    Gl = 1151,
    Zl = 527,
    _l = 1990,
    $l = 343,
    tf = 1179,
    nf = 1508,
    ef = 1831,
    rf = 41,
    uf = 784,
    of = 1437,
    af = 1058,
    sf = 1546,
    cf = 1324,
    lf = 935,
    ff = 1074,
    hf = 1506,
    vf = 1022,
    df = 1182,
    pf = 821,
    gf = 220,
    yf = 71,
    mf = 73,
    kf = 2091,
    xf = 458,
    bf = 315,
    Af = 2046,
    wf = 1653,
    If = 1731,
    Cf = 676,
    Ef = 10,
    Sf = 516,
    Mf = 1068,
    Bf = 490,
    Rf = 969,
    zf = 550,
    Tf = 398,
    Of = 1174,
    Df = 701,
    Pf = 896,
    Nf = 1678,
    jf = 1227,
    qf = 2199,
    Ff = 627,
    Uf = 62,
    Vf = 686,
    Yf = 1840,
    Wf = 491,
    Kf = 2294,
    Jf = 1457,
    Qf = 1734,
    Lf = 1883,
    Hf = 1630,
    Xf = 1596,
    Gf = 1891,
    Zf = 342,
    _f = 694,
    $f = 1258,
    th = 1413,
    nh = 1809,
    eh = 884,
    rh = 1322,
    ih = 362,
    uh = 35,
    oh = 985,
    ah = 1166,
    sh = 831,
    ch = 1717,
    lh = 1724,
    fh = 1302,
    hh = 1165,
    vh = 1721,
    dh = 420,
    ph = 11,
    gh = 739,
    yh = 1491,
    mh = 545,
    kh = 709,
    xh = 7,
    bh = 1578,
    Ah = 179,
    wh = 1329,
    Ih = 435,
    Ch = 513,
    Eh = 309,
    Sh = 750,
    Mh = 911,
    Bh = 403,
    Rh = 864,
    zh = 368,
    Th = 60,
    Oh = 202,
    Dh = 132,
    Ph = 306,
    Nh = 321,
    jh = 837,
    qh = 982,
    Fh = 537,
    Uh = 443,
    Vh = 1315,
    Yh = 633,
    Wh = 1098,
    Kh = 150,
    Jh = 1059,
    Qh = 163,
    Lh = 884,
    Hh = 929,
    Xh = 1025,
    Gh = 882,
    Zh = 1073,
    _h = 141,
    $h = 572,
    tv = 265,
    nv = 185,
    ev = 1101,
    rv = 920,
    iv = 1331,
    uv = 882,
    ov = 549,
    av = 620,
    sv = 1642,
    cv = 220,
    lv = 253,
    fv = 803,
    hv = 740,
    vv = 309,
    dv = 1504,
    pv = 756,
    gv = 470,
    yv = 756,
    mv = 2004,
    kv = 1700,
    xv = 2252,
    bv = 325,
    Av = 487,
    wv = 436,
    Iv = 1453,
    Cv = 838,
    Ev = 333,
    Sv = 275,
    Mv = 706,
    Bv = 750,
    Rv = 1103,
    zv = 878,
    Tv = 1166,
    Ov = 352,
    Dv = 1464,
    Pv = 906,
    Nv = 1444,
    jv = 491,
    qv = 232,
    Fv = 282,
    Uv = 713,
    Vv = 993,
    Yv = 1122,
    Wv = 649,
    Kv = 959,
    Jv = 1265,
    Qv = 1434,
    Lv = 532,
    Hv = 1710,
    Xv = 1480,
    Gv = 775,
    Zv = 995,
    _v = 867,
    $v = 246,
    td = 551,
    nd = 392,
    ed = 356,
    rd = 817,
    ud = 224,
    od = 1109,
    ad = 1483,
    sd = 1679,
    cd = 2079,
    ld = 1512,
    fd = 1587,
    hd = 536,
    vd = 1602,
    dd = 1098,
    pd = 263,
    gd = 424,
    yd = 960,
    md = 1088,
    kd = 1375,
    xd = 483,
    bd = 1755,
    Ad = 1998,
    wd = 970,
    Id = 1539,
    Cd = 1097,
    Ed = 1763,
    Sd = 358,
    Md = 795,
    Bd = 1616,
    Rd = 1289,
    zd = 1865,
    Td = 1500,
    Od = 1236,
    Dd = 1624,
    Pd = 1530,
    Nd = 1795,
    jd = 1882,
    qd = 126,
    Fd = 1392,
    Ud = 1520,
    Vd = 1915,
    Yd = 1739,
    Wd = 1410,
    Kd = 279,
    Jd = 262,
    Qd = 769,
    Ld = 1051,
    Hd = 66,
    Xd = 194,
    Gd = 383,
    Zd = 2056,
    _d = 1710,
    $d = 994,
    tp = 1795,
    np = 191,
    ep = 1088,
    rp = 770,
    ip = 1674,
    up = 533,
    op = 330,
    ap = 897,
    sp = 1454,
    cp = 1086,
    lp = 1293,
    fp = 595,
    hp = 790,
    vp = 442,
    dp = 374,
    pp = 699,
    gp = 750,
    yp = 916,
    mp = 2165,
    kp = 171,
    xp = 523,
    bp = 514,
    Ap = 187,
    wp = 240,
    Ip = 360,
    Cp = 320,
    Ep = 292,
    Sp = 561,
    Mp = 1181,
    Bp = 886,
    Rp = 1529,
    zp = 1560,
    Tp = 1364,
    Op = 327,
    Dp = 722,
    Pp = 566,
    Np = 774,
    jp = 984,
    qp = 1406,
    Fp = 1198,
    Up = 1488,
    Vp = 533,
    Yp = 146,
    Wp = 1069,
    Kp = 754,
    Jp = 858,
    Qp = 1260,
    Lp = 243,
    Hp = 1853,
    Xp = 1165,
    Gp = 380,
    Zp = 1521,
    _p = 817,
    $p = 872,
    tg = 1504,
    ng = 252,
    eg = 783,
    rg = 743,
    ig = 52,
    ug = 573,
    og = 1072,
    ag = 109,
    sg = 832,
    cg = 322;
  function lg(t, n) {
    return kn(t, n - -168);
  }
  function fg(t, n) {
    return Pn(t, n - -452);
  }
  function hg(t, n) {
    return Pn(t, n - -938);
  }
  function vg(t, n) {
    return kn(t, n - -1341);
  }
  return n._createClass(function t() {
    var e = 578,
      r = 686,
      i = this,
      u = arguments[o(923, Mp) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {};
    function o(t, n) {
      return bn(t - 396, n);
    }
    function a(t, n) {
      return bn(t - -526, n);
    }
    function s(t, n) {
      return bn(n - 460, t);
    }
    function c(t, n) {
      return bn(n - 243, t);
    }
    n._classCallCheck(this, t);
    this[o(1344, 1412)] = u.name || n.ProName;
    this.version = u[c(1390, 941) + "on"] || n.ProVersion;
    this["devic" + a(293, 686)] = n.deviceEnv.id;
    this["devic" + c(1532, 1035) + "h"] = n.deviceEnv[o(Bp, 501)];
    this[c(Rp, 1386) + o(1068, 850) + "ht"] = n.deviceEnv[s(749, 915) + "t"];
    this.behavior = new n.BaseBehavior();
    this[s(1020, 832) + "t"](function () {
      function t(t, n) {
        return s(n, t - -798);
      }
      var n;
      null === (n = i["behav" + t(e, 431)]) || 0 === n || n[t(822, r) + "ry"]();
    });
    this.isBootstrap = !0;
    this[s(zp, 1432) + "Thread"] = !1;
    this[s(1227, Tp) + "oInit"] = !this["isBoo" + a(Op, 90) + "p"];
    this[c(408, 850) + "mCron" + c(Dp, 677)] = this[a(718, 1009) + "tFrom" + s(1449, 1660) + "ab"]();
    this[o(1008, Pp) + a(157, -165)] = 500;
    this[o(837, 676) + "TIME"] = 3e3;
    this["start" + c(1895, 1448) + "tionTime"] = Date[o(Np, 962)]();
    this["maxEx" + o(1472, jp) + a(-114, 93) + "e"] = 0;
    this[o(1095, qp) + "_TIME"] = [5e3, 1e4];
    this["TIMEL" + o(Fp, Up)] = [100, 300];
    (Bn || Rn <= 10) && (this["TIMEL" + s(908, 1262)] = [110, 138]);
    this["SWIPE" + c(1229, 933) + a(Vp, 232)] = .5 * this.deviceWidth;
    this["SWIPE_POIN" + s(1965, 1734)] = .75 * this["devic" + a(Yp, -282) + "ht"];
    this[a(-110, -124) + o(1633, 1931)] = .5 * this[o(1539, Wp) + "eHeight"];
    this[o(Kp, 477) + c(Jp, Qp) + "ANDOM"] = [-100, 100];
    this[s(1740, 1602) + "_HORIZON_P" + a(Lp, 244) + "X"] = .8 * this[a(617, 496) + "eWidth"];
    this["SWIPE" + a(137, 274) + o(1593, Hp) + o(Xp, 729) + "Y"] = .5 * this.deviceHeight;
    this["HORIZ" + s(804, 1030) + "RATIO" + a(Gp, 530) + s(1861, Zp)] = [-100, 100];
    Object[s(832, _p)](u).forEach(function (t, n) {
      i[t] = u[t];
    });
    this.AppName = this.AppName || "AutoRobot";
    this.localStorage = new n.LocalStorage(this["AppPa" + o(1637, 1851)] || this[c(615, 672) + "me"]);
    this[o(1221, 1257) + "r"] = new n.Logger(u[o($p, 1351) + "me"] || this.AppName);
    this[c(494, 890) + "s"] = new n.EventEmitter();
    this[s(1979, tg)] = {
      extend: n._extend
    };
    n.isProduction && this[o(1221, 1254) + "r"]["setGlobalLogCon" + c(1370, 896)]({
      file: u["logFi" + c(895, 820) + "h"] || ("/sdcard/脚本" + a(502, 332) + "/").concat(this.version, "/")[a(ng, 183) + "t"](this[o(825, 528) + "me"], "-").concat(n.formatTime(Date[s(1295, 838)](), o(1395, 1489) + "Mdd"), a(-108, -440))
    });
    this[c(1551, 1215) + o(1638, 1250) + "d"] && Dn[a(-38, 75) + o(eg, 387) + o(rg, 826) + "ers"]();
    this.showConsole && (this.logger.show(!0), this[a(299, 163) + "r"]["setLo" + a(ig, 192)](6), this.onExit(function () {
      var t, n;
      i[t = 1017, n = 914, a(t - 718, n) + "r"].hide();
    }));
    this[o(1446, 1354) + a(ug, og) + "etrics"] && setScreenMetrics(1080, 1920);
    this[c(921, 1137) + "rtAppCount"] = 0;
    this[a(599, ag) + "Paused"] = !1;
    this[s(1276, sg) + "t"](function () {
      var t, n, e, r, u, s, l, f;
      i.logger[e = 1415, r = 1362, a(r - 1400, e) + (t = 1209, n = 1114, o(n - 331, t)) + "isteners"]();
      i[l = -86, f = 297, c(f, l - -976) + "s"]["remov" + (u = cg, s = -65, c(s, u - -308) + "isteners")]();
    });
  }, [{
    key: lg(t, 1261) + fg(1162, 1334) + "nv",
    value: function () {
      var t = 153;
      function n(t, n) {
        return fg(t, n - -1063);
      }
      var e,
        r,
        i = arguments[n(-806, -453) + "h"] > 0 && 0 !== arguments[0] && arguments[0];
      this[n(-507, -8) + (e = 1478, r = 1454, fg(r, e - t)) + "d"] = i;
    }
  }, {
    key: fg(943, e) + "tFromCrontab",
    value: function () {
      return n.isInitFromCrontab();
    }
  }, {
    key: vg(-421, -403) + "eenOn",
    value: function () {
      return device["isScr" + (t = 1424, n = 1574, lg(t, n - 115))]();
      var t, n;
    }
  }, {
    key: "getDeviceUUID",
    value: function () {
      function t(t, n) {
        return hg(t, n - Sp);
      }
      return zn > 28 ? this.getAndroidId() : this[t(838, 968) + t(861, 1227) + (n = 142, e = Ep, lg(n, e - -855))]();
      var n, e;
    }
  }, {
    key: "getAndroidId",
    value: function () {
      return device[t = 1556, n = 1118, hg(t, n - 402) + "droidId"]();
      var t, n;
    }
  }, {
    key: lg(823, 1075) + fg(1467, r) + "MEI",
    value: function () {
      return device[t = Cp, n = 547, vg(n, t - -64) + "EI"]();
      var t, n;
    }
  }, {
    key: "getStatusBarHei" + lg(1334, 1347),
    value: function () {
      return n.getStatusBarHeight();
    }
  }, {
    key: vg(266, 391) + "ckage" + hg(614, 670),
    value: function (t) {
      return n.getPackageInfo(t);
    }
  }, {
    key: "setExecuti" + vg(-961, -496) + "e",
    value: function (t) {
      if (t < 0) {
        return !1;
      }
      function n(t, n) {
        return vg(t, n - 532);
      }
      var e, r;
      function i(t, n) {
        return hg(n, t - 231);
      }
      function u(t, n) {
        return hg(n, t - -4);
      }
      this.logger[e = 1022, r = 1027, lg(e, r - 57)]((n(581, xp) + i(884, 710) + "ionTi" + u(824, 987))[u(371, bp) + "t"](t, " seco" + n(-138, Ap)));
      this[i(487, 852) + "ecuti" + i(wp, Ip) + "e"] = parseInt(1e3 * t);
      return !0;
    }
  }, {
    key: hg(370, 822) + lg(722, 1063) + fg(564, 822) + vg(-211, -347),
    value: function (t) {
      var n = 1518;
      if (this.maxExecutionTime <= 0) {
        return !1;
      }
      var e = parseInt(Date.now() - this["startExecutionT" + r(-38, -78)]);
      function r(t, n) {
        return vg(n, t - 428);
      }
      var i,
        u,
        o = e >= this["maxEx" + r(596, gp) + "onTime"];
      function a(t, e) {
        return vg(t, e - n);
      }
      this.logger.log((a(784, 1264) + "ecuti" + a(yp, 1307) + (i = 1819, u = mp, fg(u, i - 790))).concat(e, " milliseco" + r(109, 312) + "iffer" + r(kp, 60) + ".."));
      o && t && t();
      return o;
    }
  }, {
    key: "bindR" + fg(1327, i) + "e",
    value: function () {
      var t = 449,
        e = 509,
        r = 276,
        i = 722,
        u = 715,
        o = 111,
        a = arguments[s(203, 207) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {};
      if (this[s(187, 270) + v(317, 162) + s(147, 60)]) {
        return !0;
      }
      if (!n.isProduction) {
        return !1;
      }
      function s(t, n) {
        return lg(n, t - -589);
      }
      a = Object[d(fp, 564) + "n"]({
        keepScreenOn: !0,
        setBrightnessMode: !0,
        setBrightness: !0,
        setMusicVolume: !0
      }, a);
      var c = device[l(-3, 231) + l(-175, 119) + "essMode"]();
      function l(t, n) {
        return hg(n, t - -526);
      }
      var f = device["getBrightn" + s(140, 529)](),
        h = device[l(16, 134) + "sicVo" + s(234, 35)]();
      function v(t, n) {
        return vg(t, n - -23);
      }
      function d(t, n) {
        return hg(n, t - 9);
      }
      a[l(54, -263) + l(252, -8) + "On"] && device.keepScreenOn();
      a[v(-460, -205) + "ightn" + d(383, hp) + "de"] && device[s(402, 518) + d(360, 691) + "essMode"](0);
      a[s(402, -52) + d(360, 269) + "ess"] && device[d(332, 660) + "ightn" + s(140, vp)](Math[s(999, 1160)](f, 1));
      a.setMusicVolume && device["setMu" + l(-16, 361) + "lume"](Math.min(h, 1));
      this[d(-22, dp) + "t"](function () {
        var n,
          l,
          v = 533;
        function p(t, n) {
          return d(n - v, t);
        }
        function g(t, n) {
          return d(n - -415, t);
        }
        function y(t, n) {
          return s(t - 56, n);
        }
        a[y(458, t) + "ightn" + y(e, 376) + "de"] && device["setBr" + g(-390, -55) + y(509, 502) + "de"](c);
        a[g(r, -83) + g(148, -55) + p(389, 603)] && device["setBr" + p(i, 893) + p(562, 603)](f);
        a["setMu" + p(1241, 1052) + "lume"] && device[p(1374, 1220) + p(1423, 1052) + g(-631, -251)](h);
        a[y(u, 551) + p(1516, 1320) + "On"] && device["cancelKeep" + g(o, 461) + (n = 232, l = 427, s(n - -87, l))]();
      });
      this[s(187, 315) + s(769, 544) + "imed"] = !0;
      return this[v(-153, -420) + d(pp, 222) + v(-303, -460)];
    }
  }, {
    key: vg(-347, 31) + "kDevice",
    value: function () {
      function t(t, n) {
        return fg(t, n - 442);
      }
      function n(t, n) {
        return lg(t, n - 497);
      }
      function e(t, n) {
        return vg(t, n - 1052);
      }
      if (t(ap, 1361) !== e(1567, sp)) {
        device[e(1041, 904) + "p"]();
        this["sleepByRan" + t(cp, 1006)](1e3, 2e3);
        this[n(lp, 1527) + "hToNext"]();
        Bn && this[e(766, 909) + n(1263, 1437) + "xt"]();
        this[r = 1845, i = 1769, hg(r, i - 1001) + n(1881, 1898) + "dom"](3e3, 4e3);
        return !0;
      }
      var r, i;
      fdjduiksrpu = rnmvlgvriau.grayscale(νrνbvtaansn);
    }
  }, {
    key: fg(792, 509) + hg(u, 462) + fg(1220, 1312) + vg(o, 157),
    value: function (t) {
      var n = this;
      if (this["inSub" + i(571, 492) + "d"]) {
        return !1;
      }
      function e(t, n) {
        return vg(n, t - 246);
      }
      function r(t, n) {
        return vg(t, n - op);
      }
      function i(t, n) {
        return fg(n, t - -754);
      }
      this[i(154, Hd) + "r"].info("bindD" + i(Xd, 122) + r(Gd, 651) + i(434, 81) + "..");
      var u = threads.start(function () {
        var i = 12,
          o = 129,
          a = 1668;
        function s(t, n) {
          return lg(t, n - 1237 - -657);
        }
        function c(t, n) {
          return e(t - 1163, n);
        }
        events["setKeyInte" + c(1677, Zd) + "ionEn" + s(1615, 1402)](c(1530, _d) + "e_down", !0);
        events["setKeyIntercept" + c(1077, $d) + "abled"](s(tp, 1874) + f(np, -128), !0);
        events.observeKey();
        var l = function () {
          function e(t, n) {
            return h(n, t - -720);
          }
          function r(t, n) {
            return s(t, n - -1078);
          }
          function i(t, n) {
            return h(t, n - 248);
          }
          function c(t, n) {
            return s(n, t - -1564);
          }
          t && t();
          events[e(-491, -664) + c(582, o) + c(469, -20) + e(223, 339) + "eners"]("volum" + i(a, 1242) + "n");
          events["remov" + i(1579, 1290) + c(469, 900) + "nList" + r(545, 777)]("volume_up");
          u[r(961, 491) + "rupt"]();
          n[r(1169, 938) + r(98, 260) + "rt"]();
          n[c(-180, -329)]();
        };
        function f(t, n) {
          return r(n, t - i);
        }
        function h(t, n) {
          return e(n - 403, t);
        }
        events.onKeyDown(h(ep, rp) + f(687, 957) + "n", l);
        events["onKey" + h(719, 924)](c(1530, ip) + f(191, up), l);
      });
    }
  }, {
    key: vg(-377, -534),
    value: function (t, e) {
      function r(t, n) {
        return vg(n, t - 1124);
      }
      if (!t || !n.isFunction(e)) {
        this[r(1041, 755) + "r"][i = 639, u = Jd, lg(u, i - -839)](fg(Qd, Ld - 436) + ": Incorrect paramete" + r(1159, 1625) + "sing...");
        return !1;
      }
      var i, u;
      return this.events.on(t, e);
    }
  }, {
    key: hg(746, 699),
    value: function (t, e) {
      if (!t || !n.isFunction(e)) {
        this.logger[r(Vd, Yd)]("[$once]: Incorrect parameter p" + r(1243, Wd) + "g...");
        return !1;
      }
      function r(t, n) {
        return hg(n, t - 1105);
      }
      return this[i = Kd, u = 370, hg(u, i - 35) + "s"].once(t, e);
      var i, u;
    }
  }, {
    key: "$off",
    value: function (t, e) {
      function r(t, n) {
        return hg(t, n - 1037);
      }
      function i(t, n) {
        return hg(t, n - 154);
      }
      return t && n.isFunction(e) ? this[i(139, 398) + "s"][r(1411, 1639)](t, e) : (this.logger.warn("[$off" + i(-54, 242) + (fg(qd, 347 - -778) + "ct pa") + r(599, 1017) + (hg(Fd, Ud - 1149) + "ssing...")), !1);
    }
  }, {
    key: hg(465, 565),
    value: function (t) {
      var n,
        e = arguments;
      function r(t, n) {
        return lg(t, n - -289);
      }
      function i(t, n) {
        return lg(n, t - 721);
      }
      function u(t, n) {
        return fg(t, n - 873);
      }
      if (!t) {
        this[u(1499, 1781) + "r"][r(1284, 1189)](u(Dd, 1473) + i(Pd, 1245) + u(Nd, 1616) + i(1571, 1597) + i(jd, 2316) + u(1479, 1536) + "assin" + u(1004, 1352));
        return !1;
      }
      for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) a[s - 1] = e[s];
      return (n = this.events)[r(1256, 836) + "er"][r(681, 444)](n, [t][r(1152, 754) + "t"](a));
    }
  }, {
    key: "ensureInApp",
    value: function (t) {
      function n(t, n) {
        return fg(n, t - 708);
      }
      function e(t, n) {
        return lg(t, n - 158);
      }
      function r(t, n) {
        return fg(n, t - 501);
      }
      return !(!this.isCurrentApp(t) && (this[n(Bd, 2025) + "r"][r(Rd, 1464)](n(2003, 1752) + r(zd, 2015) + e(1330, Td) + e(1529, Od) + e(880, 1088) + "，尝试启动" + e(1541, 1243)), !this[e(1467, 1582) + "App"](t))) || (this.logger.error(e(1319, 1635) + "reInApp]: 启动App失败..."), !1);
    }
  }, {
    key: fg(a, 1147) + hg(152, 534) + "nCapt" + fg(s, 741),
    value: function () {
      return Tn;
    }
  }, {
    key: vg(l, -127) + "stScr" + fg(1387, 923) + vg(-475, -292),
    value: function (t) {
      var n = 1342;
      function e() {
        return t.apply(this, arguments);
      }
      function r(t, n) {
        return vg(n, t - 901);
      }
      e[r(432, 98) + "ing"] = function () {
        return t[e = n, i = 1394, r(e - 910, i) + "ing"]();
        var e, i;
      };
      return e;
    }(function () {
      var t = this,
        n = arguments.length > 0 && 0 !== arguments[0] && arguments[0];
      function e(t, n) {
        return lg(t, n - -13);
      }
      var r = !(arguments.length > 1 && 0 !== arguments[1]) || arguments[1];
      if (this["isOwn" + o(437, 311) + o(-287, -242) + "ure"]()) {
        return !0;
      }
      function i(t, n) {
        return fg(t, n - Md);
      }
      function u(t, n) {
        return lg(n, t - -666);
      }
      function o(t, n) {
        return hg(t, n - -223);
      }
      if (!this.isScreenOn()) {
        this[i(fd, 1817) + "kDevice"]();
      }
      var a = threads.start(function () {
          function n(t, n) {
            return o(t, n - -27);
          }
          function e(t, n) {
            return u(t - 1391, n);
          }
          if (!r) {
            return !0;
          }
          function i(t, n) {
            return o(n, t - 1221);
          }
          function a(t, n) {
            return o(n, t - 787);
          }
          t["sleep" + i(md, 976) + "rt"]();
          if (En && t[n(-447, -46) + "mCrontab"]) {
            if ("lMTnE" !== i(962, kd)) {
              this.logger.log("[clic" + i(Id, Cd) + "ists]: 节点不" + a(1011, 1186), Aνvbcpelpgo);
              return !1;
            }
            device[e(1750, 1411) + "p"]();
            t["sleep" + n(658, xd) + "dom"](1e3, 2e3);
            t[e(bd, Ad) + a(836, 1236) + "xt"]();
            t[i(1766, 2181) + n(718, 483) + i(1076, wd)](3e3, 4e3);
          }
          t["waitForSel" + n(253, 516)](text("立即开始")) && (t.clickByExists(text(e(2065, 2493))), t.logger[i(1300, 1675)]("[requ" + i(971, 1082) + e(1486, 1784) + e(Ed, 1660) + i(1611, 2083) + "动授权点击" + a(683, Sd)));
          En && t[n(-117, -46) + "mCrontab"] && lockScreen();
        }),
        s = Tn = requestScreenCapture();
      a[o(hd, 709) + "ve"]() && a[i(1368, vd) + e(dd, 1295)]();
      if (!s) {
        if (u(263, 391) !== u(pd, 90)) {
          this[u(gd, 497) + "r"].log(e(599, 850) + "ssibility]: 关闭无障碍服务...");
          return νRνbvtaansn();
        }
        this["showT" + e(yd, 1194)]("脚本 ".concat(this[i(1374, 1307) + "me"], " 屏幕权限授权失败!"));
        n && this[e(1204, 791)]();
      }
      return s;
    })
  }, {
    key: "captu" + vg(-258, 237) + "een",
    value: function (t) {
      var n = 129,
        e = 1079;
      function r(t, n) {
        return hg(n, t - e);
      }
      function i() {
        return t[n = 68, e = -104, bn(n - -400, e)](this, arguments);
        var n, e;
      }
      i[r(1115, 1444) + r(ad, sd)] = function () {
        function e(t, e) {
          return r(t - n, e);
        }
        if (e(2078, cd) !== e(ld, 1856)) {
          return t[e(1244, 1222) + (u = 5, o = -138, fg(u, o - -922 - -106))]();
        }
        var i, u, o;
        kvijicwhuxa = (i = xgyavzlnbfv).inRange.apply(i, [wibibwihgvl].concat(ltnbgorqvay(qryokxgjqcr.inRange)));
      };
      return i;
    }(function () {
      var t = 63;
      function n(t, n) {
        return hg(t, n - 252);
      }
      var e = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
      function r(t, n) {
        return vg(n, t - 634);
      }
      var i = arguments[o(-71, -318) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : "";
      if (!this[r(507, 758) + r(821, Zv) + "eenCa" + r(342, 89)](e)) {
        this[n(_v, 674) + "r"][o(542, 368)]("[captureSc" + r(97, 283) + o($v, 353) + "幕授权失败！");
        return null;
      }
      this[r(td, 76) + "r"].log("[capt" + r(242, 645) + n(nd, 220) + ": Screen image capture in prog" + r(1051, 1136) + "..");
      this.$emit(r(392, ed) + r(871, 672) + "eenBefore");
      var u = i ? captureScreen(i) : captureScreen();
      function o(n, e) {
        return vg(n, e - t);
      }
      this[n(551, rd)](n(ud, 515) + "reScr" + (fg(1189, od - 284) + "ne"));
      return u;
    })
  }, {
    key: "saveScreen" + hg(375, f),
    value: function (t) {
      function e(t, n) {
        return hg(t, n - 269);
      }
      function r(t, n) {
        return lg(n, t - 278);
      }
      if ("NqINm" !== vg(464, 764 - Gv)) {
        var i = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : e(395, 683) + e(1357, 1072) + lg(1410, Qv - 635) + "s/";
        n.isString(t) ? t = t : t = "scree" + r(1095, 1215) + "-" + Date[e(93, 244)]();
        var u = "".concat(i).concat(t, ".png");
        return this[e(102, Lv) + "reScr" + r(Hv, Xv)](!0, u);
      }
      vxqvzqusgdo[yyyνjxsakgw - 1] = teknxzogzye[apmvrvjiwdf];
    }
  }, {
    key: "captureScreenBa" + lg(h, 891),
    value: function () {
      var t,
        n,
        e,
        r,
        i,
        u,
        o,
        a,
        s = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "png",
        c = arguments[t = -409, n = -302, vg(n, t - -28) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : 80;
      return images["toBas" + (o = Jv, a = 1579, fg(a, o - 203))](this[i = -364, u = 98, fg(i, u - -651) + "reScr" + (e = 1249, r = 1148, hg(e, r - 384))](), s, c);
    }
  }, {
    key: vg(-613, -465) + "iveImage",
    value: function (t) {
      function n(t, n) {
        return fg(t, n - -217);
      }
      return !(null == t || !t[n(624, 896) + "le"] || null == t || !t["getWi" + n(999, 868)]);
    }
  }, {
    key: lg(1278, v) + fg(d, p) + hg(1252, 792),
    value: function (t) {
      function n(t, n) {
        return hg(n, t - 632);
      }
      function e(t, n) {
        return lg(t, n - -799);
      }
      function r(t, n) {
        return vg(t, n - 1085);
      }
      if (!this["isNativeIm" + r(1741, 1288)](t)) {
        if ("LkRrb" === r(Vv, 550)) {
          this[e(483, 291) + "r"][n(934, 795)]("[recy" + n(Yv, Wv) + r(Kv, 1106) + r(1505, 1359) + ".");
          return !1;
        }
        fMheczcuvhr[e(429, 311)](xPeydiiwdhb(eNjuvrnylfx[r(1112, 1022)]) || 0);
      }
    }
  }, {
    key: "makeI" + lg(g, 1278),
    value: function (t) {
      if (!t) {
        return !1;
      }
      function e(t, n) {
        return lg(t, n - -958);
      }
      if (isNativeImage(t)) {
        return t;
      }
      if (n.isString(t)) {
        return /^(http|https|ftp):\/\//[e(Uv, 331)](t) ? "bVwmW" !== e(-164, -198) ? this.$wait(hSkcscdνvup, xVfxlkνduwv) : images[e(-755, -300)](t) : /\.(png|jpg|jpeg|gif)$/[e(193, 331)](t) ? images.read(t) : images["fromB" + (r = 197, i = -5, fg(r, i - -661))](t);
      }
      var r, i;
      return !1;
    }
  }, {
    key: vg(36, 227) + "Grayscale",
    value: function (t) {
      function n(t, n) {
        return vg(t, n - -63);
      }
      t = this[n(-200, -515) + "mage"](t);
      return images["grays" + n(-742, -557)](t);
    }
  }, {
    key: "image" + hg(867, 760) + "hold",
    value: function (t) {
      var n = arguments[u(299, 529) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : 100,
        e = arguments[i(1440, 1005) + "h"] > 2 && 0 !== arguments[2] ? arguments[2] : 255,
        r = arguments.length > 3 && 0 !== arguments[3] ? arguments[3] : "BINARY";
      function i(t, n) {
        return lg(n, t - 648);
      }
      function u(t, n) {
        return hg(n, t - 175);
      }
      t = this["makeI" + u(785, 670)](t);
      return images[i(1307, 813) + i(1485, 1953)](t, n, e, r);
    }
  }, {
    key: lg(1457, y) + "InRange",
    value: function (t) {
      function n(t, n) {
        return lg(n, t - -439);
      }
      function e(t, n) {
        return lg(n, t - -994);
      }
      if ("QoSii" === e(jv, 373)) {
        var r = arguments[e(-202, -49) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : e(428, 190) + "00",
          i = arguments[u = 727, o = qv, fg(u, o - -378) + "h"] > 2 && 0 !== arguments[2] ? arguments[2] : lg(649, 852 - -192) + "22";
        t = this[n(Fv, 310) + e(284, 658)](t);
        return images[n(355, 86) + "ge"](t, r, i);
      }
      var u, o;
      Bouznpvazuw = !0;
    }
  }, {
    key: lg(1346, m) + fg(452, 824) + "val",
    value: function (t) {
      var n = 652,
        e = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : r(1770, 1409) + "88";
      function r(t, e) {
        return lg(t, e - n);
      }
      var i = arguments[r(1923, Nv) + "h"] > 2 && 0 !== arguments[2] ? arguments[2] : 16;
      t = this[r(1496, 1373) + "mage"](t);
      return images.interval(t, e, i);
    }
  }, {
    key: "findI" + hg(k, x),
    value: function (t) {
      var e,
        r = this,
        i = arguments[u(1589, 1108) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
      function u(t, n) {
        return hg(t, n - 984);
      }
      var o = arguments.length > 2 ? arguments[2] : 0;
      i = n._extend({
        threshold: .7
      }, i);
      var a = !n.isString(t) && (null === (e = t) || 0 === e ? 0 : e.getWidth),
        s = i.max > 1;
      function c(t, n) {
        return fg(t, n - -332);
      }
      a ? t = t : t = images["fromB" + d(Mv, 335)](t);
      o = o || this["captu" + u(1517, 1726) + "een"]();
      if (n.isFunction(i[v(1638, 1469) + "Transform"])) {
        var l = Yt(i["image" + d(Bv, 526) + c(787, 720)](t, o), 2);
        t = l[0];
        o = l[1];
      }
      var f = images,
        h = s ? f["matchTempl" + v(Rv, 1534)](o, t, i) : f.findImage(o, t, i);
      function v(t, n) {
        return hg(n, t - Pv);
      }
      function d(t, n) {
        return fg(n, t - 50);
      }
      !a && threads[v(1662, 2066)](function () {
        var n;
        function e(t, n) {
          return u(t, n - -61);
        }
        r.logger[e(zv, 1225)](e(1198, Tv) + "Image]: te" + v(56 - -1326, Ov) + (c(Dv, 1074 - 144) + "ycle..."));
        null === (n = t) || 0 === n || n.recycle();
      });
      return h;
    }
  }, {
    key: lg(1361, 1014) + "ultImage",
    value: function (t) {
      var n,
        e,
        r = arguments[n = -414, e = -673, vg(e, n - -33) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
      var i = arguments.length > 2 ? arguments[2] : 0;
      return this.findImage(t, Object.assign({
        max: 5
      }, r), i);
    }
  }, {
    key: "findImageSync",
    value: function (t) {
      i(Ev, 136);
      var n,
        e,
        r = this[i(-91, Sv) + (n = 1908, e = 1511, fg(e, n - 680)) + "een"]();
      function i(t, n) {
        return fg(t, n - -474);
      }
      t && t(r);
      r.recycle();
      return !0;
    }
  }, {
    key: "getImageBase64",
    value: function (t) {
      function n(t, n) {
        return vg(n, t - 1402);
      }
      return files.isFile(t) ? "data:image" + n(Cv, 1165) + "base64," + images.toBase64(images[n(995, 1266)](t)) : null;
    }
  }, {
    key: hg(831, 611) + "olor",
    value: function (t) {
      function n(n) {
        return t.apply(this, arguments);
      }
      n.toString = function () {
        return t.toString();
      };
      return n;
    }(function (t) {
      function n(t, n) {
        return lg(t, n - -356);
      }
      var e = arguments[n(Av, wv) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
      return findColor(this[n(442, 575) + "reScr" + n(Iv, 1076)](), t, e);
    })
  }, {
    key: lg(1147, 1014) + vg(178, 164) + "olors",
    value: function (t) {
      var n = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : [];
      function e(t, n) {
        return hg(n, t - 412);
      }
      var r = arguments.length > 2 && 0 !== arguments[2] ? arguments[2] : {};
      return images[e(758, 1034) + "ultiC" + e(1228, 1380)](this["captu" + e(1154, 823) + "een"](), t, n, r);
    }
  }, {
    key: "paddl" + lg(1309, 1488) + fg(615, 775),
    value: function () {
      if (!global.paddle || On) {
        return !0;
      }
      var t, n, e, r, i, u;
      $ocr[i = 1804, u = xv, lg(u, i - 285) + (e = 2074, r = 2237, vg(r, e - 1755)) + "del"]({
        useV4: !!this[t = bv, n = 191, lg(n, t - -781) + "UseV4"]
      });
      On = !0;
      return !0;
    }
  }, {
    key: "paddleOCR",
    value: function (t) {
      var n = 411;
      function e(t, n) {
        return hg(n, t - 740);
      }
      function r(t, n) {
        return vg(n, t - 886);
      }
      function i(t, n) {
        return fg(t, n - -671);
      }
      var u,
        o,
        a = arguments;
      !global[i(-62, cv) + "e"] && !On && ($ocr["initW" + i(245, 639) + i(169, 269)]({
        useV4: !!this[i(647, lv) + r(481, 155)]
      }), On = !0);
      this[r(fv, 665) + "r"].log(i(203, 194) + e(1571, 1186) + i(-237, -73) + r(hv, vv) + "CR...");
      t = t || this[e(1003, 644) + e(1482, 1883) + e(dv, 1947)]();
      for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) c[l - 1] = a[l];
      return global.paddle ? (u = paddle).ocr.apply(u, [t][r(pv, gv) + "t"](c)) : (o = $ocr).detect[r(446, 507)](o, [t][r(yv, 855) + "t"](c))[r(919, 1276)](function (t) {
        function e(t, e) {
          return r(e - n, t);
        }
        return {
          bounds: t.bounds,
          confidence: t[e(mv, kv) + "dence"],
          text: t.label,
          words: t.words,
          location: t[a = 1483, s = 1523, i(a, s - 965) + (u = -359, o = -581, i(o, u - -215)) + "n"](),
          elements: t["getEl" + e(1102, 960) + "s"]()
        };
        var u, o, a, s;
      });
    }
  }, {
    key: fg(613, 516) + "tOCR",
    value: function (t) {
      var n,
        e,
        r,
        i,
        u,
        o = 893,
        a = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : "zh";
      function s(t, n) {
        return hg(t, n - 261);
      }
      this[e = 1252, r = 958, vg(e, r - 1041) + "r"].log(s(uv, 750) + "itOCR]: St" + s(ov, av) + "CR...");
      t = t || this[i = sv, u = 1302, fg(u, i - o) + "reScreen"]();
      return (null === (n = gmlkit.ocr(t, a)) || 0 === n ? 0 : n.getChildren()) || [];
    }
  }, {
    key: "findB" + vg(-579, -434),
    value: function () {
      var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "",
        e = arguments[k(-317, 25) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
      if (!t) {
        this[k(-19, 247) + "r"].warn("搜索关键字不能为空：", t);
        return !1;
      }
      var r = n.isFunction(t),
        i = r ? t[k(104, -309)] || "Funct" + x(-4, -35) : t[k(-405, -241) + A(586, 911)](),
        u = (A(783, Sh) + m(Mh, 657) + x(102, -233)).concat(i, "]-耗时"),
        o = Date[m(484, 290)]();
      e = n._extend({
        ocrArgs: []
      }, e);
      var a,
        s,
        l,
        f,
        h,
        v,
        d,
        p,
        g = this["captu" + x(705, Bh) + m(1273, 1709)]();
      if (n.isPlainObject(e[k(-231, -701)])) {
        var y = e.clip || {};
        g = images[k(-231, 83)](g, y.x, y.y, y.w, y.h);
      }
      n.isArray(e[x(318, 563) + "e"]) && (g = images[m(Rh, zh) + "e"](g, e.resize));
      e[k(202, Th)] > 0 && e.scale <= 1 && (g = images[m(1152, 1131)](g, e[k(Oh, -150)], e[m(1152, 1251)]));
      e[m(1186, 752) + "e"] > 0 && (g = images.rotate(g, e.rotate));
      e[k(-453, -205) + A(118, 518)] && (g = images["grays" + m(520, Eh)](g));
      if (n.isArray(e["thres" + x(Dh, Ph)])) {
        g = (a = images)[k(-450, -104) + x(132, 610)].apply(a, [g][k(-66, Nh) + "t"](c(e[m(500, jh) + "hold"])));
      }
      if (n.isArray(e["adaptiveTh" + A(54, 469) + "ld"])) {
        g = (s = images)["adaptiveTh" + m(471, 796) + "ld"][k(-376, -68)](s, [g].concat(c(e[x(681, 300) + A(950, 994) + "reshold"])));
      }
      if (n.isArray(e.cvtColor)) {
        g = (l = images)[m(qh, Fh) + x(Uh, 348)].apply(l, [g][m(884, Vh) + "t"](c(e["cvtCo" + x(443, 77)])));
      }
      if (n.isArray(e.inRange)) {
        g = (f = images)[A(814, Yh) + "ge"][x(28, -189)](f, [g][A(904, 882) + "t"](c(e.inRange)));
      }
      if (n.isArray(e.interval)) {
        g = (h = images).interval.apply(h, [g][k(-66, -551) + "t"](c(e["inter" + k(-346, -411)])));
      }
      function m(t, n) {
        return lg(n, t - -159);
      }
      if (n.isArray(e[A(1528, Wh)])) {
        g = (v = images).blur[x(28, -385)](v, [g][x(338, 349) + "t"](c(e[k(Kh, 233)])));
      }
      function k(t, n) {
        return lg(n, t - -1109);
      }
      if (n.isArray(e[m(Jh, 1411) + "nBlur"])) {
        g = (d = images)[x(513, Qh) + "nBlur"][A(512, 572)](d, [g][m(Lh, 1317) + "t"](c(e[k(109, -195) + A(Hh, 523)])));
      }
      if (n.isArray(e.gaussianBlur)) {
        g = (p = images)[x(792, Xh) + "ianBlur"].apply(p, [g][A(609, Gh) + "t"](c(e["gauss" + A(891, 1361) + "ur"])));
      }
      function x(t, n) {
        return hg(n, t - -37);
      }
      if (n.isFunction(e.transform)) {
        g = e["trans" + A(702, Zh)](g);
      }
      var b = this[A(659, 912) + k(-221, -454)][A(_h, $h)](this, [g].concat(c(e.ocrArgs)));
      this.logger[x(tv, 511)]("".concat(u, ": ")[k(-66, 385) + "t"](parseInt(Date[k(-466, -407)]() - o), "ms"));
      if (!n.isArray(b) && !b.length) {
        this[x(385, -17) + "r"].log(x(206, 676) + "ByOCR" + k(-183, nv) + m(588, 361) + k(-338, -752));
        return !1;
      }
      e.debug && this.logger[m(811, 686)](x(100, 500) + "esult]: ", b);
      if (e["isRet" + m(ev, 1034)]) {
        return b;
      }
      function A(t, n) {
        return fg(t, n - 21);
      }
      for (var w = n.isString(t), I = 0; I < b[m(633, 1013) + "h"]; I++) {
        var C,
          E = b[I];
        if (r && t(E, e)) {
          return E;
        }
        if (w ? (null == E ? 0 : E.text) === t : (null == E || null === (C = E.text) || 0 === C ? 0 : C[m(rv, 938) + "h"](t)) >= 0) {
          return E;
        }
      }
      this[A(iv, Hh) + "r"].log(("[find" + A(1013, 909) + "]: “").concat(i, A(1169, 1241) + A(129, 611) + ".."));
      return !1;
    }
  }, {
    key: lg(1449, 1139) + "ByOCR",
    value: function () {
      var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "",
        n = arguments[e(-293, 132) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
      function e(t, n) {
        return vg(t, n - Ch);
      }
      function r(t, n) {
        return hg(t, n - -36);
      }
      var i,
        u,
        o = this[e(-317, Ah) + (i = -344, u = -694, lg(u, i - -1083))](t, n);
      function a(t, n) {
        return fg(n, t - 320);
      }
      if (!o || !o.bounds) {
        return !1;
      }
      this[r(255, 386) + "r"][a(1108, 1548)]("[clickByOCR]: "[a(1181, wh) + "t"](t, " 屏幕坐标点击中..."));
      return this[r(289, Ih)](o.bounds.left, o.bounds.top, o.bounds[r(467, 51)]() || 0, o[a(1513, 1017) + "s"].height() || 0);
    }
  }, {
    key: "waitForCli" + lg(b, 996) + "CR",
    value: function () {
      function t(t, n) {
        return fg(n, t - -719);
      }
      function e(t, n) {
        return vg(t, n - 1833);
      }
      function r(t, n) {
        return vg(t, n - 392);
      }
      if ("LFTYV" === r(91, dh)) {
        var i = this,
          u = arguments[r(-146, ph) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "",
          o = arguments[e(1313, 1452) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
        o = n._extend({
          turnFunc: function () {
            return i.findByOCR(u, o);
          }
        }, o);
        if (!this["waitForSel" + r(gh, 653)](id(t(-167, -1) + e(1067, 1348) + e(1407, yh) + "OCR]"), o)) {
          if (o["takeS" + t(545, 563) + t(-113, -544)]) {
            try {
              this["takeS" + t(mh, kh) + r(-340, xh)]();
            } catch (t) {
              this[r(346, 309) + "r"].warn("takeScreenshot Error:" + t.message);
            }
            this["sleepByRan" + (a = 349, s = -138, lg(s, a - -397))](6e3, 8e3);
          }
          return !1;
        }
        return this[e(bh, 1799) + r(110, 289)](u, o);
      }
      return ouviqrkrueb;
      var a, s;
    }
  }, {
    key: lg(640, 1077) + "hread",
    value: function () {
      return n.isUIThread();
    }
  }, {
    key: fg(356, A) + fg(w, I) + "ed",
    value: function () {
      var t,
        n,
        e,
        r,
        i = !(arguments.length > 0 && 0 !== arguments[0]) || arguments[0];
      return this[e = vh, r = 2182, vg(r, e - 1504) + (t = 387, n = 133, fg(t, n - -820)) + "d"] = !!i;
    }
  }, {
    key: fg(1649, 1254),
    value: function () {
      function t(t, n) {
        return vg(n, t - 336);
      }
      function n(t, n) {
        return hg(n, t - 959);
      }
      var e = arguments[r(-91, -303) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 0;
      function r(t, n) {
        return hg(t, n - -427);
      }
      var i = arguments[r(-454, -303) + "h"] > 1 ? arguments[1] : 0;
      if (this[n(1681, 1636) + "Paused"]) {
        for (this[u(ah, 910) + "r"].info(u(1258, sh) + r(-57, -105) + t(743, 694) + "执行...");;) {
          if (!this["isApp" + n(1426, ch) + "d"]) {
            this[r(131, -5) + "r"][t(540, 347)]("[sleep]: 脚本“恢复”执行...");
            break;
          }
          this[u(lh, 1361) + "ior"].sleep(1e3);
        }
      }
      function u(t, n) {
        return lg(t, n - -180);
      }
      i && (e = this.getRandom(e, i));
      return e <= 0 || (this.logger.log((n(fh, 1716) + n(1815, 1735) + "or ")[r(-35, -52) + "t"](e, " ms...")), this[u(hh, 1361) + u(903, 1001)].sleep(e));
    }
  }, {
    key: vg(642, 263) + "ToShort",
    value: function () {
      function t(t, n) {
        return hg(n, t - 1099);
      }
      return this[t(1867, 1971)](this[t(1308, 1128) + (n = 644, e = 245, lg(e, n - -304))]);
      var n, e;
    }
  }, {
    key: "sleep" + hg(514, 887) + "ium",
    value: function () {
      return this.sleepByRandom(2e3, 3e3);
    }
  }, {
    key: fg(845, 1254) + "ToLong",
    value: function () {
      return this.sleep(this["LONG_" + (t = oh, n = 1056, hg(n, t - 473))]);
      var t, n;
    }
  }, {
    key: fg(1387, 1254) + hg(C, E) + "dom",
    value: function () {
      var t = arguments[i(547, 344) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 0;
      var n,
        e,
        r = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : 0;
      function i(t, n) {
        return lg(n, t - -245);
      }
      return this[n = 1004, e = 1423, lg(n, e - -13)](this["getRa" + i(ih, uh)](t, r));
    }
  }, {
    key: lg(1082, 735),
    value: function () {
      var t = arguments[o(984, eh) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
      var n,
        e,
        r,
        i,
        u = arguments[n = 1435, e = 1499, fg(n, e - 889) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : "";
      function o(t, n) {
        return fg(t, n - 274);
      }
      return this[o(2016, 1633) + "ior"][r = 1725, i = rh, vg(r, i - 1760)](t, u);
    }
  }, {
    key: lg(645, 880) + lg(1562, S),
    value: function (t, n) {
      return this[e = -231, r = -76, lg(r, e - -966)](t, n);
      var e, r;
    }
  }, {
    key: "confirm",
    value: function () {
      function t(t, n) {
        return lg(t, n - 268);
      }
      var n,
        e,
        r = arguments[t(855, 1060) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "",
        i = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : "";
      return this[t(1557, nh) + (n = 929, e = 682, lg(e, n - -252))].confirm(r, i);
    }
  }, {
    key: lg(751, 645) + "onfirm",
    value: function (t, n) {
      return this.confirm(t, n);
    }
  }, {
    key: "toast",
    value: function () {
      var t,
        n,
        e,
        r,
        i = 1293,
        u = arguments[t = 1232, n = $f, vg(t, n - 1639) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
      function o(t, n) {
        return lg(n, t - -128);
      }
      return this[o(th, 1456) + o(1053, 563)][e = 1006, r = 747, vg(r, e - i)](u);
    }
  }, {
    key: fg(1211, 1016) + "oast",
    value: function (t) {
      return this[n = 943, e = 813, hg(e, n - 725)](t);
      var n, e;
    }
  }, {
    key: "getRa" + hg(405, -61),
    value: function () {
      var t,
        e,
        r,
        i,
        u = arguments[r = -79, i = 176, fg(i, r - -689) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 0,
        o = arguments[t = 306, e = _f, hg(t, e - 570) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : 100;
      return n.getRandom(u, o);
    }
  }, {
    key: "random",
    value: function () {
      var t,
        n,
        e,
        r,
        i = arguments[t = 1210, n = 725, hg(n, t - 1086) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 0,
        u = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : 100;
      return this["getRa" + (e = -457, r = -509, lg(r, e - -1064))](i, u);
    }
  }, {
    key: vg(-91, -461) + vg(-763, -430) + fg(M, 1143),
    value: function () {
      var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 0,
        n = arguments[e(Jf, 1222) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : 100;
      function e(t, n) {
        return lg(t, n - 430);
      }
      function r(t, n) {
        return fg(t, n - -1046);
      }
      if (t > n) {
        this.logger[a(2405, 1936)]("[getProbability]: The pro" + a(1596, 1872) + "ity c" + a(Qf, 1360) + " exceed the maximum " + a(Lf, Hf) + "!");
        return !0;
      }
      var i,
        u,
        o = this[e(Xf, 1430) + "ndom"](1, n);
      function a(t, n) {
        return lg(t, n - 458);
      }
      this.logger.log((r(-261, -333) + r(35, 308) + "ility]: 概率0-").concat(t, e(2278, Gf) + "子")[i = 256, u = Zf, vg(u, i - 386) + "t"](o, "%"));
      return o <= t;
    }
  }, {
    key: "exists",
    value: function (t) {
      var e;
      function r(t, n) {
        return fg(t, n - 736);
      }
      function i(t, n) {
        return lg(t, n - -987);
      }
      var u,
        o,
        a = arguments[s(Uf, 540) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : "text";
      if (!t || !n.isFunction(n.UISelectors[a])) {
        if (i(41, 29) !== i(-606, -261)) {
          this.logger[i(841, Wf)](r(Kf, 1838) + s(865, 461) + r(1463, 1464) + " ", t, a);
          return !1;
        }
        this["sleepByRan" + s(389, 494)](500, 1e3);
        if (this[s(679, 887) + s(Vf, 964) + r(2329, Yf)](hKνvνpkeeiq("确定"))) {
          this.logger[r(1667, 1524)]("[cleanAppC" + i(-58, -235) + ": 清除全部数据成功！");
          this.back(1e3);
          this[u = 2484, o = 2087, lg(u, o - 647)](2e3);
          return !0;
        }
      }
      function s(t, n) {
        return fg(t, n - -70);
      }
      return null === (e = n.UISelectors[a](t)) || 0 === e ? 0 : e.exists();
    }
  }, {
    key: vg(-358, 133) + lg(611, 894),
    value: function (t) {
      return this.exists(t, "text");
    }
  }, {
    key: "descExists",
    value: function (t) {
      return this.exists(t, lg(2321, qf - Ff));
    }
  }, {
    key: fg(B, 1157) + "leExi" + hg(846, 618),
    value: function (t) {
      function n(t, n) {
        return hg(t, n - 1215);
      }
      var e;
      return !(null == t || null === (e = t[n(Nf, 1886) + n(759, jf) + "ser"]()) || 0 === e || !e.exists());
    }
  }, {
    key: "idExi" + fg(z, 1104),
    value: function (t) {
      function n(t, n) {
        return fg(n, t - -166);
      }
      function e(t, n) {
        return vg(n, t - 983);
      }
      if ("NlKVo" === n(273, 335)) {
        return this[e(781, Pf) + "s"](t, "id");
      }
      var r,
        i,
        u = arguments[n(444, 914) + "h"] > 0 && arguments[0] !== Lνebdfslkau ? arguments[0] : "",
        o = arguments[e(602, 758) + "h"] > 1 && arguments[1] !== Ygwxfeiqdνu ? arguments[1] : "";
      return this.behavior[r = 1780, i = 2208, lg(i, r - 204) + "rm"](u, o);
    }
  }, {
    key: "isAvailableArea",
    value: function (t, e) {
      if (n.isUndefined(t) || n.isUndefined(e)) {
        this[u(-240, Ef) + "r"].warn(r(604, Sf) + "ailab" + r(1488, Mf) + "a]: x or y" + r(901, 631) + r(Bf, 692) + "ed", t, e);
        return !1;
      }
      function r(t, n) {
        return hg(t, n - 508);
      }
      function i(t, n) {
        return fg(n, t - 181);
      }
      if (!n.isNumber(t) || !n.isNumber(e)) {
        this[u(502, 10) + "r"].warn("[isAv" + i(1133, Rf) + "leAre" + r(905, zf) + u(-7, 469) + " isNotNumber", t, e);
        return !1;
      }
      if (t < 0 || e < 0) {
        this[u(362, 10) + "r"][u(862, Tf)]("[isAvailab" + u(289, 148) + "a]: Path b" + i(941, Of) + (vg(211, Df - 408) + " not be ne") + i(1402, 1540) + "e:", t, e);
        return !1;
      }
      function u(t, n) {
        return fg(t, n - -898);
      }
      return !0;
    }
  }, {
    key: lg(1534, 1139),
    value: function (t, n) {
      function e(t, n) {
        return fg(t, n - -688);
      }
      function r(t, n) {
        return vg(n, t - -73);
      }
      function i(t, n) {
        return vg(n, t - -27);
      }
      function u(t, n) {
        return fg(n, t - 905);
      }
      if ("VTsfS" === e(-530, -200)) {
        var o = arguments[r(-454, -28) + "h"] > 2 && 0 !== arguments[2] ? arguments[2] : 0,
          a = arguments[i(-408, -71) + "h"] > 3 && 0 !== arguments[3] ? arguments[3] : 0;
        if (!this[e(gf, -26) + "ilabl" + r(yf, -324)](t, n)) {
          this[i(-110, 343) + "r"].warn(u(1426, 1187) + i(mf, 188) + "s Not" + e(-461, -6) + r(123, 81) + u(1810, kf) + ": ", t, n);
          return !1;
        }
        var s = t + this[u(1723, 1783) + "ndom"](0, o / 2),
          c = n + this[e(xf, 130) + "ndom"](0, a / 2);
        this[r(-156, bf) + "r"][r(-276, -174)]("[clic" + i(-582, -188), s, c);
        return this.behavior.click(s, c);
      }
      this[u(1813, Af) + "r"].log("[ensu" + u(2269, 2106) + u(2065, 1957) + u(1801, 1706) + u(wf, If) + "，尝试启动中...");
      if (!this[r(178, 467) + "App"](ekpdjnybuuz)) {
        this[r(-156, -395) + "r"].error("[ensu" + e(790, Cf) + "pp]: 启动App失败...");
        return !1;
      }
    }
  }, {
    key: lg(T, 711) + "lick",
    value: function (t, n) {
      var e = arguments.length > 2 && 0 !== arguments[2] ? arguments[2] : 0,
        r = arguments.length > 3 && 0 !== arguments[3] ? arguments[3] : 0;
      if (!this[f(1446, ff) + f(1612, 1380) + l(hf, 1768)](t, n)) {
        this.logger.warn("[longClick]: Is Not " + f(vf, 1396) + "able " + l(df, 873) + " ", t, n);
        return !1;
      }
      var i,
        u,
        o,
        a,
        s = t + this["getRa" + f(613, 837)](0, e / 2),
        c = n + this[i = 1066, u = 1188, vg(u, i - 1239) + l(796, pf)](0, r / 2);
      function l(t, n) {
        return vg(n, t - 1362);
      }
      function f(t, n) {
        return vg(t, n - 1403);
      }
      this[f(831, 1320) + "r"].log(f(696, 926) + "Click]: ", s, c);
      return this["behav" + f(1854, 1411)][o = -112, a = -200, lg(a, o - -823) + "lick"](s, c);
    }
  }, {
    key: fg(288, 721),
    value: function (t, n) {
      var e = 63,
        r = 682,
        i = arguments[u(-135, -301) + "h"] > 2 && 0 !== arguments[2] ? arguments[2] : 1;
      function u(t, n) {
        return lg(n, t - -927);
      }
      function o(t, n) {
        return lg(n, t - r);
      }
      if (!this[a(185, -266) + "ilableArea"](t, n)) {
        this[u(163, -130) + "r"][u(551, 381)]("[press]: Is Not" + o(sf, cf) + o(2051, 1555) + a(-201, -23) + ": ", t, n);
        return !1;
      }
      function a(t, n) {
        return vg(t, n - e);
      }
      this[o(1772, 1992) + "r"][u(43, -280)](lg(553, lf - -598) + "s]: ", t, n, i);
      return this[o(2223, 2376) + o(1863, 1983)].press(t, n, i);
    }
  }, {
    key: "bubbleClick",
    value: function (t) {
      var n, e;
      function r(t, n) {
        return hg(t, n - -278);
      }
      var i = arguments[r(189, -154) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : 10;
      function u(t, n) {
        return hg(t, n - 104);
      }
      this["isUIS" + a(1526, _l) + "or"](t) && (this.logger.log(u(481, $l) + "leClick]: " + o(-170, 162) + "Selec" + a(tf, nf) + "试修正..."), t = t[r(118, 403) + "nce"]());
      if (!t || i <= 0) {
        return !1;
      }
      function o(t, n) {
        return vg(t, n - 408);
      }
      function a(t, n) {
        return lg(t, n - 391);
      }
      return null !== (n = t) && 0 !== n && n.clickable() ? t.click() : (this[a(ef, 1481) + "r"][u(rf, 406)](("bubbl" + u(443, 660) + "k by level ")[r(-38, 97) + "t"](i, o(uf, 450) + "r...")), this[a(of, af) + "eClick"](null === (e = t) || 0 === e ? 0 : e[u(1220, 833) + "t"](), i - 1));
    }
  }, {
    key: vg(263, 127) + fg(319, 492),
    value: function (t) {
      return n.isUIObject(t);
    }
  }, {
    key: fg(680, O) + hg(1228, 931) + "or",
    value: function (t) {
      return n.isUISelector(t);
    }
  }, {
    key: lg(645, 1109) + hg(424, 781) + vg(380, 397),
    value: function (t) {
      return n.isUICollection(t);
    }
  }, {
    key: vg(-174, -419) + "ick",
    value: function (t, e) {
      function r(t, n) {
        return hg(n, t - -252);
      }
      var i = arguments[a(Kl, 1242) + "h"] > 2 && 0 !== arguments[2] ? arguments[2] : {};
      i = n._extend({
        sleep: 100,
        duration: 1,
        width: 0,
        height: 0
      }, i);
      if (!this.isAvailableArea(t, e)) {
        this.logger[r(558, 660)]("[dblclick]: Is Not A" + r(-296, -111) + a(Jl, 1173) + s(717, Ql), t, e);
        return !1;
      }
      var u = this[r(-17, Ll)](t + this[a(Hl, 1450) + "ndom"](-i[s(113, -323)] / 2, i.width / 2), e + this.getRandom(-i.width / 2, i.height / 2), i[s(333, 112) + r(-219, -343)]);
      this[a(1492, 1886)](i[a(1444, 1886)]);
      var o = this[r(-17, -381)](t + this.getRandom(-i[r(-165, -106)] / 2, i.width / 2), e + this[r(80, Xl) + "ndom"](-i.width / 2, i.height / 2), i["durat" + a(693, Gl)]);
      function a(t, n) {
        return hg(t, n - 1118);
      }
      function s(t, n) {
        return hg(n, t - 26);
      }
      this[r(170, Zl) + "r"].log(hg(934, 817 - -69) + "lick]:", t, e);
      return u && o;
    }
  }, {
    key: "multc" + fg(D, 1400),
    value: function (t, e) {
      function r(t, n) {
        return lg(t, n - -149);
      }
      function i(t, n) {
        return fg(t, n - -1035);
      }
      var u = arguments.length > 2 && 0 !== arguments[2] ? arguments[2] : 3,
        o = arguments.length > 3 && 0 !== arguments[3] ? arguments[3] : {};
      o = n._extend({
        sleep: 100,
        duration: 1,
        width: 0,
        height: 0
      }, o);
      if (!this[l(-320, ql) + "ilableArea"](t, e)) {
        this.logger[l(955, 811)]("[multclick]: Is" + l(76, 237) + "Available Area: ", t, e);
        return !1;
      }
      function a(t, n) {
        return vg(n, t - Wl);
      }
      for (var s = 0, c = 0; c < u; c++) {
        this[i(-786, -314)](t + this[r(1247, 851) + r(542, 458)](-o.width / 2, o[l(Fl, Ul)] / 2), e + this["getRa" + i(-261, -610)](-o.width / 2, o.height / 2), o[a(241, 420) + a(-33, 301)]) && s++;
        this[r(940, Vl)](o.sleep);
      }
      function l(t, n) {
        return vg(t, n - 506);
      }
      this.logger.log("[multclick]:", t, e, o[l(Yl, 88)], o[i(-83, -497) + "t"]);
      return s >= u;
    }
  }, {
    key: "click" + hg(831, 548) + "sts",
    value: function (t) {
      function e(t, n) {
        return lg(t, n - 432);
      }
      function r(t, n) {
        return fg(t, n - -635);
      }
      function i(t, n) {
        return hg(n, t - 1233);
      }
      function u(t, n) {
        return lg(n, t - -1224);
      }
      if (u(Sl, 700) !== i(Ml, 1457)) {
        var o,
          a = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {};
        n.isString(t) && (this.logger[u(-254, 140)]("[clic" + u(-15, -198) + r(1020, 745) + i(1855, 1569) + "字符串类型，尝试修正" + i(1238, 840)), t = text(t));
        n.isRegExp(t) && (this.logger[u(-254, 114)]("[clickByExists]" + u(66, 168) + "正则类型，" + i(2148, 2629) + ".."), t = textMatches(t));
        return this.isUIObject(t) ? this[r(69, Bl) + i(1744, Rl) + i(zl, 1170)](t, a) : null !== (o = t) && 0 !== o && o.exists() ? this[e(1887, Tl) + "ByBou" + e(1303, 1127)](t[e(1616, Ol) + e(1551, 1216)](), a) : (this[u(-134, -401) + "r"].log(r(-471, -114) + "kByExists]" + u(-429, -640) + "存在：", t), !1);
      }
      this[r(129, 273) + "r"].error(r(Dl, Pl) + "请重启手机或重新启动无障碍模式！");
      !this[r(-387, 1) + u(372, 778) + "il_count"] && (this["_swip" + u(372, 832) + "il_co" + r(221, 538)] = 0);
      this[e(Nl, 1250) + r(658, 779) + r(485, 571) + "unt"] > 2 && (this[r(470, 554) + "Acces" + i(1515, 1135) + "ity"](), this["killA" + r(548, jl) + r(147, 328)](), Bvobkbwzkku("请重启手机" + i(1412, 1255) + "无障碍模式！"));
      this["_swip" + u(372, 758) + "il_co" + u(131, 213)]++;
      return !1;
    }
  }, {
    key: "clickByCollects",
    value: function (t) {
      function e(t, n) {
        return lg(t, n - 516);
      }
      function r(t, n) {
        return vg(t, n - El);
      }
      var i = !(arguments[r(fl, 225) + "h"] > 1 && 0 !== arguments[1]) || arguments[1];
      n.isArray(t) || this[r(443, hl) + "ollection"](t) || (t = [t][u(1836, 1776) + "r"](Boolean));
      if (!t[e(1405, 1308) + "h"]) {
        this[u(1594, 1383) + "r"].log(r(-286, 136) + r(374, 735) + l(431, vl) + r(dl, 453) + "electors i" + r(pl, 760) + u(1477, gl));
        return !1;
      }
      function u(t, n) {
        return fg(n, t - Cl);
      }
      for (var o = t[u(1296, 939) + "h"], a = 0, s = 0; s < o; s++) {
        var c = t[s];
        if (this[u(1643, 1829) + e(2124, yl) + e(ml, kl)](c)) {
          if (i) {
            return r(151, xl) !== u(1439, 1912) ? qDloνfcuqzj(qJnsszcoumo) : (this[e(1655, 1606) + "r"].log(("[clic" + u(1806, 1376) + l(431, bl) + "s]: click " + e(Al, wl) + e(1082, Il)).concat(c)), !0);
          }
          a++;
        }
      }
      function l(t, n) {
        return lg(n, t - -800);
      }
      return a === o;
    }
  }, {
    key: lg(1293, P) + vg(N, 285) + hg(383, j),
    value: function (t, n) {
      return this.waitForClick(t, n);
    }
  }, {
    key: "waitForClick",
    value: function (t, e) {
      function r(t, n) {
        return vg(n, t - 1528);
      }
      function i(t, n) {
        return lg(t, n - -648);
      }
      n.isNumber(e) && (e = {
        timeout: e
      });
      e = n._extend({
        timeout: this[i(448, 226) + "meout"] || 3e4,
        waitTime: 1e3
      }, e);
      if (!this[i(ul, 569) + u(2129, ol) + "ector"](t, e)) {
        this[r(1445, 1216) + "r"].error("[clickByEx" + r(al, 1640) + r(sl, 1448) + i(271, 601) + r(cl, 1941) + r(1600, 1758) + r(1952, 2078));
        return !1;
      }
      function u(t, n) {
        return fg(t, n - 595);
      }
      e[r(1929, 1552) + "ime"] > 0 && this.sleep(e[o(87, 357) + "ime"]);
      if (e[o(-830, -550) + "eClick"]) {
        return this[r(1022, 779) + u(2135, 1637) + "k"](t, e.level);
      }
      function o(t, n) {
        return lg(t, n - -1217);
      }
      return this[o(397, -78) + i(581, ll) + u(1771, 1699)](t, e);
    }
  }, {
    key: "clickByBounds",
    value: function (t) {
      var e,
        r,
        i = 1283,
        u = arguments[a(300, 488) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
      if (n.isFunction(null === (e = t) || 0 === e ? 0 : e.exists)) {
        if ("WEYyd" === c(498, Kc)) {
          return νbpbwcifrfq();
        }
        t = t[s(1546, 1649) + c(-23, 455)]();
      }
      if (!t) {
        return !1;
      }
      if ((u = n._extend({
        clickable: !0,
        offsetX: 0,
        offsetY: 0,
        press: 0
      }, u)).clickable && null !== (r = t) && 0 !== r && r[s(Jc, 1439) + l(1712, Qc)]()) {
        if (t.click()) {
          this[l(1200, 1461) + "r"][a(1039, 666)]("[clickByBo" + c(1115, Lc) + l(Hc, 1596) + c(1071, 1102) + a(792, 917) + "e.");
          return !0;
        }
        this[c(Xc, 761) + "r"][s(1742, 1778)](a(254, Gc) + l(993, 846) + c(880, 985) + ": clickabl" + c(Gc, 735) + "l!");
      }
      var o = t.bounds();
      function a(t, n) {
        return fg(t, n - -122);
      }
      function s(t, n) {
        return lg(t, n - 300);
      }
      function c(t, n) {
        return fg(t, n - -147);
      }
      function l(t, n) {
        return vg(n, t - i);
      }
      var f = o[c(602, Zc)] + this.getRandom(0, o[s(_c, 1055)]()) + u[s(1629, 1901) + "tX"],
        h = o[c(1095, $c)] + this[c(887, 671) + "ndom"](0, o.height()) + u.offsetY;
      if (n.isFunction(u["setPo" + c(tl, nl)])) {
        var v = u[l(922, 549) + l(1478, el)](f, h, o);
        n.isArray(v) ? (n.isNumber(v[0]) ? f = v[0] : f = f, n.isNumber(v[1]) ? h = v[1] : h = h) : (f = (null == v ? 0 : v[l(rl, il) + "X"]) || (null == v ? 0 : v.x) || f, h = (null == v ? 0 : v.ponitY) || (null == v ? 0 : v.y) || h);
      }
      this.logger[s(1255, 1270)]("[clickByBounds]: ", f, h);
      return u.press > 0 ? this.press(f, h, u.press) : this.click(f, h);
    }
  }, {
    key: "clickBySibling",
    value: function (t) {
      var e,
        r = 811,
        i = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {};
      if (this[c(pc, 396) + h(gc, 1237) + "or"](t)) {
        if ("geqSH" === c(yc, mc)) {
          return Colztuwbνvw;
        }
        t = t[s(1372, kc) + f(-15, 341)]();
      }
      if (!t) {
        return !1;
      }
      i = n._extend({
        offset: 1,
        text: "",
        click: !0,
        callback: null,
        clickConfig: null
      }, n.isNumber(i) ? {
        offset: i
      } : i);
      var u = this[f(440, xc) + "dexInParent"](t);
      if (-1 === u) {
        this.logger.warn(h(773, 341) + "kBySibling" + h(783, 1004) + "dexIn" + h(bc, 440) + f(634, Ac) + c(wc, 454) + "und...");
        return !1;
      }
      if ((u += i[s(1628, 1685) + "t"]) < 0) {
        return "Kwrlb" !== h(796, 513) ? (arguments.length > 0 && arguments[0] !== pLclazicone ? arguments[0] : [])[s(Ic, Cc)](function () {
          return yYgzaolaepc[t = 1168, n = 1511, h(n, t - 608) + "m"]() > .5 ? 1 : -1;
          var t, n;
        }).filter(νYrvvvxltkk) : (this[f(291, 758) + "r"][c(Ec, 1263)]("[clickBySi" + h(365, 794) + "]: in" + h(857, 745) + c(Sc, 587) + s(Mc, 1517) + f(354, 543) + ": ", u), !1);
      }
      var o = null === (e = t) || 0 === e ? 0 : e[s(1445, 1481) + "t"](),
        a = (null == o ? 0 : o.childCount()) || 0;
      if (u >= a) {
        this.logger.warn(h(108, Bc) + f(17, 206) + s(1734, 1240) + "]: indexIn" + f(3, -290) + f(Rc, 857) + c(792, zc) + "2: ", t, u, a);
        return !1;
      }
      function s(t, n) {
        return hg(t, n - 752);
      }
      function c(t, n) {
        return fg(t, n - -33);
      }
      var l = null == o ? 0 : o[s(1345, 1558)](u);
      function f(t, n) {
        return hg(n, t - -131);
      }
      function h(t, n) {
        return vg(t, n - r);
      }
      if (!l) {
        this[c(Tc, 875) + "r"][h(1148, 1116)](c(853, 488) + h(Oc, Dc) + "bling]: clickElem is" + c(Pc, 689) + s(1673, 1449) + "...", l);
        return !1;
      }
      if (n.isFunction(i[c(1361, 865) + "ack"])) {
        if (!(l = i[s(Nc, 1164) + s(1940, 1521)](l, u))) {
          this.logger.warn("[clickBySi" + h(1151, jc) + "]: clickEl" + f(366, 823) + c(295, qc) + s(1973, 1607) + "...", l);
          return !1;
        }
      } else {
        if (i.text) {
          var v,
            d = null === (v = l) || 0 === v ? 0 : v[h(789, Fc)]();
          if (i[s(1045, 1349)] !== d) {
            this[c(657, 875) + "r"][s(Uc, 1562)](f(-96, -70) + h(Vc, 454) + "bling" + s(1516, 1665) + c(Yc, 664) + h(1308, 912) + s(1070, 802) + " Not Equal" + f(-126, 62), i[f(466, 758)], d);
            return !1;
          }
        }
      }
      if (!i.click) {
        return !0;
      }
      if (n.isFunction(i.beforeFunc)) {
        i.beforeFunc(l);
      }
      var p = this["click" + s(1125, Wc) + f(487, 413)](l, i["click" + f(259, 682) + "g"]);
      n.isFunction(i.afterFunc) && i.afterFunc(p);
      return p;
    }
  }, {
    key: fg(q, F) + fg(769, 925) + "Parent",
    value: function (t) {
      var n;
      this[u(oc, 1162) + "elector"](t) && (t = t["findO" + u(ac, 1417)]());
      if (!t) {
        return -1;
      }
      function e(t, n) {
        return hg(n, t - -306);
      }
      var r = null === (n = t) || 0 === n ? 0 : n[u(sc, cc) + "InParent"]();
      function i(t, n) {
        return lg(t, n - -457);
      }
      function u(t, n) {
        return vg(n, t - 1892);
      }
      if (-1 === r) {
        var o,
          a = t.bounds(),
          s = className(t.className())[i(lc, 682) + u(2321, 2481)](t[u(1858, fc) + "able"]()).enabled(t[e(52, 290) + "ed"]())[u(1366, 1e3)](t[u(1366, 1431)]())[e(401, 795) + "s"](a.left, a.top, a.right, a[u(1938, 2172) + "m"]);
        if (1 !== (null == s ? 0 : s[i(16, 206)]().length)) {
          this.logger.warn(u(1767, 1958) + i(hc, 540) + "nParent]: " + i(845, 1087) + vg(1247, 915 - 1212) + u(vc, 1390));
          return r;
        }
        r = (null === (o = s[e(dc, -89) + "nce"]()) || 0 === o ? 0 : o[i(556, 719) + u(1508, 1899) + "ent"]()) || -1;
      }
      return r;
    }
  }, {
    key: "longClickB" + vg(U, V) + "ds",
    value: function (t) {
      var e,
        r,
        i = 1598;
      function u(t, n) {
        return fg(t, n - -421);
      }
      n.isFunction(null === (e = t) || 0 === e ? 0 : e.exists) && (this.logger[u(557, Xs)]("[longClickByBou" + o(931, 727) + u(1136, 839) + "ent is UIS" + c(Gs, 772) + c(179, Zs)), t = t[u(736, 746) + u(_s, 181)]());
      if (!t) {
        return !1;
      }
      function o(t, n) {
        return hg(n, t - 510);
      }
      if (null !== (r = t) && 0 !== r && r[u(-182, 108) + "lickable"]()) {
        if (t[u(29, 108) + f(2007, 1906)]()) {
          this[c(613, 263) + "r"].log("[long" + f(1501, $s) + o(1021, 990) + "nds]:" + u(tc, 600) + u(902, nc) + o(836, 1188) + ".");
          return !0;
        }
        this[o(932, ec) + "r"].warn(c(10, -131) + c(-117, rc) + c(ic, 352) + f(1514, 1052) + " clic" + o(941, 715) + " fail!");
      }
      var a = t[f(1800, 1973) + "s"](),
        s = a[o(788, 539)] + this.getRandom(0, a.width());
      function c(t, n) {
        return fg(t, n - -645);
      }
      var l = a.top + this[c(290, 173) + "ndom"](0, a[u(-314, 117) + "t"]());
      function f(t, n) {
        return vg(n, t - i);
      }
      this.logger[o(812, uc)](u(538, 93) + o(918, 760) + o(1021, 964) + u(409, 486) + " ", s, l);
      return this.longClick(s, l);
    }
  }, {
    key: lg(972, 754) + "ickByBounds",
    value: function (t) {
      var n,
        e = 503;
      function r(t, n) {
        return fg(t, n - 773);
      }
      function i(t, n) {
        return vg(n, t - 786);
      }
      function u(t, n) {
        return hg(t, n - e);
      }
      function o(t, n) {
        return vg(t, n - 313);
      }
      if ("niabs" === u(487, 755)) {
        var a = arguments[i(405, Ks) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
        this[i(224, -110) + "elector"](t) && (t = t.findOnce());
        if (!t) {
          return !1;
        }
        var s = t[r(1860, 1966) + "s"](),
          c = s[i(559, 733)] + this[o(-229, 140) + "ndom"](0, s.width()),
          l = s[i(956, 883)] + this[o(242, 140) + "ndom"](0, s[o(-330, -140) + "t"]());
        this[r(Js, 1681) + "r"].log("[dblclickByBoun" + r(1802, 1788), c, l);
        return this.dblclick(c, l, a);
      }
      zfxrxisνnpj.logger[r(Qs, 1561)]("[find" + r(1899, 1662) + "]: templat" + o(510, 584) + u(Ls, Hs) + "..");
      null === (n = dcywzqazppu) || 0 === n || n.recycle();
    }
  }, {
    key: "click" + lg(Y, 1540) + "ector",
    value: function (t) {
      function n(t, n) {
        return vg(t, n - Ws);
      }
      function e(t, n) {
        return lg(t, n - 251);
      }
      var r,
        i = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {},
        u = !1;
      function o(t, n) {
        return vg(n, t - -59);
      }
      if (null != t && t.exists()) {
        if (!(null === (r = t.findOnce()) || 0 === r ? u = 0 : u = r.click())) {
          "wedTF" !== n(326, -7) ? (this[e(qs, Fs) + "r"].warn(n(-669, -408) + "kBySe" + n(-82, -483) + "r]: N" + n(729, 364) + o(278, 35) + "k Fai" + o(-363, -456)), !(u = this[o(146, -270) + "lToCl" + o(Us, 492)](t, i)) && this[e(1197, 1341) + "r"][o(246, 603)]("[clic" + o(-101, Vs) + "lecto" + e(1949, 1701) + "croll" + a(1441, 1576) + n(70, 392) + a(1482, 1542) + a(2536, 2171) + ".")) : Kxlvjdcfrax = Gbqxfhjsomq[e(1767, 1600) + o(-448, -724)]();
        }
      }
      function a(t, n) {
        return fg(t, n - Ys);
      }
      return u;
    }
  }, {
    key: vg(-493, -34) + "ByImage",
    value: function (t) {
      var e = 1931,
        r = 1583,
        i = 1515,
        u = 841,
        o = 226,
        a = this,
        s = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {},
        c = arguments.length > 2 ? arguments[2] : 0,
        l = !1;
      if (!t) {
        this[d(1219, Bs) + "r"].error(f(914, 1131) + d(1416, 1893) + "age]:" + x(1860, 2053) + d(1303, Rs));
        return l;
      }
      if (n.isArray(t)) {
        c = c || this[x(1905, 1590) + "reScreen"]();
        return t.filter(function (t) {
          return !!a[n = o, e = -232, h(n - -753, e) + "ByImage"](t, s, c);
          var n, e;
        })[h(632, 682) + "h"];
      }
      function f(t, n) {
        return fg(t, n - js);
      }
      function h(t, n) {
        return lg(n, t - -160);
      }
      var v = s[d(zs, 573)] > 1;
      function d(t, n) {
        return vg(n, t - 1302);
      }
      var p,
        g,
        y = !(null == t || !t[h(953, Ts) + h(1107, 929)]),
        m = y ? t : images[h(1443, 1774) + h(678, 378)](t),
        k = this["findI" + d(Os, 916)](m, s, c);
      n.isFunction(s.transform) && (k = s["trans" + x(Ds, 1893)](k));
      if (v) {
        null === (p = k) || 0 === p || null === (g = p[f(1603, 1384) + "es"][0]) || 0 === g ? k = 0 : k = g.point;
      }
      function x(t, n) {
        return fg(t, n - u);
      }
      k ? (this[f(Ps, 1518) + "r"][f(1758, 1398)]((d(832, 944) + "kByImage]: 屏幕找图" + h(1435, 1208))[x(1946, Ns) + "t"](k)), l = this[x(Os, 1798)](k.x, k.y, m[h(953, 1280) + "dth"]() || 0, m.getHeight() || 0)) : (this[h(930, 1301) + "r"][x(1798, 1629)](("[clickByImage]:" + h(1393, 1377) + x(1856, 1977)).concat(k)), l = !1);
      !y && threads.start(function () {
        function t(t, n) {
          return d(t - -151, n);
        }
        function n(t, n) {
          return f(n, t - -1286);
        }
        a[n(232, 96) + "r"][n(112, 437)]("[clic" + h(62 - -1065, -100) + t(1473, 1944) + t(1459, 1450) + "late " + (f(e, r - -140) + "le..."));
        null == m || m[t(1273, i) + "le"]();
      });
      return l;
    }
  }, {
    key: "switc" + fg(369, 758) + "xt",
    value: function () {
      var t,
        n,
        e,
        r,
        i,
        u = 196,
        o = 334,
        a = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : {},
        s = a[m(-42, 136) + k(441, 121) + "ndomMin"] || this["DURAT" + m(ns, 443) + "ANDOM"][0],
        c = a[m(es, 136) + k(rs, is) + d(1191, us) + "ax"] || this[m(-186, -216) + d(1122, 1167) + g(240, -52)][1],
        l = a["timel" + d(os, 1462) + "n"] || this["TIMEL" + d(907, 840)][0],
        f = a["timel" + d(as, 553) + "x"] || this.TIMELINE[1],
        h = a[g(ss, 230) + "ion"] || this[d(840, 679) + k(-605, -370)](l, f),
        v = [null !== (t = a.startX) && 0 !== t ? t : this[g(cs, 834) + m(-286, ls) + "T_X"] + this[g(540, 143) + "ndom"](s, c), null !== (n = a[k(846, 447) + "Y"]) && 0 !== n ? n : this[m(fs, hs) + "_POINT_Y"] + this[d(840, vs) + "ndom"](s, c)];
      function d(t, n) {
        return vg(n, t - 1013);
      }
      var p = [null !== (e = a[m(ds, 540)]) && 0 !== e ? e : this[m(ps, 568) + m(404, gs) + g(ys, 711)] + this[d(840, 1222) + k(-242, -370)](s, c), null !== (r = a[d(664, 598)]) && 0 !== r ? r : this[g(947, 888) + d(795, 309) + g(1079, 721)] - this[m(-457, -158) + "NCE"] - this[m(-215, 161) + "ndom"](s, c)];
      function g(t, n) {
        return fg(n, t - -278);
      }
      if (a.reverse) {
        var y = [p, v];
        v = y[0];
        p = y[1];
      }
      if (!((null !== (i = a[k(443, 601) + d(ms, 1206) + "ipe"]) && 0 !== i ? i : this["isBezierSw" + k(-31, -198)]) ? this["bezie" + g(197, 48) + "ure"](v[0], v[1], p[0], p[1], h) : this[g(985, ks)](v[0], v[1], p[0], p[1], h))) {
        this.logger.error("滑动失败，请重启手机" + m(xs, 8) + "无障碍模式！");
        !this["_swiper_fa" + d(bs, 1087) + d(1195, As)] && (this[k(-9, -159) + m(345, 757) + d(1228, 1390) + d(1195, 1491)] = 0);
        this[d(658, 791) + "er_fail_count"] > 2 && (this.closeAccessibility(), this["killA" + d(845, 978) + m(721, ws)](), alert(m(Is, 662) + m(156, 8) + "无障碍模式！"));
        this[k(-406, -159) + "er_fa" + m(Cs, Es) + k(720, Ss)]++;
        return !1;
      }
      function m(t, n) {
        return vg(t, n - o);
      }
      function k(t, n) {
        return vg(t, n - u);
      }
      a[m(927, 735) + k(-12, -270)] > 0 && this.sleep(a[k(986, Ms) + "ime"]);
      return !0;
    }
  }, {
    key: "switchToHo" + hg(549, W),
    value: function () {
      var t,
        n,
        e,
        r,
        i = 86;
      function u(t, n) {
        return hg(n, t - i);
      }
      function o(t, n) {
        return hg(t, n - -548);
      }
      var a = arguments[o(-167, -424) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {};
      function s(t, n) {
        return lg(t, n - -608);
      }
      var c = a["durat" + o(352, -118) + "ndomMin"] || this[f(338, -41) + "ON_DURATIO" + u(Va, Ya) + s(Wa, Ka)][0],
        l = a[o(Ja, -241) + s(Qa, 490) + "ndomMax"] || this[u(160, -34) + "ON_DURATIO" + u(589, La) + "DOM"][1];
      function f(t, n) {
        return hg(n, t - 264);
      }
      null !== (t = a[u(842, 1143) + "X"]) && 0 !== t ? a[s(846, 816) + "X"] = t : a[s(846, 816) + "X"] = this[f(1003, 1074) + "_HORI" + u(880, 1322) + s(Ha, 426) + "X"] + this["getRa" + o(-247, -609)](c, l);
      null !== (n = a[f(1020, 1194) + "Y"]) && 0 !== n ? a[u(842, 600) + "Y"] = n : a[u(842, 600) + "Y"] = this["SWIPE" + s(Xa, 320) + s(1108, 854) + o(-19, -182) + "Y"] + this[u(Ga, Za) + s(6, -1)](c, l);
      null !== (e = a[o(633, 163)]) && 0 !== e ? a.endX = e : a.endX = this[o(_a, 192) + o($a, -159) + "h"] - a.startX;
      null !== (r = a[f(420, 690)]) && 0 !== r ? a.endY = r : a.endY = this[s(1126, 800) + o(173, -279) + "ht"] - a[s(1030, ts) + "Y"];
      return this[s(-37, 422) + s(206, 332) + "xt"](a);
    }
  }, {
    key: lg(1169, 1445),
    value: function (t, n, e, r) {
      function i(t, n) {
        return hg(n, t - 407);
      }
      function u(t, n) {
        return vg(t, n - 1294);
      }
      var o = arguments.length > 4 && 0 !== arguments[4] ? arguments[4] : 500;
      function a(t, n) {
        return fg(t, n - Ua);
      }
      this[i(829, 1177) + "r"].log((u(908, 961) + "e]: ").concat(o, "ms, 开始坐标: ")[u(786, ja) + "t"](t, ",").concat(n, u(1931, 1708) + "标: ")[i(qa, 1252) + "t"](e, ",")[a(1441, Fa) + "t"](r));
      return this["behav" + a(1067, 1471)][u(1670, 1566)](t, n, e, r, o);
    }
  }, {
    key: "gesture",
    value: function (t) {
      var n = 423;
      function e(t, n) {
        return hg(t, n - 964);
      }
      function r(t, n) {
        return vg(t, n - 1627);
      }
      for (var i, u, o, a, s, c = arguments, l = arguments[r(Ba, 1246) + "h"], f = new Array(l > 1 ? l - 1 : 0), h = 1; h < l; h++) f[h - 1] = c[h];
      this.logger[r(1523, Ra)]((e(1204, za) + r(944, 1178) + " ").concat(t, "ms, 开" + (a = 832, s = Ta, lg(a, s - n)))[r(1834, 1497) + "t"](f[0], ", 结束坐标: ")[e(1517, 1339) + "t"](f[f[e(Oa, Da) + "h"] - 1]));
      return (i = this["behav" + e(1145, Pa)]).gesture[r(Na, 1187)](i, [t][u = 503, o = 270, fg(o, u - -358) + "t"](f));
    }
  }, {
    key: "emula" + lg(K, 1457) + "ture",
    value: function (t, n, e, r) {
      var i = arguments[c(826, 1044) + "h"] > 4 && 0 !== arguments[4] ? arguments[4] : 500,
        u = arguments[c(789, 1044) + "h"] > 5 && 0 !== arguments[5] ? arguments[5] : 10,
        o = arguments.length > 6 && 0 !== arguments[6] ? arguments[6] : 5,
        a = Math[c(938, Ea)](i / u);
      var s = (e - t) / a;
      function c(t, n) {
        return fg(t, n - 434);
      }
      var l = (r - n) / a;
      function f(t, n) {
        return hg(n, t - 355);
      }
      for (var h, v, d, p, g = [], y = 0; y < a; y++) {
        var m = Math.round(t + y * s) + this[f(Sa, 893) + "ndom"](-o, o),
          k = Math[c(1621, 1532)](n + y * l) + this["getRa" + (h = 53, v = Ma, vg(v, h - 619))](-o, o);
        g.push([m, k]);
      }
      this[d = -144, p = -149, lg(p, d - -1234) + "r"].log("emulateGes" + c(1355, 1669) + " ", a, g.length);
      return this[f(507, 594) + "re"].apply(this, [i].concat(g));
    }
  }, {
    key: "bezierGesture",
    value: function (t, n, e, r) {
      var i = 903,
        u = this,
        o = arguments[a(wa, Ia) + "h"] > 4 && 0 !== arguments[4] ? arguments[4] : 500;
      function a(t, n) {
        return lg(n, t - 46);
      }
      var s = arguments.length > 5 && 0 !== arguments[5] ? arguments[5] : 100,
        c = arguments[a(Ca, 913) + "h"] > 6 && 0 !== arguments[6] ? arguments[6] : 2,
        l = new yn(t, n, e, r);
      function f(t, n) {
        return lg(t, n - 318);
      }
      var h = [],
        v = c,
        d = -v;
      l.getLUT(s)[a(1318, 1689) + "ch"](function (t) {
        function n(t, n) {
          return f(n, t - -263);
        }
        h[n(i, 600)]([Math.round(t.x + u[n(1055, 1210) + "ndom"](d, v)), Math.round(t.y)]);
      });
      return this[f(1301, 1138) + "re"].apply(this, [o].concat(h));
    }
  }, {
    key: vg(23, -143) + "hToPrev",
    value: function (t) {
      return this[u = xa, o = 1155, vg(o, u - 1522) + (r = ba, i = Aa, lg(r, i - -929)) + "xt"](Object[n = 1104, e = 1303, lg(n, e - 49) + "n"]({
        reverse: !0
      }, t));
      var n, e, r, i, u, o;
    }
  }, {
    key: "getTimeout" + fg(J, 1001) + "xt",
    value: function (t, n) {
      function e(t, n) {
        return fg(n, t - -860);
      }
      return this["getRa" + e(-435, -521)](t || this["WATCH" + e(-94, -146)][0], n || this.WATCH_TIME[1]);
    }
  }, {
    key: "scrollTo",
    value: function (t) {
      function e(t, n) {
        return vg(n, t - 1352);
      }
      function r(t, n) {
        return lg(n, t - 213);
      }
      var i = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {};
      function u(t, n) {
        return vg(t, n - 883);
      }
      var o = arguments.length > 2 && 0 !== arguments[2] ? arguments[2] : 10;
      function a(t, n) {
        return lg(n, t - -1194);
      }
      var s = !1;
      if (o <= 0) {
        return s;
      }
      if (10 === o && (null == t || !t[a(-223, -469) + "s"]())) {
        this[e(1269, 889) + "r"][a(oa, 15)]("[scrollTo]" + u(836, 572) + e(1778, 1579) + "or is" + r(1117, 1414) + e(893, 1092) + "s!");
        return s;
      }
      if (t) {
        if ("TfaOC" === a(-288, -573)) {
          veabwhaupνg(pqcνqsgfnbm, rtcwqxedwwv);
          uiuafhnfanh.add(pziνrzktjdd);
        } else {
          var c,
            l,
            f,
            h = Object.assign({
              timelineMin: 500,
              timelineMax: 1e3,
              safeTop: 0,
              safeBottom: 0
            }, i),
            v = null === (c = t["findO" + r(997, aa)]()) || 0 === c || null === (l = c[r(1588, 1542) + "s"]()) || 0 === l ? 0 : l.top,
            d = v >= h[u(709, sa) + "op"],
            p = v <= this.deviceHeight - h[r(ca, la) + "ottom"];
          (!d || !p) && this[r(1303, 900) + "r"][r(1691, 1760)]("[scrollTo]" + e(1241, fa) + "rentl" + u(1337, 839) + e(1409, 1860) + a(306, 82) + e(ha, 1110) + "...", d, p);
          n.isUndefined(h[r(va, 1516) + "se"]) && (h.reverse = n.isNumber(v) && (v <= 0 || !d));
          if (!(null !== (f = t["visib" + u(538, 390) + r(1490, 1814)]()) && 0 !== f && f.exists() && d && p)) {
            return a(-279, da) !== e(1094, 1416) ? ispkpyhihde.read(νzfajfxaodz) : (this.logger.log(a(125, 52) + "llTo]" + e(pa, ga) + "ollTo For Next...", h.reverse), this[r(1243, 1632) + r(1153, 1356) + "xt"](h), this[e(ya, 1800) + "lTo"](t, h, o - 1));
          }
          s = !0;
          this.logger[r(ma, 1291)](a(125, 516) + u(689, ka) + ": scrollTo Done.");
        }
      }
      return s;
    }
  }, {
    key: "scrollToTop",
    value: function (t, n) {
      var e = 242;
      function r(t, n) {
        return hg(n, t - 881);
      }
      function i(t, n) {
        return hg(n, t - e);
      }
      function u(t, n) {
        return hg(t, n - -230);
      }
      function o(t, n) {
        return fg(t, n - ua);
      }
      if ("xWcPf" !== r(1470, 1643)) {
        if (this[r(1137, 1050) + u(71, 443) + "onTime"] <= 0) {
          return !1;
        }
        var a = gipktmvizνw(νrpjnνzhidi[u(-589, -255)]() - this[i(998, Ko) + "Execu" + u(-83, 253) + "ime"]),
          s = a >= this[o(967, 1284) + o(1275, 1701) + o(Jo, 1037) + "e"];
        this[u(50, 192) + "r"][u(Qo, 72)]((r(1132, 782) + u(675, 443) + "onDon" + u(-101, 313))[r(1256, Lo) + "t"](a, u(-13, 406) + o(Ho, 1363) + "nds d" + o(Xo, 1097) + u(188, 18) + ".."));
        s && qurwjtvbqsi && zzmzgνlkkzt();
        return s;
      }
      var c,
        l = arguments.length > 2 && 0 !== arguments[2] ? arguments[2] : 20,
        f = !1;
      if (l <= 0) {
        return f;
      }
      var h = Object[i(Go, 477) + "n"]({}, n);
      this.logger[o(1394, Zo)]("scrollTo For Top...");
      if (t && (null === (c = t["visib" + o(848, 1040) + "ser"]()) || 0 === c || !c[r(_o, 1018) + "s"]())) {
        return "CslxP" !== u(209, -38) ? (this[u(576, 192) + "r"].error("".concat(rOhfggplnnx, " 启动失败" + r($o, ta) + u(19, 348))), !1) : (f = this["switc" + o(na, 1547) + "ev"](h), this[i(ea, 1270) + o(ra, 1062) + "p"](t, h, l - 1));
      }
      for (var v = 0; v < 5; v++) f = this["switc" + o(1352, ia) + "ev"](h);
      this.logger.log("scrol" + r(915, 788) + "p Done");
      return f;
    }
  }, {
    key: "scrollToCl" + vg(16, 394),
    value: function (t, n) {
      function e(t, n) {
        return lg(t, n - -101);
      }
      if (!this[r(932, 817) + e(1009, 1280)](t, n)) {
        return !1;
      }
      function r(t, n) {
        return vg(t, n - 612);
      }
      return this["clickByBou" + e(888, 594)](t[r(542, Wo) + "nce"]());
    }
  }, {
    key: lg(1578, Q) + vg(290, 388) + "ector",
    value: function (t) {
      var e = arguments[l(Ro, 499) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {},
        r = !1;
      if (!t) {
        return r;
      }
      if (n.isNumber(e)) {
        e = {
          timeout: e
        };
      }
      var i = Object[s(zo, 565) + "n"]({
        title: "waitF" + s(1273, 935) + f(641, 865),
        reverse: !1,
        timeout: this.maxTimeout || 2e4,
        turn: this.turnTime || 1e3
      }, e);
      i["turnF" + a(406, -56)] = i["turnF" + a(-274, -56)] || function () {
        return i.reverse ? !(null != t && t.exists()) : null == t ? 0 : t[n = 1461, e = Yo, l(e, n - 783) + "s"]();
        var n, e;
      };
      var u = i[s(513, To)] || t[a(-438, -388) + "ing"](),
        o = Math[s(Oo, 311)](i[s(541, Do) + "ut"] / Math.min(i[f(160, Po)], i.timeout));
      function a(t, n) {
        return vg(t, n - 81);
      }
      function s(t, n) {
        return hg(n, t - Vo);
      }
      this.logger.log("[".concat(u, "]: To" + l(1147, 1094) + "n ")[l(No, 750) + "t"](o, " times!"));
      for (var c = 0; c < o; c++) {
        this.logger.log("[".concat(u, f(249, jo)).concat(c + 1, a(-397, -47) + l(qo, Fo)));
        i[f(1095, 673) + l(1445, 1145)] && i.beforeFunc(c, i);
        if (i.turnFunc(c, i)) {
          r = !0;
          break;
        }
        i.afterFunc && i.afterFunc(c, i);
        this[a(-26, 344)](i.turn);
      }
      function l(t, n) {
        return vg(t, n - 880);
      }
      function f(t, n) {
        return lg(t, n - -569);
      }
      this[l(539, 797) + "r"].log("["[a(-178, -49) + "t"](u, s(926, Uo)).concat(t, a(-361, -333))[a(-491, -49) + "t"](r ? l(1076, 1072) : "NotFound", "!"));
      return r;
    }
  }, {
    key: "waitF" + vg(648, 388) + "ector" + vg(-140, -59) + "ss",
    value: function (t) {
      var e = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {};
      function r(t, n) {
        return lg(n, t - Bo);
      }
      n.isNumber(e) && (e = {
        timeout: e
      });
      return this.waitForSelector(t, Object.assign(e, {
        title: "waitForSel" + r(1916, 1603) + r(Mo, 1799) + "ss",
        reverse: !0
      }));
    }
  }, {
    key: lg(L, 1217) + "orImage",
    value: function (t) {
      var e = 107,
        r = this;
      function i(t, n) {
        return vg(n, t - e);
      }
      var u = arguments[a(762, 1215) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
      if (!t) {
        return !1;
      }
      if (n.isNumber(u)) {
        u = {
          timeout: u
        };
      }
      var o = u[i(xo, bo) + i(-82, -563) + "n"] || {
        threshold: .7
      };
      function a(t, n) {
        return vg(n, t - So);
      }
      return this[i(151, Ao) + "orSel" + i(368, wo)](id("waitF" + a(1399, 1590) + "ge"), Object[i(Io, Co) + "n"]({
        title: i(Eo, -258) + a(1399, 1864) + "ge",
        timeout: 6e4,
        turn: 3e3,
        turnFunc: function () {
          return r[n = -294, e = 73, vg(n, e - -1561 - 1554) + "mage"](t, o);
          var n, e;
        }
      }, u));
    }
  }, {
    key: lg(H, 1217) + fg(782, 1247) + hg(X, G) + "miss",
    value: function (t) {
      var e = 831;
      function r(t, n) {
        return lg(n, t - -1090);
      }
      var i = this,
        u = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {};
      if (n.isNumber(u)) {
        u = {
          timeout: u
        };
      }
      var o,
        a,
        s,
        c,
        l = u["image" + r(-106, mo) + "n"] || {
          threshold: .7
        };
      return this["waitForSel" + r(344, -91)](id(r(127, -318) + "orImageDismiss"), Object.assign({
        title: (s = 378, c = ko, lg(c, s - -839) + (o = 618, a = 744, hg(o, a - -17)) + "geDismiss"),
        timeout: 6e4,
        turn: 3e3,
        turnFunc: function () {
          return !i["findI" + (n = 1181, r = e, lg(r, n - 814 - -911))](t, l);
          var n, r;
        }
      }, u));
    }
  }, {
    key: lg(Z, 1440),
    value: function (t) {
      var n = 604;
      function e(t, e) {
        return fg(e, t - n);
      }
      this[e(1512, po) + "r"][e(1392, 1195)](e(go, 1593) + "] 执行中" + lg(512, 13 - -660));
      return this["behav" + e(1603, yo)].home(t);
    }
  }, {
    key: "back",
    value: function (t) {
      function n(t, n) {
        return vg(t, n - vo);
      }
      var e, r;
      this.logger[n(625, 244)](n(1209, 802) + fg(17, 401 - -930) + "...");
      return this[e = ho, r = 2001, vg(e, r - 1633) + "ior"].back(t);
    }
  }, {
    key: "recents",
    value: function (t) {
      function n(t, n) {
        return vg(t, n - 1683);
      }
      this.logger[n(1891, lo)](n(1514, 1285) + "nts] 执行中...");
      return this[i = 529, u = fo, vg(u, i - 161) + (e = -464, r = -49, lg(e, r - -1230))].recents(t);
      var e, r, i, u;
    }
  }, {
    key: fg(1285, 868) + hg(623, 228) + "g",
    value: function (t) {
      function n(t, n) {
        return fg(n, t - -123);
      }
      function e(t, n) {
        return vg(t, n - 1089);
      }
      this.logger.log(n(uo, 489) + n(oo, 702) + e(ao, 643) + "行中...");
      return this[e(1943, so) + (r = co, i = 487, lg(i, r - -1008))]["power" + e(905, 812) + "g"](t);
      var r, i;
    }
  }, {
    key: "notif" + hg(_, 361) + "ons",
    value: function (t) {
      var n = 599;
      function e(t, e) {
        return hg(t, e - n);
      }
      function r(t, n) {
        return fg(n, t - -674);
      }
      function i(t, n) {
        return fg(n, t - 800);
      }
      this[e(no, 1021) + "r"].log("[noti" + hg(820, 397 - io) + i(2202, eo) + r(102, 424) + "..");
      return this[e(994, 1472) + r(ro, -110)][i(1630, 1334) + e(1330, 960) + "ons"](t);
    }
  }, {
    key: "quickSettings",
    value: function (t) {
      function n(t, n) {
        return lg(n, t - 141);
      }
      this[n(Zu, 1206) + "r"][n(1111, 1467)](n(_u, 1050) + n($u, 877) + "ings]" + (fg(534, to - -71) + ".."));
      return this.behavior.quickSettings(t);
    }
  }, {
    key: lg(973, 1305) + "Screen",
    value: function (t) {
      var n, e;
      function r(t, n) {
        return hg(t, n - 68);
      }
      function i(t, n) {
        return lg(n, t - 401);
      }
      this[n = 298, e = -60, fg(e, n - -610) + "r"].log(i(1628, 2095) + "tScre" + r(1118, Xu) + i(1383, 1050));
      return this[r(559, 941) + "ior"][r(236, Gu) + "Screen"](t);
    }
  }, {
    key: lg(1130, 1138) + "creen" + hg(592, 120),
    value: function (t) {
      var n, e;
      function r(t, n) {
        return lg(n, t - 253);
      }
      function i(t, n) {
        return lg(n, t - 205);
      }
      this.logger[i(Hu, 1633)]("[take" + (hg(1015, 695 - 161) + "nshot] 执行中") + i(878, 1130));
      return this[r(1794, 1640) + "ior"]["takeS" + (n = 1508, e = 1357, lg(n, e - -89)) + r(1041, 1062)](t);
    }
  }, {
    key: "lockS" + hg(742, 778),
    value: function (t) {
      function n(t, n) {
        return fg(n, t - -107);
      }
      function e(t, n) {
        return lg(t, n - -69);
      }
      this[n(Ju, 319) + "r"].log(e(668, 1121) + n(913, 542) + "n] 执行中...");
      return this[e(1757, Qu) + e(1516, 1112)][e(Lu, 1439) + "creen"](t);
    }
  }, {
    key: "dismi" + vg(-338, -433) + "ifica" + fg(1044, 1030) + "hade",
    value: function (t) {
      function n(t, n) {
        return lg(n, t - -745);
      }
      function e(t, n) {
        return hg(t, n - 786);
      }
      function r(t, n) {
        return hg(t, n - -131);
      }
      function i(t, n) {
        return hg(t, n - 699);
      }
      this.logger[r(-25, 171)](n(627, 591) + "issNo" + i(306, 763) + e(1328, 1099) + n(53, -379) + e(Vu, Yu) + "...");
      return this[n(796, 482) + r(204, 382)][e(814, 1179) + i(850, Wu) + e(1398, 1359) + e(1427, 1330) + e(Ku, 1172)](t);
    }
  }, {
    key: fg(237, $) + "deHea" + vg(409, -21) + "ook",
    value: function (t) {
      function n(t, n) {
        return fg(n, t - 763);
      }
      function e(t, n) {
        return fg(n, t - 406);
      }
      this[e(Du, 972) + "r"][n(1551, Pu)](e(Nu, 1069) + "odeHe" + (vg(622, ju - 1146) + "Hook] 执行中..."));
      return this[r = 1624, i = qu, fg(r, i - Uu) + "ior"]["keyCodeHea" + n(1733, Fu) + "ook"](t);
      var r, i;
    }
  }, {
    key: "accessibilitySh" + fg(tt, nt) + "t",
    value: function (t) {
      function n(t, n) {
        return vg(t, n - 361);
      }
      function e(t, n) {
        return hg(t, n - 363);
      }
      function r(t, n) {
        return fg(n, t - 597);
      }
      return r(1249, 1727) !== r(1644, 1894) ? (this.logger[e(886, 665)](r(1086, 859) + n(386, zu) + "lityShortcut] 执行中..."), this[r(1956, 1492) + r(Tu, 1471)]["acces" + n(40, 138) + e(Ou, 1212) + "ortcut"](t)) : mCνokdbhlck.apply(this, arguments);
    }
  }, {
    key: hg(et, 594) + lg(1192, 950) + hg(325, 353) + "ttonChooser",
    value: function (t) {
      var n, e;
      function r(t, n) {
        return vg(t, n - Ru);
      }
      function i(t, n) {
        return vg(t, n - 1177);
      }
      this[n = 129, e = 2, hg(n, e - -420) + "r"][i(1174, Su)](i(1162, 675) + i(1682, 1361) + "lityButton" + r(2258, Mu) + "er] 执" + r(1312, 1472));
      return this[i(Bu, 1545) + "ior"]["acces" + i(1037, 954) + "ityButtonC" + r(1343, 1614) + "r"](t);
    }
  }, {
    key: "acces" + vg(-308, -223) + "ityButton",
    value: function (t) {
      function n(t, n) {
        return lg(t, n - -506);
      }
      function e(t, n) {
        return hg(n, t - -347);
      }
      var r, i;
      function u(t, n) {
        return vg(n, t - 112);
      }
      this.logger[r = 177, i = 269, hg(i, r - -125)](e(-344, -461) + n(862, 851) + "lityButton" + e(Cu, 525) + n(Eu, 167));
      return this.behavior["acces" + u(-111, -590) + u(-40, 402) + u(-411, -320)](t);
    }
  }, {
    key: "acces" + lg(rt, 950) + vg(-18, -275) + "lApps",
    value: function (t) {
      function n(t, n) {
        return hg(n, t - 1079);
      }
      function e(t, n) {
        return hg(n, t - -7);
      }
      this.logger[n(1381, 1537)]("[acce" + e(wu, 945) + n(1156, 1562) + "llApps] 执行中...");
      return this.behavior["acces" + n(Iu, 1292) + e(223, -133) + n(1817, 1895)](t);
    }
  }, {
    key: "setClip",
    value: function () {
      function t(t, n) {
        return lg(n, t - 81);
      }
      var n = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
      this.logger.log((t(Au, 1209) + "lip]: “").concat(n, "”"));
      return this["behav" + t(1262, 1321)].setClip(n);
    }
  }, {
    key: lg(it, 1149) + "ip",
    value: function () {
      var t = 810;
      function n(n, e) {
        return fg(n, e - t);
      }
      var e,
        r,
        i = arguments[e = 1099, r = 1429, hg(e, r - 1305) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
      this[n(bu, 1718) + "r"].log("[getClip] " + n(1917, 2180) + ".");
      return this.behavior.getClip(i);
    }
  }, {
    key: "getBattery",
    value: function () {
      var t, n;
      function e(t, n) {
        return lg(t, n - -786);
      }
      this[e(760, 304) + "r"].log(lg(462, ku - -614) + "atter" + (lg(255, -162 - -1130) + "中..."));
      return device[e(632, 212) + (t = 473, n = xu, lg(t, n - -495))]();
    }
  }, {
    key: lg(643, 917) + lg(913, ut),
    value: function () {
      function t(t, n) {
        return lg(t, n - 192);
      }
      this[n = 167, e = -181, fg(e, n - -741) + "r"].log(t(1122, 1484) + t(1070, 1220) + t(mu, 1415) + lg(964, 1336 - 251));
      return device.isCharging();
      var n, e;
    }
  }, {
    key: "vibrate",
    value: function () {
      var t,
        n,
        e = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 500;
      function r(t, n) {
        return fg(n, t - 114);
      }
      return !(e >= 0) && (this.logger.log("[vibrate] 执行"[r(975, gu) + "t"](e, r(1172, yu))), device[t = 893, n = 1116, lg(t, n - -411) + "te"](e));
    }
  }, {
    key: "cance" + lg(ot, 1205) + "ation",
    value: function () {
      function t(t, n) {
        return fg(n, t - -529);
      }
      var n, e;
      this[n = -65, e = vu, fg(n, e - -665) + "r"].log("[cancelVib" + t(122, 576) + hg(1716, du - 1156) + vg(471, 670 - 758));
      return device["cancelVibr" + t(pu, 400)]();
    }
  }, {
    key: vg(-271, 110) + "ntPackage",
    value: function () {
      function t(t, n) {
        return lg(n, t - 589);
      }
      function n(t, n) {
        return hg(t, n - -503);
      }
      function e(t, n) {
        return hg(t, n - 433);
      }
      if ("oJUfc" !== t(1460, 1339)) {
        var r = arguments.length > 1 && arguments[1] !== yPνomchqzki ? arguments[1] : {};
        this[i = 1290, u = 876, fg(u, i - 382) + "r"].log("[kill" + t(2096, 2246) + "d]: 中止线程...");
        return yGwxfeiqdνu(xWbhbhahqin, wSmetνmkmfh({}, this[e(1628, hu) + e(963, 1138) + "Config"] || {}, r));
      }
      var i,
        u,
        o = this.behavior["currentPac" + e(1314, 859)]();
      this[t(1679, 1194) + "r"].log(t(1759, 2022) + n(-946, -518) + n(550, 335) + "]:", o);
      return o;
    }
  }, {
    key: hg(752, 615) + fg(714, at) + fg(271, 464),
    value: function () {
      var t = 502;
      function n(t, n) {
        return fg(t, n - -454);
      }
      function e(t, n) {
        return fg(n, t - -1073);
      }
      function r(t, n) {
        return vg(t, n - 1071);
      }
      function i(n, e) {
        return fg(n, e - t);
      }
      if ("lndJq" === e(-306, -27)) {
        var u = this["behav" + r(fu, 1079)].currentActivity();
        this.logger[e(-285, -739)](e(-85, -535) + "entActivity]:", u);
        return u;
      }
      νbtxuferhaν[e(-264, -424) + r(ou, 917) + "essMode"] && aybioxvmugc[e(-264, -325) + "ightn" + e(-213, -371) + "de"](gbswmdfddjr);
      twcbqocνdrb[e(-264, 215) + "ightn" + n(-298, 93)] && crwhvkhwviu["setBr" + n(au, 383) + r(936, 627)](tνypevzwdjd);
      rbaxtttlhlp["setMu" + i(su, cu) + "lume"] && xzujryanνkr[i(1186, 1666) + "sicVo" + i(lu, 1143)](gqjybyfgkih);
      lrzmgsjmmvr[n(467, 612) + "creenOn"] && finxvxdlexz[e(-587, -954) + "lKeepingAw" + r(580, 806)]();
    }
  }, {
    key: "launc" + hg(124, 292) + "age",
    value: function (t) {
      function n(n) {
        return t.apply(this, arguments);
      }
      n.toString = function () {
        return t[n = 37, e = -36, bn(e - -475, n) + "ing"]();
        var n, e;
      };
      return n;
    }(function (t) {
      var n = arguments[u(145, 451) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : 3;
      t = t || this.AppPackage;
      if (n <= 0) {
        this[e(Pi, 1757) + "r"][u(Ni, ji)](""[i(qi, 20) + "t"](t, i(554, 851) + u(421, Fi) + "限制！"));
        return !1;
      }
      function e(t, n) {
        return fg(n, t - 801);
      }
      n <= 1 && (this[e(1709, 2119) + "r"][u(323, 427)](i(17, -280) + e(1444, 1929) + "kage]: 多次启" + r(-23, -121) + u(449, 748) + i(703, Ui) + i(Vi, Yi)), this[e(Wi, 1866) + "llApp"](), this[r(480, 651) + r(445, 510) + "dom"](2e3, 3e3));
      if (!launchPackage(t)) {
        this.logger[i(Ki, 311)](""[i(qi, 295) + "t"](t, " 程序包不存在，启动" + r(24, -413)));
        return !1;
      }
      function r(t, n) {
        return lg(n, t - -956);
      }
      function i(t, n) {
        return fg(n, t - -418);
      }
      this["sleep" + e(Ji, 2313) + "dom"](1e3, 2e3);
      this["click" + u(91, -9) + u(Qi, Li)]([textMatches(/^(允许|打开|始终允许)$/), text(getAppName(t))]) && (e(Hi, 1779) !== i(431, Xi) ? (Fbiybopifem(Wliooiezztv[0]) ? Jhiqmaxfcni = Rtnqlxνvfbj[0] : Jhiqmaxfcni = Htkgodmpono, Vthnkspsyoz(Yeanpduvpxg[1]) ? Pbtqonhlmzn = Νlxnνmfxxwu[1] : Pbtqonhlmzn = Qxtmνvdlpje) : this.logger[u(323, Gi)](e(1236, Zi) + u(178, 373) + i(200, _i) + r(31, 421) + "许唤醒第三" + e(2130, 2441)));
      if (!this["waitF" + u(596, 572) + "kage"](t, 15e3)) {
        return e(1573, 1824) === i($i, 956) ? (this.logger.log((u(56, -19) + "kByCollects]: click " + e(1584, 1370) + "for ").concat(Hcjgqgdflνx)), !0) : (this[u(tu, 310) + "r"].error(""[u(396, nu) + "t"](t, r(394, 511) + "失败，正在" + e(1765, eu))), this["launc" + i(ru, iu) + u(uu, 869)](t, n - 1));
      }
      function u(t, n) {
        return fg(n, t - -465);
      }
      return !0;
    })
  }, {
    key: vg(427, 44) + "orPac" + lg(1485, 1094),
    value: function (t) {
      function n(t, n) {
        return hg(t, n - -44);
      }
      function e(t, n) {
        return hg(n, t - 1149);
      }
      if ("nZZFs" !== n(642, 180)) {
        return !1;
      }
      var r,
        i,
        u,
        o,
        a = arguments[u = zi, o = Ti, vg(o, u - 1077) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : 1e4;
      t = t || this.AppPackage;
      return this[e(1698, 2169) + "orSel" + e(1915, 1528)](packageName(t), {
        title: "waitF" + n(Oi, Di) + (r = 234, i = 575, fg(i, r - -678)),
        timeout: a
      });
    }
  }, {
    key: vg(-487, -508) + "o",
    value: function (t) {
      var e = 1203,
        r = 347,
        i = arguments[l(822, yi) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
      if ((i = n._extend({
        sleep: 3e3,
        limit: 10
      }, n.isNumber(i) ? {
        limit: i
      } : i)).limit <= 0) {
        if ("MAkfU" === l(1282, 1531)) {
          return !1;
        }
        var u = !(arguments.length > 0 && arguments[0] !== acwcbagkcxa) || arguments[0],
          o = arguments.length > 1 && arguments[1] !== ubrrνsmνhiw ? arguments[1] : "";
        if (!this[s(mi, 546) + "stScr" + f(1579, 1776) + c(740, 965)](u)) {
          this.logger.warn("[captureScreen]: 获取屏" + s(ki, -395) + "！");
          return null;
        }
        this.logger.log("[captureSc" + c(495, 832) + ": Screen i" + c(876, 615) + c(790, 826) + "re in" + l(1004, 508) + "ress...");
        this[s(xi, 486)]("captureScreenBe" + l(bi, 1018));
        var a = o ? ojfrfxawzbν(o) : bqkarodyogu();
        this[f(Ai, wi)](c(790, 1084) + "reScr" + l(Ii, 821) + "ne");
        return a;
      }
      function s(t, n) {
        return vg(n, t - 370);
      }
      function c(t, n) {
        return hg(n, t - 527);
      }
      this[c(949, 983) + "r"].log((s(Ci, 932) + "To]: " + c(1059, 1256) + "ate Back F" + l(Ei, 776)).concat(i[l(1589, 1618)], " limit..."));
      if ("hWnGn" === s(r - 69, 438) ? lVνyfxngchm() : n.isFunction(t) ? t() : null == t ? 0 : t.exists()) {
        this[c(Si, 710) + "r"].log("[back" + s(760, 464) + s(324, Mi) + f(1943, 1983) + "ccess!");
        return !0;
      }
      function l(t, n) {
        return vg(n, t - e);
      }
      function f(t, n) {
        return vg(t, n - 1844);
      }
      i.beforeSleep > 0 && this.sleep(i["befor" + s(455, 606) + "p"]);
      this[s(-73, -485)](i.sleep);
      n.isFunction(i["callb" + s(634, 684)]) && i[l(1110, Bi) + l(1467, Ri)](i);
      i.limit--;
      return this.backTo(t, i);
    }
  }, {
    key: hg(1199, 801) + "ateBackTo",
    value: function (t) {
      var n,
        e,
        r = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {};
      return this[n = 1409, e = 1034, vg(n, e - 1542) + "o"](t, r);
    }
  }, {
    key: "forEa" + lg(1043, 1514) + "e",
    value: function () {
      function t(t, n) {
        return vg(t, n - 1052);
      }
      function e(t, n) {
        return fg(n, t - -490);
      }
      function r(t, n) {
        return hg(t, n - -144);
      }
      function i(t, n) {
        return fg(t, n - -1028);
      }
      var u = arguments[i(-629, -418) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 0,
        o = arguments[e(120, 444) + "h"] > 1 ? arguments[1] : 0;
      if (!n.isFunction(o)) {
        this.logger.warn("[forEachTi" + e(824, 762) + r(640, 268) + r(986, fi) + i(400, -11) + " Func" + t(1168, 1334) + "..", o);
        return !1;
      }
      for (var a = parseInt(n.isNumeric(u) ? u : 0), s = Date[e(-29, -71)](), c = 0; c < a; c++) {
        if (parseInt((Date.now() - s) / 1e3) > a) {
          this[r(613, hi) + "r"].log(("[forE" + t(1766, 1400) + "me]: Loop " + e(-53, -88) + i(vi, 164) + i(12, -157))[e(di, 708) + "t"](a, r(-245, 54) + "nds!"));
          break;
        }
        var l = o(c);
        if (n.isBoolean(l) && !0 === l) {
          this.logger.log("[forE" + t(1588, 1400) + e(824, 1065) + r(pi, 414) + "completed ahead" + t(949, gi) + "chedule...");
          break;
        }
      }
      return !0;
    }
  }, {
    key: "while" + hg(666, 926),
    value: function () {
      var t = arguments[u(ii, 367) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 0,
        e = arguments[u(661, 1109) + "h"] > 1 ? arguments[1] : 0;
      function r(t, n) {
        return vg(n, t - li);
      }
      function i(t, n) {
        return vg(n, t - 287);
      }
      function u(t, n) {
        return hg(n, t - 537);
      }
      if (!n.isFunction(e)) {
        this[u(959, 1074) + "r"][r(1649, 1268)](s(608, 397) + "eTime]: callbac" + u(882, 1175) + i(664, ui) + i(58, -363) + s(904, oi), e);
        return !1;
      }
      var o = parseInt(n.isNumeric(t) ? t : 0),
        a = Date.now();
      function s(t, n) {
        return hg(t, n - 50);
      }
      for (var c = 0;;) {
        if (parseInt((Date[i(-243, 245)]() - a) / 1e3) > o) {
          this.logger.log(("[whil" + u(972, ai) + "]: Loop co" + s(-233, -4) + i(291, si) + "r ").concat(o, " seco" + s(209, 113)));
          break;
        }
        var l = e(c);
        if (n.isBoolean(l) && !0 === l) {
          this[r(1261, ci) + "r"].log(i(129, -37) + i(217, -10) + "]: Loop completed ahead of sch" + s(1311, 933) + "...");
          break;
        }
        c++;
      }
      return !0;
    }
  }, {
    key: vg(st, ct) + "lTime" + vg(-338, 126),
    value: function (t, e) {
      var r,
        i,
        u = arguments[r = 801, i = 693, vg(i, r - ri) + "h"] > 2 && 0 !== arguments[2] ? arguments[2] : {};
      return n.onRealTimeout(t, e, u);
    }
  }, {
    key: vg(244, 189) + "etwor" + lg(640, lt) + fg(917, 1187),
    value: function () {
      function t(t, n) {
        return hg(t, n - ei);
      }
      function e(t, n) {
        return lg(t, n - -1163);
      }
      function r(t, n) {
        return lg(n, t - -574);
      }
      if (t(1193, Gr) !== t(Zr, 1576)) {
        return {
          bounds: zzsνzruuxac.bounds,
          confidence: fzuurodtluc[e(262, 413) + "dence"],
          text: vtvhnakuley.label,
          words: rtnqlxνvfbj.words,
          location: yegdngwcpoz[r(837, 784) + t(_r, 748) + "n"](),
          elements: egmtkemuwvν.getElements()
        };
      }
      var i = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 6e5;
      this[e($r, -73) + "r"][t(1145, ti)]("[waitNetwo" + r(272, ni) + "ilable]: 等" + e(-155, -476) + "中...");
      var u = n.waitNetworkAvailable(i);
      u && this.logger[e(258, -193)](vg(-46, -370 - 69) + t(479, 666) + "rkAvailable]: 网" + r(367, 284));
      return u;
    }
  }, {
    key: "onExit",
    value: function (t) {
      var e = 1243;
      n.isFunction(t) ? t = t : t = n.noop;
      Dn.on(hg(1610, 1379 - e), t);
    }
  }, {
    key: "exit",
    value: function (t) {
      var n = 1465;
      function e(t, n) {
        return fg(t, n - -521);
      }
      if (e(297, 198) === e(-61, Xr)) {
        function r() {
          return t.apply(this, arguments);
        }
        r.toString = function () {
          function r(t, n) {
            return hg(n, t - -428 - -151);
          }
          return e(n, 1838 - 1115) !== r(-562, -553) && t[r(-543, -238) + "ing"]();
        };
        return r;
      }
      oormwxqyqyu[butpixzbwvz] = jdtyqnwhcyt[nqkdhomnrqz];
    }(function () {
      var t = 583;
      function e(n, e) {
        return fg(e, n - t);
      }
      function r(t, n) {
        return lg(t, n - -518);
      }
      this.logger[r(550, 859)](""[r(484, Wr) + "t"](this.AppName || this["AppPa" + r(Kr, 988)], e(1990, 1790) + r(676, 590) + "g..."));
      n.isFunction(this[r(Jr, 745) + "exit"]) && this[r(919, Qr) + r(-179, Lr)](this.exitMessage);
      if (this.inSubThread) {
        var i;
        null === (i = threads.currentThread()) || 0 === i || i["inter" + e(1709, 1466)]();
      } else {
        if ("MyofZ" === r(Hr, 958)) {
          return !1;
        }
        exit();
      }
    })
  }, {
    key: "openAppSet" + vg(ft, -140),
    value: function (t) {
      function n(n) {
        return t[e = 889, r = 1356, bn(e - 421, r)](this, arguments);
        var e, r;
      }
      function e(t, n) {
        return vg(n, t - 1171);
      }
      n[e(Yr, 663) + "ing"] = function () {
        return t[n = 1047, r = 1249, e(r - 547, n) + "ing"]();
        var n, r;
      };
      return n;
    }(function (t) {
      t = t || this[n = Ur, e = Vr, hg(n, e - 611) + "ckage"];
      return openAppSetting(t);
      var n, e;
    })
  }, {
    key: "startApp",
    value: function (t) {
      function n(t, n) {
        return lg(n, t - -141);
      }
      var e, r, i, u, o, a;
      t = t || this["AppPa" + n(Nr, 1114)];
      this.logger[n(jr, qr)]((n(718, 463) + "tApp]" + (i = 125, u = -88, fg(i, u - -709) + "rting "))[e = 582, r = 281, hg(r, e - 207) + "t"](t, " ..."));
      return !!this[o = 506, a = Fr, vg(o, a - 367) + n(819, 1020) + "age"](t);
    }
  }, {
    key: fg(1305, 977) + vg(658, 220),
    value: function (t) {
      function n(t, n) {
        return fg(t, n - -220);
      }
      function e(t, n) {
        return hg(t, n - 869);
      }
      function r(t, n) {
        return hg(t, n - 1237);
      }
      this.restartAppCount++;
      t = t || this[i(160, -280) + i(1060, 1211)];
      if (!this.exitApp(t) && (this.logger[i(1032, Ir)]("[rest" + i(917, 734) + r(Cr, Er) + "出APP失败，尝试退" + e(Sr, Mr) + r(Br, 1610)), !this[e(883, Rr) + "llApp2"]())) {
        this[n(244, zr) + "r"][e(1632, Tr)]("[rest" + e(1987, Or) + i(410, 95) + r(1801, 1420) + e(1101, 1293) + ".");
        return !1;
      }
      function i(t, n) {
        return vg(n, t - 727);
      }
      this[e(1293, 1637) + "ByRandom"](3e3, 5e3);
      this.logger[n(1534, 1076)]((e(1146, 1437) + "artAp" + i(Dr, 1399) + "repar" + i(196, 338) + "restart fo" + r(2226, 1974) + " ").concat(this["resta" + e(2006, 1594) + "Count"], e(Pr, 1246)));
      return this[i(978, 1412) + "App"](t);
    }
  }, {
    key: "isCur" + lg(1258, 1526) + "pp",
    value: function (t) {
      function n(t, n) {
        return lg(t, n - -788);
      }
      return (t = t || this["AppPa" + n(855, 718)]) === this["curre" + n(103, 220) + n(-140, 306)]();
    }
  }, {
    key: vg(ht, -230) + "pp",
    value: function (t) {
      function n(t, n) {
        return hg(t, n - 741);
      }
      function e(t, n) {
        return hg(n, t - -583);
      }
      function r(t, n) {
        return hg(t, n - -570);
      }
      function i(t, n) {
        return hg(t, n - 1165);
      }
      t = t || this[i(1335, 1103) + r(-150, lr)];
      this.logger[e(126, 625)](""[n(1059, 1116) + "t"](this[e(-557, -434) + "me"] || t, n(fr, 1034) + "中..."));
      if (this["behav" + e(-70, 42)].isRoot) {
        if ("BwGvA" !== e(105, hr)) {
          return this[e(290, -96) + "ior"][e(-308, -346) + "pp"](t);
        }
        Iwiwpfxztfi = (null === Bvwjxvjbxjs || 0 === Edptgnsehxν ? 0 : Uztpldbrofs[r(-564, -173) + "X"]) || (null === Ahtoisjrbtn || 0 === Fqnnepziaml ? 0 : Ahhynorqbhl.x) || Cpvoyoljauν;
        Oqoνtbkcfxq = (null === Jrleledpbqr || 0 === Luoqjwsxmbk ? 0 : Sxfjohyyebc[e(-186, -560) + "Y"]) || (null === Ctkutqdzfcl || 0 === Qexrhswfmmv ? 0 : Krrwwichpci.y) || Gjνdjwyujaz;
      }
      if (!this[e(132, -310) + n(1316, 960) + "ting"](t)) {
        this.logger[n(689, 1164)](n(1905, 1458) + "App]:" + i(1351, vr) + r(446, 153) + "tting Fail!");
        return !1;
      }
      !this.waitForSelector(text(getAppName(t)), 8e3) && this[e(-161, -109) + "r"].error(n(dr, pr) + "App]:" + i(1777, gr) + r(-531, -46) + "lecto" + n(1555, 1370) + n(1186, yr) + r(290, mr) + "il!");
      this[n(kr, 1509) + n(1408, xr) + "dom"](1e3, 2e3);
      var u = textMatches(/^(.*强.*|.*停.*|.*结.*)$/);
      this["click" + r(-502, -22) + "sts"](u);
      this["sleep" + n(1317, 1474) + n(br, 819)](1e3, 2e3);
      this["clickByCol" + i(Ar, wr)](textMatches(/^(强行停止|好|.*确.*|.*定.*)$/)[i(1382, 1160)]()[r(-156, -118)](function (t, e) {
        return t[r = 934, i = 547, n(r, i - -901) + "s"]().y - e.bounds().y;
        var r, i;
      }), !1);
      this[n(1216, 803)](this.getRandom(2e3, 3e3));
      this[n(1249, 1513)](this[r(-383, -238) + i(828, 1104)](2e3, 3e3));
      return !0;
    }
  }, {
    key: hg(535, vt) + "AppCa" + hg(-221, -34),
    value: function (t) {
      function n(t, n) {
        return lg(n, t - 318);
      }
      t = t || this[a(-238, 93) + a(662, 495)];
      this.logger.info(""[e(1796, 1340) + "t"](this.AppName || t, " 缓存清除中..."));
      if (this["behav" + u(je, 6)].isRoot) {
        return this.behavior[n(qe, 1084) + "AppCa" + u(-401, -492)](t);
      }
      function e(t, n) {
        return hg(t, n - 965);
      }
      if (!this["openAppSet" + a(Fe, 176)](t)) {
        this.logger[e(2057, 1775)]("[cleanAppCache]" + n(926, 1092) + n(Ue, 1800) + a(Ve, 187) + "g Fail!");
        return !1;
      }
      this[e(1636, 1733) + e(Ye, 1055) + "rt"]();
      var r = e(We, 1013);
      this["waitF" + n(1879, 1458) + e(1971, 1731)](text(r), 8e3);
      if (!this.bubbleClick(text(r)[n(1667, 1771) + n(Ke, Je)](), 2) && (this[u(Qe, 216) + "r"].warn((u(88, -180) + a(628, 1052) + "ache]: ")[n(Le, 1091) + "t"](r, n(1521, 1630) + "ked F" + n(1850, He))), !this[u(Xe, 151) + "ByBou" + e(558, 992)](text(r)[a(505, Ge) + u(-251, -108)]()))) {
        this[n(Ze, 1516) + "r"].warn("[cleanAppCache]: ".concat(r, " clicked Fail 02!"));
        return !1;
      }
      this[e(1760, 1733) + a(557, _e) + "dom"](1e3, 2e3);
      if (this["click" + n(1534, 1163) + n($e, 1658)](text(e(1611, tr) + "据")) && (this.sleepByRandom(500, 1e3), this[e(1418, 1436) + e(1865, 1513) + a(442, nr)](text("确定")))) {
        this[n(1408, 1378) + "r"].log("[cleanAppC" + e(1275, 1049) + ": 清除全" + n(1202, er) + "！");
        this[e(614, rr)](1e3);
        this[n(1758, 1547)](2e3);
        return !0;
      }
      var i = u(-97, ir);
      this["waitForSel" + e(ur, or)](text(i), 8e3);
      if (!this.clickByBounds(text(i)["findO" + n(Ke, 1139)]())) {
        this.logger.warn(("[cleanAppC" + a(-92, -336) + ": ").concat(i, " clicked Fail!"));
        return !1;
      }
      function u(t, n) {
        return lg(n, t - -1035);
      }
      this[a(592, 441) + "ByRandom"](1e3, 2e3);
      var o = e(1527, 1045);
      this[n(1535, 1461) + a(717, 847) + "ector"](text(o), 8e3);
      if (!this["click" + n(1497, 1697) + u(-340, -251)](text(o)["findO" + n(1102, ar)]())) {
        this.logger.warn(("[cleanAppC" + e(757, 1049) + ": ").concat(o, " clicked Fail!"));
        return !1;
      }
      function a(t, n) {
        return hg(n, t - -176);
      }
      this[a(592, 334) + "ByRandom"](1e3, 2e3);
      this[u(104, 97) + "ByExi" + a(sr, 567)](text("确定"));
      this[e(cr, 1733) + "ByRandom"](1e3, 2e3);
      this[n(1048, 1449)](1e3);
      this.back(1e3);
      this[e(1701, 1737)](2e3);
      return !0;
    }
  }, {
    key: vg(672, dt) + lg(1638, 1336) + "S",
    value: function () {
      function t(t, n) {
        return vg(n, t - 968);
      }
      function e(t, n) {
        return lg(n, t - -95);
      }
      return this.startApp(n.isAutoJS6 ? e(672, 925) + e(1448, 1887) + t(970, Oe) + e(1285, De) : t(Pe, Ne) + "utojs" + e(1080, 771) + "xjs.v6");
    }
  }, {
    key: "exitAllApp",
    value: function () {
      var t = !1;
      function n(t, n) {
        return lg(t, n - 40);
      }
      this.logger.log("[exit" + i(1052, 1176) + i(1621, 1635) + "在关闭所有最近打开的" + e(1054, 1105));
      if (!this[e(1502, ee)](this["getRa" + i(re, 947)](500, 1e3))) {
        return t;
      }
      function e(t, n) {
        return lg(n, t - 62);
      }
      function r(t, n) {
        return vg(t, n - 645);
      }
      if (!this[i(1045, 737) + "ts"](this.getRandom(500, 1e3))) {
        return t;
      }
      function i(t, n) {
        return lg(n, t - 355);
      }
      if (Sn) {
        if (!this["_huaw" + n(1048, 1096) + n(1238, 1435)] || !this["_huawei_cl" + n(ie, ue)]) {
          var u,
            o = null === (u = id("com.h" + r(478, 386) + ".andr" + e(858, 734) + "auncher:id" + r(34, 105) + "r_all_recents_i" + r(574, 658) + "button")["findO" + n(709, 824)]()) || 0 === u ? 0 : u[i(oe, 1476) + "s"]();
          if (o) {
            this["_huaw" + r(900, 528) + n(ae, se)] = o[n(768, 1042) + "rX"]();
            this[e(ce, le) + i(fe, he) + "ear_y"] = o.centerY();
          }
        }
        this["sleep" + n(1817, ve) + "dom"](500, 1e3);
        this[r(794, de)](this["_huaw" + e(1118, 1344) + i(1750, pe)], this["_huawei_cl" + i(1307, 855)]) && (this["sleep" + e(1463, ge) + "dom"](1e3, 2e3), t = !0);
      } else {
        var a;
        if (En) {
          if (this[r(ye, 611) + "ByExpect"](idContains("btn_c" + n(1521, me)))) {
            t = !0;
          }
        } else {
          if (Mn) {
            if (this[n(ke, 1179) + i(1813, 2255) + "ect"](idContains(r(xe, be) + "AnimV" + n(Ae, 1291)))) {
              t = !0;
            }
          } else {
            if ("lIFuj" === r(776, 1006)) {
              if (this[e(1201, 1586) + i(1571, 1548) + i(1641, 1696)](text(r(544, 697))) || this[i(1494, 1811) + "ByExi" + n(we, Ie)](text("全部关闭"))) {
                if ("aRiGT" !== e(767, 782)) {
                  this.logger[i(1833, 1611)](i(Ce, 1194) + e(1196, Ee) + "leAre" + n(1125, Se) + r(Me, Be) + i(1083, 1136) + "tNumber", Νwomjeuygsv, Quikzvngdgm);
                  return !1;
                }
                t = !0;
              }
            } else {
              stpragddjvl = (a = ccvnpjucfbr)[e(1203, 880) + i(1503, Re)][n(ze, 773)](a, [xgdνdynnνeq].concat(viswozvbsnd(dxrptyjyzwe[e(Te, 1261) + "lor"])));
            }
          }
        }
      }
      this.sleep(1e3);
      return t;
    }
  }, {
    key: fg(975, pt) + fg(gt, 804) + "2",
    value: function () {
      var t,
        n,
        e = 726,
        r = 617,
        i = !1;
      this.logger[o(701, 767)](a(814, Gn) + a(Zn, 274) + "p]: 正" + o(1084, 791) + "最近打开的" + a(421, 896));
      if (!this[u(_n, $n)](this[u(152, te) + (t = 160, n = 280, vg(n, t - e))](1e3, 2e3))) {
        return i;
      }
      if (!this.recents(this.getRandom(2e3, 3e3))) {
        return i;
      }
      function u(t, n) {
        return vg(t, n - r);
      }
      function o(t, n) {
        return fg(n, t - -87);
      }
      function a(t, n) {
        return vg(n, t - ne);
      }
      i = this["click" + u(27, 182) + "lects"]([idMatches(/(.*)(clear_all_recents_image_button|clearAnimView|btn_clear|clear_all_panel|clear_all)$/), textMatches(/^(全部关闭|关闭全部|全部清除|清除)$/), descContains("清除全部-按钮")]);
      this["sleepByRan" + u(-93, 190)](2e3, 3e3);
      return i;
    }
  }, {
    key: vg(55, yt) + "te",
    value: function (t) {
      var e = arguments;
      function r(t, n) {
        return hg(n, t - 91);
      }
      var i = !1;
      function u(t, n) {
        return vg(n, t - 1342);
      }
      function o(t, n) {
        return hg(n, t - 34);
      }
      try {
        if (f(-118, 78) === f(721, 1038)) {
          this.logger[o(Fn, 488)](f(-Un, 140) + "ssibi" + o(689, 569) + f(116, -Vn) + "] 执行中" + f(-60, -6));
          return this[r(964, 1311) + "ior"]["acces" + r(373, Yn) + u(1190, 934) + u(Wn, 412)](jNzravyrljz);
        }
        if (n.isFunction(t)) {
          if ("hTIqU" === r(376, 609)) {
            if (r(Kn, 1291) + r(124, 215) == typeof pokwljbbswt ? acmtybcvifu === oxjnuuqincz : xvfxlkνduwv.has(tpyzxhxhpqq)) {
              return arguments.length < 3 ? gcltqgyuhkf : nrhtywlgomr;
            }
            throw new iteqbmxqznq(f(Jn, 785) + f(201, -Qn) + f(103, 431) + " is n" + u(Ln, 1357) + f(772, 1051) + r(560, 890) + "his o" + o(40, 141));
          }
          for (var a, s = arguments[o(158, -Hn) + "h"], c = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) c[l - 1] = e[l];
          i = null === (a = t[u(902, 1276)](0, c)) || 0 === a || a;
        }
      } catch (t) {
        this[o(456, 81) + "r"].error(("[exec" + f(Xn, 355) + ' Error "')[r(466, 56) + "t"](t.message, '"'));
        return !1;
      }
      function f(t, n) {
        return lg(n, t - -733);
      }
      return i;
    }
  }, {
    key: vg(mt, kt) + hg(790, 901) + hg(-307, -13),
    value: function (t) {
      var e,
        r,
        i = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : 1;
      if (i <= 0) {
        return !0;
      }
      n.isFunction(t) ? t = t : t = n.noop;
      this.execute(t, limlt);
      return this[e = 1008, r = 1340, lg(r, e - -507) + "teByRound"](t, i - 1);
    }
  }, {
    key: fg(xt, bt) + vg(135, At) + "x",
    value: function (t, n, e) {
      function r(t, n) {
        return hg(n, t - 854);
      }
      this[r(Cn, Nn) + "r"][r(1156, 1645)]("[Fixed]: c" + s(1137, 968) + "default...");
      if (t) {
        return !0;
      }
      var i, u, o, a;
      this[r(1276, 1730) + "r"][i = 376, u = 682, fg(i, u - -513)]("[Fixe" + s(jn, 713) + r(qn, 1978) + s(1059, 1464) + "..");
      if (!this[r(1345, 1242) + "rtApp"]()) {
        return e && e();
      }
      function s(t, n) {
        return vg(n, t - 1517);
      }
      n && n();
      this[s(1434, 1354) + "r"][o = 634, a = 258, lg(a, o - -336)]("[Fixed]: 修复已完成！");
    }
  }, {
    key: hg(72, 372) + "acheTick",
    value: function (t) {
      return this["nextT" + (n = 1930, e = 1631, hg(n, e - 732))](t);
      var n, e;
    }
  }, {
    key: hg(693, 429) + "ick",
    value: function (t) {
      function e(t, n) {
        return lg(t, n - 478);
      }
      function r(t, n) {
        return vg(n, t - 1765);
      }
      if (n.isFunction(t)) {
        typeof Promise !== r(mn, xn) + r(An, 1779) ? Promise[e(wn, In) + "ve"]()[e(1453, 1118)](function () {
          return t();
        }) : setTimeout(function () {
          return t();
        });
      }
    }
  }, {
    key: fg(wt, It) + lg(1456, 977) + "t",
    value: function (t) {
      var e = this;
      var r,
        i = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {};
      function u(t, n) {
        return vg(t, n - 829);
      }
      function o(t, n) {
        return lg(t, n - -159);
      }
      n.isFunction(t) ? t = t : t = n.noop;
      (i = Object[s(296, 53) + "n"]({
        waitFor: !0,
        join: !1,
        lock: !1
      }, i)).lock && (r = threads[s(-117, -61)]());
      var a = threads[s(-49, 223)](function () {
        var n,
          i,
          o = 368;
        function a(t, n) {
          return u(t, n - 822);
        }
        if (r) {
          r[a(vn, 1618)]();
        }
        try {
          t();
        } catch (t) {
          e[n = dn, i = 1114, u(n, i - o) + "r"].warn("threa" + vg(756, 994 - 515 - 675) + (s(1060, 886 - 1436) + "or:") + t.message);
        }
        if (r) {
          r[a(pn, gn) + "k"]();
        }
      });
      function s(t, n) {
        return fg(t, n - -1019);
      }
      i.waitFor && a[u(786, hn) + "or"]();
      !1 !== i.join && a[o(1030, 951)](parseInt(i[o(803, 951)]) || 0);
      return a;
    }
  }, {
    key: hg(399, 805) + lg(419, 749),
    value: function (t) {
      return n.fromJson(t);
    }
  }, {
    key: hg(Ct, 819) + "n",
    value: function (t) {
      return n.toJson(t);
    }
  }, {
    key: "shuffleArray",
    value: function () {
      function t(t, n) {
        return fg(t, n - -1006);
      }
      var n, e;
      return (arguments[t(-153, -396) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : [])[n = 227, e = fn, vg(n, e - 745)](function () {
        return Math.random() > .5 ? 1 : -1;
      })[t(74, 144) + "r"](Boolean);
    }
  }, {
    key: "clear" + fg(Et, 1134),
    value: function () {
      function t(t, n) {
        return hg(n, t - 667);
      }
      function e(t, n) {
        return hg(t, n - 440);
      }
      function r(t, n) {
        return lg(n, t - ln);
      }
      function i(t, n) {
        return fg(t, n - -64);
      }
      var u, o, a, s;
      try {
        auto[i(1160, tn) + "ce"].serviceInfo = auto.service[t(1529, 1128) + "ceInfo"];
      } catch (t) {}
      return n.isFunction(auto["clear" + e(610, 1088)]) ? auto[i(nn, en) + "Cache"]() : n.isFunction(null === (u = auto.service) || 0 === u ? 0 : u.clearCache) ? (auto[e(1216, 1302) + "ce"][i(1668, 1258) + "Cache"](), !0) : !!(null !== (o = runtime[r(1736, 1823) + e(920, 722) + "ityBridge"]) && 0 !== o && null !== (a = o["getRo" + e(979, 804) + e(rn, 583) + "Window"]()) && 0 !== a && a[i(un, 721) + "sh"]() || null !== (s = auto["rootI" + r(on, 1607) + "veWindow"]) && 0 !== s && s[t(an, sn) + "sh"]()) || (this.logger.log("[clearCach" + r(1425, 1885) + "learC" + e(cn, 657) + "Fail."), !1);
    }
  }, {
    key: lg(1140, 1568) + "eCache",
    value: function () {
      function t(t, n) {
        return fg(n, t - -928);
      }
      app["sendB" + r(972, 1357) + "ast"](r(1954, 1649) + e(1120, Gt) + t(-144, 239) + t(Zt, 164) + "s");
      var n = this[r(1798, 1681) + "orPac" + e(_t, $t)](context.getPackageName());
      function e(t, n) {
        return lg(t, n - -455);
      }
      function r(t, n) {
        return fg(t, n - 646);
      }
      n && this.back(1e3);
      return n;
    }
  }, {
    key: "openConsol" + vg(-651, -303) + "l",
    value: function () {
      var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : {};
      return n.openConsolePanel(t);
    }
  }, {
    key: vg(-184, 198) + "ConsolePanel",
    value: function () {
      return n.closeConsolePanel();
    }
  }, {
    key: vg(St, 398) + "onsolePanel",
    value: function () {
      return n.hideConsolePanel();
    }
  }, {
    key: lg(1004, 1430) + "soleP" + hg(907, Mt) + "hown",
    value: function () {
      return n.isConsolePanelShown();
    }
  }, {
    key: "toggl" + fg(Bt, 1050) + "olePa" + lg(1315, 1352),
    value: function (t) {
      return n.toggleConsolePanel(t);
    }
  }, {
    key: "waitA" + hg(171, 633) + fg(981, 1140) + "ty",
    value: function () {
      var t, e, r, i;
      this[r = Ht, i = Xt, hg(i, r - 250) + "r"][t = 913, e = 739, fg(t, e - -49)]("[Accessibility]: 等待无障碍服务...");
      return n.openAccessibility();
    }
  }, {
    key: "close" + fg(1389, 920) + vg(176, -223) + "ity",
    value: function () {
      var t,
        e,
        r = 598;
      function i(t, n) {
        return lg(n, t - -796);
      }
      function u(t, n) {
        return lg(t, n - -44);
      }
      this[u(903, 1046) + "r"][t = 1785, e = 1386, fg(t, e - r)](u(Jt, Qt) + "ssibi" + i(149, -139) + ": 关闭无" + i(Lt, -2) + "..");
      return n.closeAccessibility();
    }
  }, {
    key: fg(980, 596) + vg(-594, -352) + "Engines",
    value: function () {
      var t = 1071,
        n = 1656,
        e = 550,
        r = 1590,
        i = this;
      function u(t, n) {
        return lg(n, t - -341);
      }
      for (var o = engines[u(843, Kt)](), a = function () {
          if (i[f(1223, 1637) + f(1493, 1670) + "d"]) {
            var a = o[s]["toStr" + h(691, t)]();
            if (["ui.js", "main.js", v(1625, n) + "up.js", "daemon", h(643, 1038) + "n.js"].map(function (t) {
              return a.includes(t);
            })[h(951, e) + "r"](Boolean)[c = -414, l = -841, u(c - -865, l) + "h"]) {
              i.logger.log("[kill" + v(1114, 661) + "sEngi" + v(r, 1862) + h(1087, 771) + v(1068, 1245) + "引擎不主动停止！");
              return 1;
            }
          }
          var c, l;
          function f(t, n) {
            return u(t - 327, n);
          }
          function h(t, n) {
            return u(t - -40, n);
          }
          function v(t, n) {
            return u(t - 542, n);
          }
          if (o[s] != engines["myEng" + h(254, -215)]()) {
            o[s][f(1533, 1069) + "Stop"]();
          }
        }, s = 0; s < o.length; s++) a();
    }
  }, {
    key: fg(92, 500) + "llEng" + hg(Rt, 477),
    value: function () {
      function t(t, n) {
        return vg(t, n - 203);
      }
      engines[t(-606, -187) + t(538, 422) + "Toast"]();
    }
  }, {
    key: lg(zt, 1545) + lg(1140, Tt),
    value: function (t) {
      var e,
        r,
        i = 1161,
        u = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {};
      function o(t, n) {
        return hg(n, t - -360);
      }
      this[o(Ut, -296) + "r"].log("[kill" + fg(575, 1069 - -256) + o(354, -113) + (hg(Vt, 1581 - 689) + "."));
      return n.killThread(t, n._extend({}, this[e = 2325, r = 2038, hg(e, r - i) + "hread" + o(Wt, -141) + "g"] || {}, u));
    }
  }, {
    key: vg(-15, 383) + "ngine",
    value: function (t) {
      var e = 1756;
      function r(t, n) {
        return vg(n, t - Ft);
      }
      var i = arguments[r(148, 19) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
      function u(t, n) {
        return hg(n, t - 380);
      }
      this[r(446, 387) + "r"].log("[kill" + (vg(1354, Ot - e) + "e]: 中") + (lg(Dt, 1990 - 636) + "."));
      return n.killEngine(t, n._extend({}, this[u(Pt, 1368) + r(523, Nt) + u(jt, qt) + "g"] || {}, i));
    }
  }]);
}();
if (!global["Compl" + xn(362, 726) + Cn(336, 400) + "re"]) {
  importClass(java.util.concurrent[Cn(648, 773) + Cn(484, 678) + Cn(313, 400) + "re"]);
  importClass(java.util[xn(256, 128) + kn(917, 1294)][Cn(359, 804) + xn(441, 154)]);
}
var jn = new WeakSet(),
  qn = function () {
    var t = 1558,
      e = 1966,
      r = 1653,
      i = 1025,
      u = 496,
      o = 347,
      a = 264,
      s = 1379,
      c = 1714,
      l = 88,
      f = 165,
      h = 128,
      v = 265,
      d = 889;
    function p(t, n) {
      return Pn(n, t - -72);
    }
    return n._createClass(function t() {
      var e, r, i, u;
      function o(t, n) {
        return bn(t - -294, n);
      }
      n._classCallCheck(this, t);
      In(this, jn);
      this[e = -90, r = -331, bn(e - -965, r)] = threads.lock();
      this[o(989, 1002)] = 0;
      this.intervalId = null;
      this[i = 1635, u = 1667, bn(i - 911, u) + o(1018, d) + "me"] = 300;
    }, [{
      key: p(829, 713) + "sk",
      value: function () {
        function t(t, n) {
          return p(n - -1080, t);
        }
        function n(t, n) {
          return p(n - 127, t);
        }
        function e(t, n) {
          return p(t - v, n);
        }
        function r(t, n) {
          return p(n - -1210, t);
        }
        this[r(u, 128)].lock();
        this.tasks++;
        if (null === this[e(1452, 1325) + r(114, 574)]) {
          if ("CripF" !== n(1605, 1467)) {
            var i = arguments[e(1255, 998) + "h"] > 2 && arguments[2] !== Sldsoswdtus ? arguments[2] : {};
            i = Ghfteyqchks({
              sleep: 100,
              duration: 1,
              width: 0,
              height: 0
            }, i);
            if (!this[e(1307, 1565) + "ilabl" + t(-16, 435)](Pyuvnmfxibg, Hxmwbihmhxo)) {
              this.logger.warn(n(2320, 1879) + "lick]" + r(-370, -193) + "Not Available A" + r(630, o), Fwyyzdmfiid, Uohlmvaogst);
              return !1;
            }
            var d = this[n(1062, 1228)](Rtgxqbyibyc + this[r(a, -12) + "ndom"](-i[e(1218, s)] / 2, i[r(-748, -257)] / 2), Grblvaoeycq + this[t(-9, 118) + "ndom"](-i[t(-495, -127)] / 2, i[t(-80, -162) + "t"] / 2), i[e(1438, c) + "ion"]);
            this.sleep(i.sleep);
            var g = this[e(1366, 1611)](Pokwljbbswt + this.getRandom(-i.width / 2, i[n(582, 1080)] / 2), Mjomqqyptrd + this.getRandom(-i.width / 2, i[n(546, 1045) + "t"] / 2), i[n(1494, 1300) + "ion"]);
            this.logger[t(378, l)](t(301, 672) + r(f, -112) + ":", Mtfayogcmxv, Fijebrzitts);
            return d && g;
          }
          (function (t, n, e) {
            var r = 1601,
              i = 43,
              u = 397,
              o = 687;
            if (s(1979, 2248) + s(1201, 1610) == typeof t ? t === n : t.has(n)) {
              return arguments[a(1, -99) + "h"] < 3 ? n : e;
            }
            function a(t, n) {
              return bn(n - -626, t);
            }
            function s(t, n) {
              return bn(t - 765, n);
            }
            function c(t, n) {
              return bn(n - 53, t);
            }
            throw new TypeError(c(r, 1121) + a(68, i) + "ement is n" + a(u, -78) + bn(1240, 1948) + a(401, 246) + "his o" + c(o, 462));
          })(jn, this, Fn).call(this);
        }
        this[r(373, h)].unlock();
      }
    }, {
      key: "removeTask",
      value: function () {
        function n(t, n) {
          return p(t - 220, n);
        }
        function u(t, n) {
          return p(t - -377, n);
        }
        this[n(t, 1812)].lock();
        this[n(e, r)]--;
        this[u(961, 860)][u(i, 1373) + "k"]();
      }
    }]);
  }();
function Fn() {
  var t = 564,
    n = 173,
    e = 457;
  function r(t, n) {
    return kn(n, t - -31);
  }
  var i = this;
  this[r(1126, 1167) + "valId"] = setInterval(function () {
    function u(t, n) {
      return r(t - -1168, n);
    }
    var o, a;
    function s(t, n) {
      return r(n - -713, t);
    }
    i.lock[s(629, t)]();
    0 === i.tasks && (clearInterval(i[s(581, 413) + s(1372, 1010)]), i[o = 1840, a = 1570, r(a - 444, o) + "valId"] = null);
    i[u(109, 147)][u(n, e) + "k"]();
  }, this.intervalTime);
}
function Un(t, n) {
  var e = Vn();
  return (Un = function (t, n) {
    return e[t -= 339];
  })(t, n);
}
function Vn() {
  var t = ["sicVo", "umtim", "GONE", "Jvilt", "geAda", "run", "RfDVU", "Mode", "ess", "showT", "tal>\n", "tory", "olor=", "eConf", "限”辅助功", "rType", "atyTo", "sibil", "eFloa", "messa", "text ", " </fr", "5sp 0", '" bor', "isAcc", 'ty="c', "butto", "abs", " visi", "uterS", "ner", "  </h", "/hori", ">\n   ", "]: 未启", "VISIB", "ter]:", "p.png", "ACTIO", "    <", "yOCRA", "exitA", "onsol", "ry...", "Ojhru", "getRa", 'y="go', '" tex', "AppNa", "atar", "isOwn", "hidTy", '" mar', "reScr", "  <fr", "ibili", "isBez", "ByRan", "join", "l>\n  ", "ity", "btnAv", '" w="', 'dth="', "bindR", ' w="', 'in="5', "utoJS", "devic", "hread", "apply", "eAdap", "exitO", "view", '*" h=', "HID模式", '" alp', 'p" gr', "uchab", "yOCR", "22usFMdr", "ge/bt", "eDest", "waitA", "desto", '="btn', "arams", "5667678OsNBbG", "isHID", "Liste", "RAdap", "图权限”辅", "click", " 未启用“", "logFi", "essib", ' id="', "N_UP", "n-pla", "kxdUL", '" />\n', "tColo", "isBoo", "tion", "eenDo", 'sp 0"', 'ity="', "meMod", "21265rYQoHh", "setTo", "ageAd", "ols", "ead", "N_MOV", 'id="f', "killT", "getRo", "s/ima", "ory", "279282sJoMTL", "rderC", "start", "serve", "  <ho", "无障碍模式", "assig", "nCapt", "oast", "dex3", "imeou", "SPEED", "536isQnxu", "ierSw", "MEDIU", "creen", "keepS", "setTe", "dom", "用“截图权", "Engin", 'ius="', "isCap", "eHeig", "tal i", "findB", "utWra", "3chFvsg", "fore", "setPo", '1" bo', "winFl", "ightn", "FAST", "pture", "”辅助功能", "ByOCR", 'w="au', "nel", "hideC", "ning", "logge", "btnLo", "Panel", "atyMe", "$on", "float", "nuPos", "明度失败:", "sleep", "eenBe", "dapte", 'gin="', "etect", "local", "t.png", "     ", "getVi", "btnPl", '" h="', "nClos", "fwvQo", "gravi", "ition", "rizon", "waitF", "79429NwMBlz", '" rad', "停止运行.", "1436880QUixFG", "ructo", 'Play"', "cwd", "lengt", "isRun", ' bg="', "runti", "ageBa", '">\n  ', "contr", 'Exit"', "apter", "speed", "cycle", "derWi", "cente", "395462cOxfsl", 'c="', "setOn", "info", 'w="', "yout_", "[clic", "er]: ", "chabl", ' 2sp"', 'o" gr', "SLOW", '"  sr', "ePane", "32uGpgIb", "pter", "tText", "mg id", "asset", " </ho", "timeo", "View", 'Log" ', 'id="t', "execu", "ckage", 'ha="1', "ntal ", "Scree", "setBr", "inter", "setVi", "脚本运行模", "Confi", "conca", "tyMen", "initA", "untim", '"10sp', "oaty", "oller", 'ty="g', "ipe", "setMu", "stopS", "warn", "rupt", " done", "127437ImDBBA", '="cen', 'd="ti', "isFlo", "$emit", "sitio", "助功能..", "olThr", "setSo", " 已停止运", "截图权限”", "ry ex", 'ter" ', "n-exi", "ility", "getOb", "Type", "isAge", "...", "setLe", '"auto', "setOb", "ByIma", "log", "</tex", ": 未启用", "erver", "thers"];
  return (Vn = function () {
    return t;
  })();
}
function Yn() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (Yn = function () {
    return !!t;
  })();
}
{
  n._createClass(function t() {
    n._classCallCheck(this, t);
  });
  (function (t) {
    var e = 1787,
      r = 1355,
      i = 647,
      u = 863,
      o = 1324,
      a = 1467,
      s = 400,
      c = 652,
      l = 784,
      f = 809;
    function h(t, n) {
      return Pn(n, t - -518);
    }
    function v() {
      var t,
        e,
        r,
        i,
        u,
        o,
        a,
        s,
        c,
        l,
        f,
        h,
        d = arguments[e = 811, r = 654, bn(e - 284, r) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {};
      n._classCallCheck(this, v);
      o = this;
      a = v;
      s = [d];
      a = n._getPrototypeOf(a);
      (t = n._possibleConstructorReturn(o, wn() ? Reflect["const" + (f = 600, h = 988, bn(f - -230, h))](a, s || [], n._getPrototypeOf(o).constructor) : a[c = -185, l = -266, bn(l - -734, c)](o, s)))[i = 413, u = 706, bn(u - 346, i)] = new qn();
      t.th = threads.currentThread();
      return t;
    }
    function d(t, n) {
      return Pn(n, t - 35);
    }
    n._inherits(v, t);
    n._createClass(v, [{
      key: "threa" + d(e, r) + "ise",
      value: function (t) {
        var n = 1706,
          e = 1252,
          r = 745,
          i = this;
        return new Promise(function (u, o) {
          var a = 753,
            s = CompletableFuture.supplyAsync(t);
          s.thenAccept(function (t) {
            var n = 1399,
              o = 516,
              a = 228;
            function s(t, n) {
              return bn(n - 390, t);
            }
            function c(t, n) {
              return bn(n - -896, t);
            }
            function l(t, n) {
              return bn(n - -439, t);
            }
            if ("CbVbB" !== s(e, 1381)) {
              return i.th["setIm" + l(93, 514) + "te"](function () {
                var e,
                  r,
                  i,
                  s = 585,
                  c = 1060;
                function f(t, n) {
                  return l(n, t - c);
                }
                function h(t, n) {
                  return bn(t - -280 - 143, n);
                }
                if ("xMzYg" === f(1e3, 676)) {
                  return u(t);
                }
                uolxvntazgv = (e = giνotxldpde)["adapt" + (r = 1036, i = 1413, l(i, r - s) + "reshold")].apply(e, [qcanqqedqzf][f(n, 1630) + "t"](qvrrhwlwνfp(hνemetbjkdr["adapt" + h(753, o) + h(a, 85) + "ld"])));
              });
            }
            this[c(152, -71) + "r"][c(-6, -191)]("[laun" + s(r, 950) + c(-296, -361) + ": 点击允许唤醒第三" + s(2107, 1636));
          });
          s.exceptionally(function (t) {
            return i.th["setIm" + (e = n, r = 1689, bn(e - a, r) + "te")](function () {
              return o(t);
            });
            var e, r;
          });
        });
      }
    }, {
      key: "threa" + h(948, 895),
      value: function () {
        var t = 483,
          e = 1780,
          r = 1470,
          i = 260,
          u = 248;
        function o(t, n) {
          return d(t - 97, n);
        }
        var a = n._asyncToGenerator(n.iKipjztνxth[o(1981, 2345)](function a(s) {
          var c,
            h = 33;
          function v(t, n) {
            return o(t - -800, n);
          }
          return n.iKipjztνxth[v(l, f)](function (n) {
            function o(t, n) {
              return v(n - -645, t);
            }
            function a(t, n) {
              return v(n - 386, t);
            }
            function l(t, n) {
              return v(t - h, n);
            }
            for (;;) switch (n[l(297, t)] = n.next) {
              case 0:
                {
                  c = this["threa" + a(e, r) + "ise"](s);
                  this[l(i, 230)].addTask();
                  n.prev = 1;
                  n[a(1594, 1181)] = 2;
                  return Promise.resolve(c);
                }
              case 2:
                {
                  return n[f = 1024, d = 1142, v(d - 555, f) + "t"](o(605, 255) + "n", n[o(-171, -154)]);
                }
              case 3:
                {
                  n.prev = 3;
                  this[l(260, 647)][a(382, 741) + a(1475, 1479)]();
                  return n[l(u, -63) + "h"](3);
                }
              case 4:
                {}
              case "end":
                {
                  return n[o(-413, -175)]();
                }
            }
            var f, d;
          }, a, this, [[1,, 3, 4]]);
        }));
        return function (t) {
          return a[n = 879, e = 411, o(n - -256, e)](this, arguments);
          var n, e;
        };
      }()
    }, {
      key: h(803, i),
      value: function (t) {
        function n(t, n) {
          return h(t - 543, n);
        }
        return t[n(935, 1377)](function (t) {
          return [null, t];
        })[n(1313, 957)](function (t) {
          return [t, 0];
        });
      }
    }, {
      key: h(1007, 1254),
      value: function (t) {
        if (!n.isFunction(t)) {
          var e = t;
          t = function () {
            return e;
          };
        }
        return Promise.try(t);
      }
    }, {
      key: "$wait",
      value: function () {
        function t(t, n) {
          return kn(n, t - -1039 - 395);
        }
        var n = arguments[i(-393, -333) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 ? arguments[1] : 0;
        function r(t, n) {
          return d(n - -945, t);
        }
        e && (n = this.getRandom(n, e));
        if (n <= 0) {
          return Promise[i(295, -105) + "ve"](!0);
        }
        function i(t, n) {
          return kn(n, t - -1779 - 426);
        }
        this.logger[r(-144, 330)]((r(87, 94) + "]: for ")[t(567, 525) + "t"](n, t(c, 285) + "."));
        return new Promise(function (t) {
          return setTimeout(function () {
            return t(!0);
          }, n);
        });
      }
    }, {
      key: h(863, 1039) + "p",
      value: function (t, n) {
        return this.$wait(t, n);
      }
    }, {
      key: h(u, o) + d(997, a) + "ndom",
      value: function () {
        function t(t, n) {
          return h(t - -463, n);
        }
        var n = arguments[t(81, 256) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : 0;
        return this[t(s, 448) + "p"](this.getRandom(n, e));
      }
    }]);
  })(Nn);
  (function () {
    var t = 1233,
      n = 1338,
      e = 1266,
      r = 1114,
      i = 1116,
      u = 102;
    function o(t, n) {
      return Un(t - 844, n);
    }
    var a,
      s,
      c,
      l,
      f = Vn();
    function h(t, n) {
      return Un(t - 722, n);
    }
    for (;;) try {
      if (407606 === -parseInt(o(1301, 1259)) / 1 + -parseInt(h(1131, 997)) / 2 * (-parseInt(o(1194, 1306)) / 3) + parseInt(h(1145, 1025)) / 4 * (-parseInt(o(1437, 1341)) / 5) + -parseInt(o(1448, 1330)) / 6 + -parseInt(o(t, 1151)) / 7 * (-parseInt(h(n, e)) / 8) + -parseInt((c = 38, l = 42, Un(l - -530, c))) / 9 + -parseInt(h(r, i)) / 10 * (-parseInt((a = 188, s = u, Un(a - -377, s))) / 11)) {
        break;
      }
      f.push(f.shift());
    } catch (t) {
      f.push(f.shift());
    }
  })();
}
var Wn = function (t) {
    var e = 1160,
      r = 1430,
      i = 1274,
      u = 1200,
      o = 576,
      a = 527,
      s = 216,
      c = 357,
      l = 404,
      f = 323,
      h = 331,
      v = 285,
      d = 255,
      p = 1397,
      g = 1206,
      y = 1297,
      m = 938,
      k = 410,
      x = 739,
      b = 1448,
      A = 1091,
      w = 1158,
      I = 481,
      C = 475,
      E = 748,
      S = 385,
      M = 83,
      B = 304,
      z = 239,
      T = 196,
      O = 437,
      D = 1556,
      P = 1452,
      N = 53,
      j = 1241,
      q = 1284,
      F = 1162,
      U = 657,
      V = 1258,
      Y = 1237,
      W = 912,
      K = 1042,
      J = 1135,
      Q = 1247,
      L = 1131,
      H = 567,
      X = 568,
      G = 721,
      Z = 1162,
      _ = 954,
      $ = 886,
      tt = 903,
      nt = 839,
      et = 1255,
      rt = 1252,
      it = 1253,
      ut = 1274,
      ot = 1201,
      at = 665,
      st = 1147,
      ct = 928,
      lt = 1217,
      ft = 479,
      ht = 1068,
      vt = 1211,
      dt = 568,
      pt = 780,
      gt = 574,
      yt = 615,
      mt = 1224,
      kt = 1122,
      xt = 736,
      At = 666,
      wt = 942,
      It = 1044,
      Ct = 675,
      Et = 549,
      St = 545,
      Mt = 996,
      Bt = 1083,
      Rt = 705,
      zt = 864,
      Tt = 568,
      Ot = 695,
      Dt = 1098,
      Pt = 831,
      Nt = 766,
      jt = 1180,
      qt = 723,
      Ft = 585,
      Ut = 1062,
      Yt = 470,
      Wt = 946,
      Kt = 1113,
      Jt = 79,
      Qt = 78,
      Lt = 36,
      Ht = 1264,
      Xt = 1348,
      Gt = 1454,
      Zt = 1313,
      _t = 64,
      $t = 137,
      tn = 138,
      nn = 43,
      en = 1561,
      rn = 912,
      un = 848,
      on = 64,
      an = 672,
      sn = 18,
      cn = 39,
      ln = 587,
      fn = 1050,
      hn = 976,
      vn = 503,
      dn = 984,
      pn = 894,
      gn = 920,
      yn = 553,
      mn = 856,
      kn = 120,
      xn = 1022,
      bn = 427,
      An = 568,
      wn = 482,
      In = 352,
      Cn = 380,
      En = 1343,
      Sn = 1208,
      Mn = 1268;
    function Bn(t, n) {
      return Un(t - -619, n);
    }
    function Rn(t, n) {
      return Un(n - -781, t);
    }
    function zn() {
      var t,
        e,
        r,
        i,
        u,
        o,
        a,
        s,
        c,
        l,
        f,
        h,
        v = arguments[d(786, 807) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {};
      function d(t, n) {
        return Un(n - 411, t);
      }
      n._classCallCheck(this, zn);
      (h = function (t, e, r) {
        var i = 521;
        function u(t, n) {
          return Un(n - i, t);
        }
        e = n._getPrototypeOf(e);
        return n._possibleConstructorReturn(t, Yn() ? Reflect.construct(e, r || [], n._getPrototypeOf(t)["const" + u(1027, 914) + "r"]) : e[u(1040, 1076)](t, r));
      }(this, zn, [{
        AppName: v[g(-242, -199) + "me"],
        AppPackage: v["AppPa" + y(-108, 2)],
        logFilePath: v[d(1106, 990) + "lePath"]
      }])).logger[d(827, 887) + "vel"](parseInt(null !== (t = v[g(-411, -286) + "rType"]) && 0 !== t ? t : h[d(807, 775) + "r"].LEVELS.LOG));
      0 !== v[d(783, 775) + y(111, 68)] && h["openC" + g(-248, -194) + "ePanel"]();
      h["isFlo" + d(1021, rn) + m(480, 585)] = null === (e = v[g(-315, -317) + "atyTo" + g(-179, -41)]) || 0 === e || e;
      h["isFlo" + d(un, 778) + y(on, -62) + m(392, 375)] = null !== (r = v[d(945, 871) + "atyMe" + d(725, 781) + g(-389, -385)]) && 0 !== r && r;
      null !== (i = v.runtimeMode) && 0 !== i ? h[d(902, 810) + "meMode"] = i : h[d(902, 810) + "meMode"] = 2;
      null !== (u = v[g(-239, -187) + "pe"]) && 0 !== u ? h.hidType = u : h.hidType = 0;
      h["isAcc" + m(an, 569) + y(sn, cn) + "Mode"] = 1 === h["runti" + g(-183, -309) + "e"];
      h[d(970, 885) + "ntMode"] = 2 === h["runti" + m(ln, 581) + "e"];
      h[d(fn, 984) + "Mode"] = 3 === h[y(86, -33) + g(-183, -121) + "e"];
      var p = {
        1: g(-166, -31),
        2: "代理模式",
        3: d(833, 971)
      };
      h.logger[g(-363, -424)]((d(hn, 852) + "式：")[y(-89, 11) + "t"](p[h[g(-376, -298) + "meMode"]]));
      h["isCap" + m(495, vn) + "creen"] = h[d(855, dn) + "Mode"];
      h[d(pn, gn) + m(634, 569) + "ilityMode"] && h[m(627, 557) + "ccess" + y(86, 108) + "ty"]();
      if (h[m(yn, 463) + "ntMode"]) {
        if ("kxdUL" !== g(-191, -85)) {
          this[g(-411, -514) + "r"][m(441, 469)]("[findByImageAdapter]: 未启用“截图权限" + g(-417, -547) + g(-300, -286));
          return !1;
        }
        bt[d(973, mn) + y(170, kn)](h);
        global.id = function (t) {
          return idEndsWith(t);
        };
      }
      function g(t, n) {
        return Un(t - -775, n);
      }
      function y(t, n) {
        return Un(n - -432, t);
      }
      function m(t, n) {
        return Un(n - -11, t);
      }
      h[g(-202, -68) + "Mode"] && (h.requestScreenCapture(!0, !1), Vt.initAutoJS(h, {
        hidType: h.hidType
      }), h.startupHID = Vt);
      (h[m(422, 334) + "uterScreen"] || h[d(849, 984) + d(877, 903)]) && (h["requestScreenCa" + y(-110, -75)](!0), 0 != v.loggerType && (h.$on("captu" + d(813, 949) + d(790, 784) + m(240, 340), function () {
        function t(t, n) {
          return g(n - 1621, t);
        }
        h[t(En, Sn) + "onsol" + t(1291, Mn) + "l"]();
        h[function (t, n) {
          return m(t, n - 997);
        }(1427, 1358)](100);
      }), h.$on("captu" + g(-237, -213) + g(-186, -317) + "ne", function () {
        var t, n;
        return h["openConsol" + (t = 1327, n = 1442, d(n, t - 494) + "l")]();
      })));
      h[g(-226, -205) + g(-329, -211) + d(xn, 909) + "ig"] = {
        keepScreenOn: null === (o = v[d(738, 750) + "creenOn"]) || 0 === o || o,
        setBrightnessMode: null === (a = v[m(486, bn) + y(-141, -77) + "essMode"]) || 0 === a || a,
        setBrightness: null === (s = v["setBrightn" + m(An, wn)]) || 0 === s || s,
        setMusicVolume: null === (c = v[g(-323, -453) + d(864, 896) + "lume"]) || 0 === c || c
      };
      h.isBezierSwipe = null === (l = v[m(426, 530) + m(491, 606) + g(-324, -268)]) || 0 === l || l;
      h[y(291, 183)] = {
        FAST: 1,
        MEDIUM: 2,
        SLOW: 3
      };
      null !== (f = v["speed" + y(87, 41)]) && 0 !== f ? h[d(687, 816) + "Type"] = f : h[d(687, 816) + "Type"] = h.SPEED[y(264, 186) + "M"];
      h["killT" + g(-221, -87) + d(958, 853) + "g"] = {
        num: 2
      };
      h["isRun" + m(376, In)] = !0;
      h[m(Cn, 449) + "atyTo" + y(146, 164)] && (h.floatyThread = threads.start(function () {
        function t(t, n) {
          return d(n, t - 47);
        }
        return h["creat" + t(961, 822) + t(902, 850) + "u"]();
      }));
      return h;
    }
    function Tn(t, n) {
      return Un(n - 776, t);
    }
    function On(t, n) {
      return Un(n - -798, t);
    }
    n._inherits(zn, t);
    return n._createClass(zn, [{
      key: "init",
      value: function () {
        var t = this;
        function n(t, n) {
          return Un(n - 970, t);
        }
        function e(t, n) {
          return Un(n - -333, t);
        }
        function r(t, n) {
          return Un(n - -510, t);
        }
        function i(t, n) {
          return Un(n - -334, t);
        }
        this["killO" + n(Xt, Gt) + n(1442, Zt) + "es"]();
        this["bindR" + r(-37, -64) + "e"](this[n(1409, 1519) + e(_t, 113) + "eConfig"]);
        this["isAccessib" + e($t, tn) + i(279, 158)] && this["bindD" + e(169, nn) + "orForExit"](function () {
          return t.destory();
        });
        this.initRumtime && this["initR" + i(56, 152) + "e"]();
        this[r(54, -16) + n(en, 1582)](this[r(-73, 23) + "me"] + "初始化成功！");
        !this[i(306, 253) + "tstrap"] && this.onExit(function () {
          function n(t, n) {
            return e(t, n - -619);
          }
          return alert(t.exitMessage || "脚本 ".concat(t[n(-430, -419) + "me"], n(-553, -486) + "行!"));
        });
        this.startup();
      }
    }, {
      key: Tn(1288, 1382) + "up",
      value: function () {
        var t = 499,
          n = 593;
        function e(t, n) {
          return Tn(n, t - -1657);
        }
        function r(t, n) {
          return Tn(n, t - -41);
        }
        if ("BITUb" === r(Ht, 1181)) {
          return wovqavtsbxz.destory();
        }
        var i = this;
        this["contr" + e(-417, -365) + r(1332, 1221)] && this[e(-281, -356) + e(-327, -218)](this.controlThread) && (this.controlThread = null);
        this[e(-479, -399) + "olThread"] = threads[r(1341, 1221)](function () {
          function r(t, n) {
            return e(t - 1025, n);
          }
          return i[r(550, t) + "Contr" + r(n, 561)]();
        });
      }
    }, {
      key: "createFloa" + Rn(-226, -337) + "u",
      value: function () {
        var t = 177,
          n = 285,
          e = 258,
          r = 521,
          i = 421,
          u = 776,
          o = 761,
          a = 153,
          s = 1043,
          c = 418,
          l = 527,
          f = 449,
          h = 390,
          v = 240,
          d = 1073,
          p = 1178,
          g = 1042,
          y = 615,
          m = 571,
          k = 504,
          x = this;
        if (this[B(1058, 1177) + P(-420, -558)]) {
          return this.winFloaty;
        }
        var b = "#824cc2",
          A = this[B(Y, 1236) + "me"] || "--",
          w = function (t) {
            function n(t, n) {
              return V(n - -231, t);
            }
            function e(t, n) {
              return B(n - -1360, t);
            }
            function r(t, n) {
              return B(n - -678, t);
            }
            if ("RfDVU" === e(-202, -165)) {
              return x["getIm" + n(571, 654) + "se64"](t) || b;
            }
            fsvkfpqomxt.winFloaty.timeoutWrap["setVi" + e(-133, -154) + r(y, m)](ecqxoaνecmg[r(715, 584)][r(404, 456)][n(834, 774) + "LE"]);
            wxpdbrwvalu[e(-261, -302) + "oaty"].timeoutText[n(k, 594) + "xt"]("倒计时".concat(ffqefvzrnuj, "秒"));
          },
          I = files[V(880, 748)](),
          C = 35,
          E = 350,
          S = w(files[V(1028, 1071)](I, V(W, 795) + "s/logo.png")),
          M = w(files[V(1028, K)](I, "asset" + T(791, 691) + "ge/bt" + P(-285, -331) + "y.png"));
        function B(t, n) {
          return Rn(n, t - 1485);
        }
        var z = w(files[P(-325, -426)](I, "asset" + V(1087, J) + P(-302, -241) + "n-sto" + V(1007, 972)));
        function T(t, n) {
          return Tn(n, t - -587);
        }
        var O = w(files[B(Q, 1327)](I, B(L, 1200) + B(1306, 1211) + "ge/btn-log.png")),
          D = w(files[B(1247, 1184)](I, B(1131, 1174) + B(1306, 1264) + "ge/bt" + P(-398, -332) + T(H, 476)));
        function P(t, n) {
          return Tn(n, t - -1644);
        }
        var N,
          j = ("\n    " + T(X, 689) + "     " + B(1243, 1176) + 'ame w="aut' + T(608, G) + "avity" + B(Z, 1062) + V(_, 1041) + V(1084, 984) + "loaty" + B(1070, 1091) + V($, 1020) + P(-489, -471) + T(568, 647) + T(X, 609) + "   <horizo" + T(625, 656) + 'id="panel"' + P(-350, -360) + '                     <img id="btnAvatar" w="').concat(C, '" h="')[T(632, 711) + "t"](C, '" src="')[V(928, tt) + "t"](S, '" rad' + P(-524, -462))[B(1147, 1008) + "t"](E, '" borderWidth="1" bo' + P(-263, -205) + B(1201, 1332) + '"gray' + B(1289, 1419) + P(-489, -413) + V(864, nt) + B(1083, 1073) + "     " + T(713, 747) + "horizontal" + P(-287, -295) + 'buttons" alpha="0.8" marg' + B(et, rt) + B(1294, it) + V(998, 1025) + "bilit" + T(720, 676) + 'ne">\n' + P(-489, -454) + P(-489, -422) + B(1083, 1002) + "     " + V(864, 889) + "   <i" + V(911, 1037) + B(ut, ot) + V(879, 800) + ' w="')[T(632, at) + "t"](C, '" h="')[P(-425, -509) + "t"](C, '" rad' + P(-524, -457))[B(st, 1081) + "t"](E, '" src="').concat(M, T(726, 609) + 'gin="5sp 0' + T(697, 656) + 'derWidth="1" bo' + P(-263, -369) + 'olor="gray" />\n                            <img id' + B(ut, 1256) + B(1135, 995) + B(1117, 1219)).concat(C, T(571, 587))[V(ct, 958) + "t"](C, B(1094, lt) + 'ius="')[P(-425, -310) + "t"](E, '" src="')[P(-425, -533) + "t"](O, B(1241, 1344) + T(564, ft) + V(992, 915) + '" bor' + P(-461, -401) + V(1033, 995) + '1" bo' + V(1090, 1047) + 'olor="gray" />\n     ' + P(-489, -438) + "          " + P(-489, -520) + "   <img id" + V(1055, 1133) + T(592, 606) + B(1254, 1204)).concat(C, V(867, 972))[T(632, 770) + "t"](C, '" rad' + B(1048, 912))[P(-425, -423) + "t"](E, T(610, 723) + B(1114, ht)).concat(D, '" margin="' + B(vt, 1250) + V(993, 1042) + P(-461, -453) + T(737, 621) + V(838, 824) + "rderC" + V(982, 1032) + '"gray" />\n                        <' + P(-351, -266) + "zonta" + P(-324, -325) + T(dt, 517) + "               " + P(-260, -127) + "rizon" + V(832, 896) + T(648, 529) + 'meoutWrap" grav' + T(pt, 703) + B(1112, 1138) + 'r" la' + V(899, 964) + T(gt, yt) + B(1214, mt) + 'enter" padding=' + P(-421, -536) + B(kt, 1047) + V(883, 817))[P(-425, -350) + "t"](b, T(xt, 790) + V(1044, 1181) + T(At, 711) + '" mar' + B(1079, wt) + "5sp 0" + V(1046, 1103) + T(624, 542) + '" vis' + P(-328, -193) + V(935, It) + 'one">\n    ' + B(1083, 981) + "                   <" + V(990, 1033) + V(917, 1031) + B(1318, 1182) + P(-443, -458) + T(721, 816) + V(1071, 990) + 'r="#FFFFFF' + P(-336, -401) + 'tSize="10s' + B(1266, 1315) + "avity" + T(647, Ct) + 'ter" ' + T(Et, St) + 'to" h="auto" la' + P(-454, -452) + B(1089, 1126) + 'ty="center">')[V(928, Mt) + "t"](A, P(-387, -440) + "t>\n            " + B(Bt, 1028) + "     " + T(Rt, 590) + "orizontal>\n    " + V(zt, 958) + P(-489, -530) + "     " + B(1132, 1131) + P(-481, -512) + V(980, 1009) + T(Tt, 612) + "          " + T(Ot, 830) + "ame>\n" + B(1083, 1008) + "       "),
          q = "winPointIn" + V(Dt, 1123),
          F = this[P(-514, -647) + "oaty"] = floaty.rawWindow(j);
        this[V(853, 796)]("startup", function () {
          function t(t, n) {
            return P(t - 264, n);
          }
          function n(t, n) {
            return V(t - -1469, n);
          }
          var e = arguments.length > 0 && 0 !== arguments[0] && arguments[0];
          x[n(-587, -594) + n(-621, -726)] ? (F[t(-223, -157) + "ay"].setSource(z), !e && x[n(-620, -527) + "r"].info("开始运行..")) : (F.btnPlay[t(-139, -114) + "urce"](M), !e && x.logger.info(function (t, n) {
            return T(t - -779, n);
          }(-199, -183) + ".."));
          !e && x.isTaskDone && x.startup();
        });
        this.$on("timeout", function () {
          var t = 948,
            n = 346,
            e = 883,
            r = 761,
            i = 1149,
            u = 726,
            o = 225;
          function a(t, n) {
            return T(t - -624, n);
          }
          var s,
            c,
            l,
            f = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 0;
          if (f <= 0) {
            ui[h(v, 376)](function () {
              function t(t, n) {
                return h(n, t - 669);
              }
              function n(t, n) {
                return h(t, n - 747);
              }
              return x[n(946, 987) + "oaty"]["timeo" + t(904, 996) + "p"][n(1180, d) + (e = 1392, r = 1308, h(r, e - 1004)) + n(1262, p)](android.view.View[t(g, 953)]);
              var e, r;
            });
            null === (s = N) || 0 === s || s[a(4, -106) + (c = 1111, l = 1244, P(l - 1657, c))]();
            N = null;
            return !1;
          }
          function h(t, n) {
            return B(n - -818, t);
          }
          N = threads.start(function () {
            var a = 1096,
              s = 1005,
              c = 949;
            ui.run(function () {
              function a(t, n) {
                return Un(n - -174, t);
              }
              function s(t, n) {
                return Un(t - 614, n);
              }
              function c(t, n) {
                return Un(n - 407, t);
              }
              x.winFloaty[s(1043, t) + s(963, 882) + "p"].setVisibility(android.view.View[a(296, n) + "LE"]);
              x[c(e, r) + "oaty"][s(1043, i) + "utText"][c(u, 747) + "xt"]("倒计时"[a(o, 269) + "t"](f, "秒"));
            });
            setInterval(function () {
              var t = 344,
                n = 1365;
              function e(t, n) {
                return Un(n - -609, t);
              }
              --f <= 0 && (ui[e(-127, -119)](function () {
                function t(t, n) {
                  return e(n, t - 293);
                }
                function n(t, n) {
                  return e(t, n - 1184);
                }
                return x[t(38, 10) + "oaty"]["timeo" + t(33, -92) + "p"]["setVi" + t(186, 279) + n(a, 1120)](android[r = 183, i = 277, e(i, r - 234)][n(960, s)][n(c, 1062)]);
                var r, i;
              }), N = null);
              ui.run(function () {
                var r,
                  i,
                  u,
                  o,
                  a = 134;
                function s(t, n) {
                  return e(n, t - -66);
                }
                function c(t, n) {
                  return e(n, t - 426);
                }
                if (s(-291, -233) === s(-291, -418)) {
                  return x[u = -121, o = -190, e(o, u - a) + "oaty"][s(-246, -223) + "utText"][r = n, i = 1331, e(r, i - 1600) + "xt"]("倒计时"[c(260, 177) + "t"](f, "秒"));
                }
                this[c(343, t) + "pp"]();
              });
            }, 1e3);
          });
          N[a(-47, -145) + "or"]();
        });
        var U = function () {
          function t(t, n) {
            return P(t - 402, n);
          }
          function n(t, n) {
            return B(t - -1184, n);
          }
          function e(t, n) {
            return V(t - -545, n);
          }
          F[e(451, 580) + "ns"][e(320, 193) + "sibil" + t(Jt, 31)]() === android[n(Qt, 186)].View[n(7, -122)] ? F[n(31, 17) + "ns"]["setVisibil" + n(65, -74)](android.view.View.VISIBLE) : F.buttons[t(-26, -85) + t(Lt, 119) + n(65, -44)](android[t(92, 108)].View.GONE);
        };
        F[V(837, 745) + "sition"](this.deviceWidth + 200, this[P(-315, -180) + V(Pt, Nt) + "ht"] + 200);
        function V(t, n) {
          return Tn(n, t - -291);
        }
        (function (t, n) {
          var e,
            r,
            i,
            u,
            o,
            a,
            s = 1499,
            v = 1351,
            d = 1574,
            p = 599,
            g = 1384,
            y = 1328,
            m = 1343,
            k = 1110,
            b = 554,
            A = 743,
            w = 875;
          function I(t, n) {
            return P(t - w, n);
          }
          function C(t, n) {
            return B(t - -346, n);
          }
          function E(t, n) {
            return P(n - A, t);
          }
          null == t || t[I(c, 281) + "Touch" + E(l, f) + E(350, h)](function (t, c) {
            var l = 969;
            function f(t, n) {
              return I(n - l, t);
            }
            function h(t, n) {
              return C(n - -341, t);
            }
            function A(t, n) {
              return C(t - 382, n);
            }
            switch (c["getAc" + A(1328, 1408)]()) {
              case c[f(1503, s) + "N_DOWN"]:
                {
                  e = c.getRawX();
                  r = c[A(1270, v) + "wY"]();
                  i = F.getX();
                  u = F.getY();
                  return !0;
                }
              case c[h(469, 540) + f(1699, d) + "E"]:
                {
                  o = c.getRawX() - e;
                  a = c.getRawY() - r;
                  F.setPosition(i + o, u + a);
                  return !0;
                }
              case c[f(1409, 1499) + h(707, p)]:
                {
                  return Math.abs(c[f(g, 1506) + "wY"]() - r) < 5 && Math[w(-143, -68)](c[w(-125, -33) + "wX"]() - e) < 5 ? (n && n(c), !0) : (F[f(1433, y) + "sition"](0, F.getY()), x["isFlo" + f(1309, m) + A(k, 1036) + "ition"] && x[w(-278, -334) + "Storage"][h(b, 495) + "ject"](q, {
                    x: 0,
                    y: F.getY()
                  }), !0);
                }
            }
            function w(t, n) {
              return C(t - -1013, n);
            }
            return !0;
          });
        })(F[B(1250, jt) + T(qt, Ft)], function () {
          return U();
        });
        F[T(570, 581) + "ay"].on(V(Ut, 1153), function () {
          var t = 531,
            n = 516;
          setImmediate(function () {
            var e, r, i, u;
            function o(t, n) {
              return Un(n - 153, t);
            }
            x.isRunning = !x[e = -519, r = -591, Un(r - -988, e) + o(383, 516)];
            x[o(t, 614)]("startup");
            x["isRun" + o(453, n)] && ui[i = 623, u = 564, Un(i - 133, u)](function () {
              return U();
            });
            x.setAppPaused(!x.isRunning);
          });
        });
        F[T(554, Yt) + "g"].on("click", function () {
          function t(t, n) {
            return B(n - -1133, t);
          }
          x[t(-73, -65) + "r"].log("点击“日志”切换显隐...");
          setImmediate(function () {
            return x["toggleConsolePa" + function (n, e) {
              return t(n, e - 407);
            }(427, 339)]();
          });
        });
        F.btnExit.on("click", function () {
          var t, n;
          x.logger[t = -62, n = 46, B(t - -1246, n)]("点击脚本退出...");
          setImmediate(function () {
            return x.destory();
          });
        });
        this[P(-496, -590) + "ByRandom"](200, 500);
        ui.run(function () {
          var c,
            l,
            f = x[h(82, 7) + "Storage"][h(t, n) + "ject"](q);
          function h(t, n) {
            return V(t - -780, n);
          }
          function v(t, n) {
            return V(t - -1209, n);
          }
          var d = null !== (c = f.x) && 0 !== c ? c : 0,
            p = null !== (l = f.y) && 0 !== l ? l : x[h(e, 178) + g(r, 633) + "ht"] / 2;
          function g(t, n) {
            return P(t - s, n);
          }
          F["setPo" + h(167, 200) + "n"](d, p);
          x[g(552, i) + "Storage"][g(653, 518) + "ject"](q, {
            x: d,
            y: p
          });
          try {
            F.floatyPanel[g(u, o) + "otView"]()["getLayoutP" + v(-a, -280)]().alpha = .98;
          } catch (t) {
            x.logger[v(-270, -369)]("设置日志透" + g(546, r) + t[g(679, 619) + "ge"]);
          }
        });
        this[V(Wt, 937)](B(1310, 1317) + "up", !0);
        F[V(1042, Kt) + B(1087, 997) + "e"]();
      }
    }, {
      key: "emitTimeout",
      value: function () {
        var t,
          n,
          e,
          r,
          i = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 0;
        if (i <= 0) {
          this.$emit("timeout", 0);
          return !0;
        }
        this.$emit("timeout", i);
        this[t = -466, n = -443, Rn(n, t - -57)](1e3 * i);
        this[e = V, r = 1215, Tn(e, r - -22)](function (t, n) {
          return Tn(t, n - -1156);
        }(-79, 49) + "ut", 0);
        return !0;
      }
    }, {
      key: Rn(-315, -376) + "Sleep",
      value: function (t) {
        function n(t, n) {
          return Rn(t, n - 1523);
        }
        function e(t, n) {
          return Rn(n, t - 896);
        }
        function r(t, n) {
          return On(t, n - -82);
        }
        function i(t, n) {
          return Rn(t, n - -78);
        }
        if (e(603, 481) === r(-435, -392)) {
          switch (t = t || this.speedType) {
            case this.SPEED.FAST:
              {
                this["sleepByRan" + i(-530, -518)](1e3, 2e3);
                break;
              }
            case this.SPEED[n(j, 1360) + "M"]:
              {
                this["sleep" + n(1198, q) + i(-420, -518)](2e3, 3e3);
                break;
              }
            case this.SPEED[n(1035, F)]:
              {
                this["sleep" + e(U, 716) + e(456, 402)](3e3, 4e3);
                break;
              }
            default:
              {
                this.sleep(2e3);
              }
          }
          return !0;
        }
        var u = {
          Ogfeuedwrja: 163
        };
        this.execute(function () {
          var t,
            n,
            e = 659;
          return lqyhqdxqmne[t = -112, n = -u.Ogfeuedwrja, r(n, t - 161) + "r"][function (t, n) {
            return r(t, n - e);
          }(259, 232) + "erver"]();
        });
        this.logger[e(595, 682)]("stopS" + i(-302, -376) + " done.");
      }
    }, {
      key: Tn(e, 1181) + "Adapter",
      value: function (t, n, e) {
        var r,
          i,
          u,
          o = 1557;
        function a(t, n) {
          return Bn(t - o, n);
        }
        switch (e = e || n || t, n = n || t, this.speedType) {
          case this.SPEED[a(1294, 1357)]:
            {
              r = t;
              break;
            }
          case this.SPEED[a(D, P) + "M"]:
            {
              r = n;
              break;
            }
          case this[i = -115, u = -113, Rn(i, u - N)].SLOW:
            {
              r = e;
              break;
            }
          default:
            {
              r = t;
            }
        }
        return r;
      }
    }, {
      key: "setMenuTou" + On(-444, -381) + "e",
      value: function () {
        var t,
          n,
          e,
          r = !(arguments[i(z, T) + "h"] > 0 && 0 !== arguments[0]) || arguments[0];
        function i(t, n) {
          return On(n, t - 641);
        }
        return null === (t = this.winFloaty) || 0 === t ? 0 : t[i(O, 379) + (n = -404, e = -458, Bn(n - -348, e)) + "le"](!!r);
      }
    }, {
      key: "clickByOCRAdapter",
      value: function () {
        function t(t, n) {
          return Tn(t, n - -606);
        }
        function n(t, n) {
          return On(t, n - B);
        }
        var e = arguments[r(-315, -237) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        function r(t, n) {
          return Bn(t - -92, n);
        }
        var i = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {};
        if (!this["isHID" + n(8, -2)]) {
          return !1;
        }
        if (!this[t(550, 515) + "uterS" + r(-92, -118)] || !this[u(441, 473) + n(34, -57) + "nCapture"]()) {
          this[t(448, 534) + "r"].log("[clickByOC" + u(I, C) + r(-190, -78) + t(727, E) + u(373, S) + "辅助功能...");
          return !1;
        }
        function u(t, n) {
          return Tn(n, t - -870);
        }
        i = Object.assign({
          debug: !1,
          scale: 1
        }, i);
        return this[n(193, M) + u(265, 154)](e, i);
      }
    }, {
      key: "findB" + Tn(r, 1301) + Bn(-245, -238) + "r",
      value: function () {
        function t(t, n) {
          return Tn(n, t - -229);
        }
        var n,
          e,
          r,
          i,
          u = arguments[a(-523, -589) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "",
          o = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {};
        if (!this[n = 702, e = 694, Rn(e, n - 910) + "Mode"]) {
          return !1;
        }
        if (!this["isCap" + a(-368, -471) + a(-248, -366)] || !this[t(1082, 949) + "Scree" + t(w, 1050) + "ure"]()) {
          this[a(-623, -621) + "r"][a(-578, -505)]("[findByOCRAdapt" + a(-515, -569) + "未启用“截" + a(-393, -409) + a(-590, -522) + ".");
          return !1;
        }
        function a(t, n) {
          return Rn(t, n - -204);
        }
        o = Object.assign({
          debug: !1,
          scale: .8
        }, o);
        return this[r = -250, i = -139, Bn(i - 132, r) + t(1111, 1243)](u, o);
      }
    }, {
      key: "click" + Rn(-199, -302) + Rn(-426, -292) + Tn(i, u),
      value: function (t) {
        function n(t, n) {
          return Rn(t, n - 1730);
        }
        var e = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : 0;
        function i(t, n) {
          return Bn(t - 1133, n);
        }
        if (!this["isHID" + n(1372, 1441)]) {
          return !1;
        }
        if (!this[n(g, 1294) + "uterScreen"] || !this["isOwn" + n(y, 1386) + n(1588, 1560) + "ure"]()) {
          this.logger[i(994, m)](u(511, k) + "kByIm" + o(-140, -204) + o(-331, -465) + u(615, x) + n(1219, 1291) + n(1588, b) + "能...");
          return !1;
        }
        function u(t, n) {
          return Bn(t - 715, n);
        }
        function o(t, n) {
          return Rn(n, t - 46);
        }
        e = Object[o(-125, -158) + "n"]({
          threshold: .6
        }, e);
        return this[i(A, 969) + u(575, 521) + "ge"](t, e, r);
      }
    }, {
      key: On(-395, -450) + "yImag" + Bn(-63, -88) + "ter",
      value: function (t) {
        var n = 534;
        function e(t, e) {
          return Rn(t, e - n);
        }
        var r = arguments[e(283, 149) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : {};
        function i(t, n) {
          return Tn(t, n - -1026);
        }
        var u = arguments[i(109, 146) + "h"] > 2 ? arguments[2] : 0;
        function o(t, n) {
          return Bn(n - 1581, t);
        }
        if (!this[o(1620, 1535) + e(132, 245)]) {
          return !1;
        }
        if (!this["isCaputerS" + i(f, 369)] || !this["isOwnScree" + i(338, 361) + "ure"]()) {
          this[i(94, 114) + "r"][o(1405, 1442)]("[find" + a(275, h) + a(v, d) + "pter]" + o(p, 1444) + "“截图权限" + i(132, 108) + "...");
          return !1;
        }
        function a(t, n) {
          return On(n, t - 594);
        }
        r = Object.assign({
          threshold: .6
        }, r);
        return this.findImage(t, r, u);
      }
    }, {
      key: "destory",
      value: function () {
        var t = 1108,
          n = 399,
          e = 584,
          r = 623,
          i = 989,
          u = 555;
        function f(t, n) {
          return Rn(n, t - 817);
        }
        function h(t, n) {
          return Rn(n, t - 267);
        }
        var v = this,
          d = arguments.length > 0 && 0 !== arguments[0] && arguments[0];
        function p(t, n) {
          return On(n, t - 805);
        }
        function g(t, n) {
          return Rn(n, t - 564);
        }
        this.logger.log(p(o, 641) + h(14, 29));
        this["isRun" + h(-151, -212)] = !1;
        this["isDes" + p(503, a)] = !0;
        this[g(s, 314) + "te"](function () {
          function t(t, n) {
            return h(t - 384, n);
          }
          return v["befor" + t(437, u) + (n = 142, e = 77, f(e - -562, n))] && v["beforeDest" + t(473, 405)](d);
          var n, e;
        });
        this.execute(function () {
          function t(t, n) {
            return g(t - 337, n);
          }
          return v.killThread(v[t(522, n) + t(e, r) + (u = 1129, o = i, p(o - 385, u))]);
          var u, o;
        });
        this.execute(function () {
          return v[i = 246, u = 214, h(u - 128, i) + (e = -69, r = -104, g(e - -406, r))](v[t = 1213, n = 1124, h(t - 1358, n) + "yThread"]);
          var t, n, e, r, i, u;
        });
        this[g(257, c) + "ntMode"] && (this.execute(function () {
          return bt.server[n = l, e = 532, p(e - 72, n) + function (n, e) {
            return g(n - t, e);
          }(1374, 1244)]();
          var n, e;
        }), this.logger[h(-34, -69)]("stopServer" + g(239, 333) + "."));
        this[h(-81, -112) + "te"](function () {
          return v.closeConsolePanel();
        });
        this[h(-81, -56) + "te"](function () {
          function t(t, n) {
            return g(n - -575, t);
          }
          var n;
          return null === (n = v[t(-450, -438) + t(-445, -344)]) || 0 === n ? 0 : n.close();
        });
        d && this[f(562, 551) + "pp"]();
        this[g(147, 168) + "r"].log("desto" + g(251, 307) + "it...");
        this.exit();
      }
    }]);
  }(Nn),
  Kn = "data:image/png;base64,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",
  Jn = "data:image/png;base64,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";
function Qn() {
  var t = ["254424eUVQha", "4459895swWOWF", "18GjValk", "18938bjDlAH", "3997PECDmB", "12176Dxpszu", "18YwJgHQ", "153484XQeOHx", "407SNybjd", "36039536piXDrk", "41aMElsf", "6429270lgWGQV", "6wpYZBY"];
  return (Qn = function () {
    return t;
  })();
}
function Ln(t, n) {
  var e = Qn();
  return (Ln = function (t, n) {
    return e[t -= 493];
  })(t, n);
}
function Hn() {
  var t = 862;
  function n(n, e) {
    return Xn(n - t, e);
  }
  try {
    var e = !Boolean.prototype[n(1340, 1448) + "Of"][n(1227, 1313)](Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (Hn = function () {
    return !!e;
  })();
}
function Xn(t, n) {
  var e = Gn();
  return (Xn = function (t, n) {
    return e[t -= 346];
  })(t, n);
}
function Gn() {
  var t = ["4253096WEokFs", "口...", "essag", "Mode", "”任务成功", "MWbNv", "UrVBE", "     ", "split", "455310XYZWOG", ">>>准备", "seRat", "colle", "close", "lengt", "3805VCqUoX", "nce", "trim", "ntScr", "”任务..", "ility", "leToU", "entCo", "wZrQF", "check", "关键词养号", "lects", "waitF", "ment", "obabi", "ckage", "App首次", "TaskT", "ByExi", "dom", "ideo", "orSel", "likeC", "isHID", "，退出脚本", "rTYLI", "andro", "shift", "apply", "ount", "ugc.a", "back_", "ToSho", "为空！", "ate", "点击第一条", "info", "ForNe", "点击重新进", "start", "uffle", "isAge", "switc", "log", "const", "oller", "Comme", "失败，退出", "recom", "论...", "lity", "144808BFFLmo", "now", "ctRat", "本次任务已", "sleep", "App启动", "getPr", "click", "runTi", "开始进行评", "收藏”内容", "findB", "ialCo", "ller", "ntMod", "meMin", "ntCom", "id.wi", "exist", "ext", "Recom", "oast", "Fnehy", "setIn", "默认话术", "点击“视频", "ctCou", "terva", "DpDjR", "TaskC", "稳定中..", "Sleep", "bph", "_last", "Rever", "comme", "您好\n  ", "ontro", "ime", "”窗口..", "AppNa", "脚本 ", "AppPa", "navig", "runti", "imeou", "value", "pCont", "devic", "ByRan", "次随机“收", "getSh", "isInH", "backT", "putTe", "warn", "user_", "Work", "speed", "count", "Check", "repla", "91359JnCXST", "init", "”评论成功", "inute", "conca", "广告视频，", "scrip", "视频...", "ory", "sibil", "\n    ", "ntent", "”选项..", "mbUWz", "”任务失败", "tent.", "藏”内容！", "后退键关闭", "dget.", "sts", "runTy", "Colle", "home", "visib", "ateTo", "rdLis", "tInit", "ntCou", "任务已完成", "unt", "ser", "video", "ted", "ity", "空...", "ter", "pter", "未点赞，喜", "bindN", "ntRat", "extIn", "initR", "eClic", "ByIma", "essib", "exitA", "isADV", "中...", "LikeR", "leArr", "执行搜索关", "roid.", "ructo", "关闭全屏提", "ome", "Acces", "xRHio", "geAda", "次内容“", "836640vUwimQ", "oHome", "键字“", "初始化失败", "keywo", "eWidt", "isSto", "desto", "btn", "入视频播放", "_comm", "YmijF", "fjj", "...", "findO", "关闭“评论", "任务时长", " 初始化失", "conte", "xyOAu", "k1128", "emitT", "rHhAj", "ute", "1254YuHAry", "confi", "荐”内容！", "workM", "logge", "1196811WZMSlu", "://se", "开始随机“", "0\n宝马m", "id.in", "umtim", "able", "mendC", "error", "hToNe", "rd=", "call"];
  return (Gn = function () {
    return t;
  })();
}
{
  !function () {
    var t = 266,
      n = 496,
      e = 501,
      r = 1011,
      i = 892,
      u = 274,
      o = 524;
    function a(t, n) {
      return Ln(t - o, n);
    }
    function s(t, n) {
      return Ln(n - -768, t);
    }
    function c(t, n) {
      return Ln(t - 394, n);
    }
    function l(t, n) {
      return Ln(t - -3, n);
    }
    for (var f = Qn();;) try {
      if (667854 === -parseInt(s(-t, -273)) / 1 * (-parseInt(l(498, n)) / 2) + parseInt(c(894, 890)) / 3 * (-parseInt(c(899, 898)) / 4) + -parseInt(l(496, 490)) / 5 * (parseInt(c(891, 894)) / 6) + parseInt(l(499, 501)) / 7 * (-parseInt(l(500, e)) / 8) + parseInt(c(898, 892)) / 9 * (-parseInt(a(1020, 1016)) / 10) + parseInt(a(1017, r)) / 11 * (parseInt(c(i, 897)) / 12) + parseInt(s(-280, -u)) / 13) {
        break;
      }
      f.push(f.shift());
    } catch (t) {
      f.push(f.shift());
    }
  }();
  (function () {
    var t = 1214;
    function n(t, n) {
      return Xn(t - -205, n);
    }
    function e(t, n) {
      return Xn(n - 799, t);
    }
    for (var r = Gn();;) try {
      if (139828 === -parseInt(n(289, 215)) / 1 + parseInt(n(227, 174)) / 2 + -parseInt(n(170, 256)) / 3 + -parseInt(e(1301, 1352)) / 4 + parseInt(e(1258, 1180)) / 5 * (parseInt(n(144, 38)) / 6) + -parseInt(n(149, 131)) / 7 + parseInt(e(t, 1165)) / 8) {
        break;
      }
      r.push(r.shift());
    } catch (t) {
      r.push(r.shift());
    }
  })();
}
var Zn = function (t) {
  var e = 1376,
    r = 144,
    i = 52,
    u = 213,
    o = 1339,
    a = 551,
    s = 427,
    c = 27,
    l = 184,
    f = 375,
    h = 467,
    v = 467,
    d = 339,
    p = 543,
    g = 465,
    y = 415,
    m = 443,
    k = 239,
    x = 371,
    b = 294,
    A = 361,
    w = 378,
    I = 282,
    C = 537,
    E = 366,
    S = 448,
    M = 167,
    B = 386,
    z = 95,
    T = 153,
    O = 40,
    D = 800,
    P = 161,
    N = 867,
    j = 233,
    q = 1154,
    F = 398,
    U = 1387,
    V = 313,
    Y = 1405,
    W = 455,
    K = 1247,
    J = 1080,
    Q = 1269,
    L = 1292,
    H = 1145,
    X = 1122,
    G = 1295,
    Z = 220,
    _ = 1283,
    $ = 1325,
    tt = 1214,
    nt = 1131,
    et = 544,
    rt = 897,
    it = 780,
    ut = 1016,
    ot = 739,
    at = 795,
    st = 905,
    ct = 771,
    lt = 870,
    ft = 1008,
    ht = 694,
    vt = 954,
    dt = 715,
    pt = 985,
    gt = 675,
    yt = 613,
    mt = 909,
    kt = 683,
    xt = 695,
    bt = 1003,
    At = 1036,
    wt = 974,
    It = 724,
    Ct = 980,
    Et = 933,
    St = 800,
    Mt = 7,
    Bt = 895,
    Rt = 1064,
    zt = 952,
    Tt = 1036,
    Ot = 1115,
    Dt = 931,
    Pt = 772,
    Nt = 960,
    jt = 1082,
    qt = 1139,
    Ft = 1122,
    Ut = 1038,
    Vt = 653,
    Yt = 740,
    Wt = 673,
    Kt = 662,
    Jt = 939,
    Qt = 640,
    Lt = 576,
    Ht = 964,
    Xt = 847,
    Gt = 19,
    Zt = 1249,
    _t = 1162,
    $t = 1234,
    tn = 1204,
    nn = 147,
    en = 1245,
    rn = 1462,
    un = 37,
    on = 27,
    an = 1113,
    sn = 1484,
    cn = 84,
    ln = 750,
    fn = 1158,
    hn = 118,
    vn = 186,
    dn = 369,
    pn = 973,
    gn = 1057,
    yn = 1387,
    mn = 257,
    kn = 1322,
    xn = 1353,
    bn = 1318,
    An = 1026,
    wn = 1490,
    In = 102,
    Cn = 216,
    En = 1400,
    Sn = 1506,
    Mn = 1456,
    Bn = 1489,
    Rn = 913,
    zn = 967,
    Tn = 913,
    On = 737,
    Dn = 59,
    Pn = 679,
    Nn = 132,
    jn = 31,
    qn = 1297,
    Fn = 505,
    Un = 841,
    Vn = 33,
    Yn = 84,
    Wn = 129,
    Qn = 908,
    Ln = 622,
    Gn = 660,
    Zn = 611,
    _n = 527,
    $n = 681,
    te = 1228,
    ne = 1259,
    ee = 659,
    re = 764,
    ie = 719,
    ue = 112,
    oe = 852,
    ae = 1293,
    se = 1289,
    ce = 1331;
  function le(t, n) {
    return Xn(t - 891, n);
  }
  function fe(t, n) {
    return Xn(t - -305, n);
  }
  function he(t, n) {
    return Xn(n - -583, t);
  }
  function ve() {
    function t(t, n) {
      return Xn(t - -413, n);
    }
    function e(t, n) {
      return Xn(n - 886, t);
    }
    function r(t, n) {
      return Xn(t - 155, n);
    }
    function i(t, n) {
      return Xn(n - 327, t);
    }
    if ("xTvWP" === t(137, 196)) {
      return !this.findByImageAdapter(pgaquaprkzz);
    }
    var u,
      o,
      a,
      s,
      c,
      l,
      f,
      h,
      v,
      d,
      p,
      g,
      y,
      m,
      k,
      x,
      b,
      A,
      w,
      I,
      C = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : {};
    n._classCallCheck(this, ve);
    y = this;
    m = ve;
    k = [Object.assign({
      AppName: null !== (u = C[r(627, Pn) + "me"]) && 0 !== u ? u : "抖音",
      AppPackage: null !== (o = C[e(1348, 1360) + "ckage"]) && 0 !== o ? o : "com.ss.and" + t(Nn, jn) + e(1343, qn) + "weme"
    }, C)];
    I = 211;
    m = n._getPrototypeOf(m);
    (g = n._possibleConstructorReturn(y, Hn() ? Reflect.construct(m, k || [], n._getPrototypeOf(y)[A = 636, w = 680, Xn(A - I, w) + (x = -174, b = -151, Xn(x - -720, b)) + "r"]) : m.apply(y, k)))[r(Fn, 503) + "g"] = C;
    null !== (a = C[i(817, Un) + "pe"]) && 0 !== a ? g.runType = a : g.runType = 1;
    null !== (s = C.runTimeMinute) && 0 !== s ? g["runTi" + t(34, 94) + t(-65, -174)] = s : g["runTi" + t(34, 94) + t(-65, -174)] = 2;
    g.keywords = C[e(1370, 1443) + "rds"] || "宝马m24" + t(-56, Vn) + "2";
    g[r(712, 613) + "rdList"] = g[i(881, 884) + "rds"][i(621, 701)]("\n").filter(Boolean).map(function (t) {
      return t.trim()[n = 1222, e = 1165, i(n, e - 345) + "ce"](/\r$/, "");
      var n, e;
    });
    null !== (c = C[t(-61, 29) + t(Yn, 172)]) && 0 !== c ? g.workMinute = c : g.workMinute = 2;
    null !== (l = C.videoReverseRate) && 0 !== l ? g[t(112, 149) + i(717, 793) + i(774, 704) + "e"] = l : g[t(112, 149) + i(717, 793) + i(774, 704) + "e"] = 2;
    null !== (f = C["video" + t(Wn, 146) + "ate"]) && 0 !== f ? g["video" + t(129, 17) + "ate"] = f : g["video" + t(129, 17) + "ate"] = 5;
    null !== (h = C[t(112, 131) + "Comme" + t(120, 153) + "e"]) && 0 !== h ? g[i(799, 852) + "Comme" + e(1396, 1419) + "e"] = h : g[i(799, 852) + "Comme" + e(1396, 1419) + "e"] = 3;
    null !== (v = C.commentScriptID) && 0 !== v ? g[i(Qn, 794) + r(539, 548) + "iptID"] = v : g[i(Qn, 794) + r(539, 548) + "iptID"] = 0;
    g[r(Ln, 617) + "ntScripts"] = C["comme" + i(Gn, 711) + "ipts"] || {
      id: 1,
      title: r(Zn, _n),
      content: r(623, $n) + "     " + t(-40, -36) + "     " + e(te, ne) + "  各位好" + r(ee, 640) + "     " + t(-40, -144) + "     " + r(528, 461) + "不错"
    };
    null !== (d = C[r(680, 586) + e(1360, 1401) + i(ie, 761) + "e"]) && 0 !== d ? g["videoColle" + i(re, 761) + "e"] = d : g["videoColle" + i(re, 761) + "e"] = 1;
    null !== (p = C[i(934, oe) + e(1329, 1338) + "mendR" + r(570, 482)]) && 0 !== p ? g[t(ue, 6) + "RecommendRate"] = p : g[t(ue, 6) + "RecommendRate"] = 3;
    g[t(78, 145)] = 0;
    g[e(ae, se) + "ount"] = 0;
    g.commentCount = 0;
    g.collectCount = 0;
    g["recom" + t(-52, -111) + "ount"] = 0;
    g.isAutoInit && g[e(ce, 1381)]();
    return g;
  }
  function de(t, n) {
    return Xn(n - -643, t);
  }
  n._inherits(ve, t);
  return n._createClass(ve, [{
    key: fe(230, 131) + fe(54, 155) + "e",
    value: function () {
      function t(t, n) {
        return le(n - -1584, t);
      }
      function n(t, n) {
        return le(n - Dn, t);
      }
      var e = this;
      function r(t, n) {
        return le(t - -1165, n);
      }
      function i(t, n) {
        return fe(t - On, n);
      }
      var u = arguments[i(812, 698) + "h"] > 0 && 0 !== arguments[0] && arguments[0];
      return this.isCurrentApp() || (this.logger[i(856, 832)]("当前应用未在前台运行，尝试启动" + i(pn, gn)), this[i(852, 841) + "App"]()) ? this.count <= 0 || u ? this[i(825, 850) + i(834, 775) + "ector"](id("首页初始化"), {
        timeout: 15e3,
        beforeFunc: function () {},
        turnFunc: function () {
          return e.isInHome();
        }
      }) ? (this.logger.info(n(1291, 1347) + "启动，等待" + r(188, 92) + "."), this["sleep" + i(Tn, 815) + t(-369, -293)](3e3, 6e3), !0) : this["scriptInit" + n(1344, 1394) + "unt"] >= 3 ? (this["isAcc" + r(264, mn) + n(kn, 1336) + "Mode"] && this[t(-252, -314) + r(275, 280) + i(935, 915) + "ity"](), this["exitM" + n(xn, bn) + "e"] = r(199, 88).concat(this.AppName, i(1002, 1056) + "败!"), this[i(992, 1006) + "ry"](!0)) : (this["scrip" + i(952, An) + t(-222, -249) + n(wn, 1473)] = (this["scrip" + n(1503, 1470) + n(1409, 1394) + "unt"] || 0) + 1, this["showT" + r(179, In)](""[r(224, Cn) + "t"](this.AppName, n(En, Sn) + "，立即重试...")), 2 === this[t(-113, -193) + "tInitialCount"] ? this[i(971, 916) + "llApp2"]() : this[n(Mn, Bn) + "pp"](), this[n(1290, 1386) + i(Rn, 1001) + "dom"](2e3, 3e3), this[i(zn, 853) + t(-333, -334) + "e"](!0)) : 0 : (this["exitM" + i(800, 695) + "e"] = n(1421, yn) + t(-204, -265) + "脚本...", this.logger[i(919, 977)](this.exitMessage), this.destory());
    }
  }, {
    key: "checkFullPopup",
    value: function () {
      function t(t, n) {
        return le(t - -1063, n);
      }
      if (this["clickByCol" + t(220, 323)]([textMatches(/^(我知道了|忽略提醒|拒绝|以后再说|不再提醒)$/), idEndsWith(/(close|cqx|positive|iv_close|close_btn)$/)])) {
        this[t(181, hn) + "r"][t(245, 331)](le(-63 - -1501, 25) + "示弹窗...");
        this[function (t, n) {
          return le(n - -1195, t);
        }(252, vn) + t(291, dn)]();
      }
    }
  }, {
    key: le(e, 1291) + le(1445, 1489),
    value: function () {
      function t(t, n) {
        return he(t, n - -323);
      }
      var n = this,
        e = arguments[t(-538, -526) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 2e3,
        r = arguments[t(-472, -526) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : 5,
        i = arguments[t(-561, -526) + "h"] > 2 ? arguments[2] : 0;
      return this.backTo(function () {
        return n[t = 475, e = 432, le(e - 881 - -1824, t) + "ome"]();
        var t, e;
      }, {
        sleep: e,
        limit: r,
        callback: function () {
          function n(n, e) {
            return t(e, n - -56);
          }
          var e, r;
          "YmijF" === n(-398, -506) ? i && i() : (this[e = -71, r = -181, function (t, n) {
            return he(t, n - 113);
          }(r, e - 46) + "r"].log("关闭“评论" + n(-491, -551) + "."), this.sleepByRandom(2e3, 3e3));
        }
      });
    }
  }, {
    key: "isInH" + fe(243, r),
    value: function () {
      if (this.isHIDMode) {
        return textMatches(/^(首页|朋友|消息|我)$/)[t = -415, n = -348, fe(n - -493, t) + "s"]();
      }
      var t, n;
      return text("推荐").exists() && desc("搜索")["click" + function (t, n) {
        return le(t - -1879, n);
      }(-628, -679)]()[function (t, n) {
        return le(t - -1852, n);
      }(-511, -442) + "s"]();
    }
  }, {
    key: "isADV" + de(-262, -242),
    value: function () {
      function t(t, n) {
        return fe(n - 1013, t);
      }
      if (this[t(1083, 1112) + e(-426, -435)]) {
        return !this[n(ln, 697) + "yImageAdap" + n(858, 783)](Kn);
      }
      function n(t, n) {
        return he(t, n - 837);
      }
      function e(t, n) {
        return le(t - -1686, n);
      }
      return !id(e(-307, -347) + "avatar")[e(-278, -287) + e(-408, -519) + n(714, 778)]()[t(1108, fn) + "s"]();
    }
  }, {
    key: he(-121, -193) + he(-37, -122) + "omple" + he(-15, -57),
    value: function () {
      function t(t, n) {
        return fe(n - 1069, t);
      }
      function n(t, n) {
        return le(t - 101, n);
      }
      !this["_lastCheck" + t(Zt, _t) + t(1151, $t)] && (this[t(1242, 1229) + "CheckTaskT" + t(1279, 1234)] = Date.now());
      if (1 === this.runType) {
        if (this[t(1126, tn) + e(nn, 34) + e(-150, -65)] <= 0) {
          if (n(1381, 1367) !== e(-115, -42)) {
            return !1;
          }
          this["sleepByRan" + e(73, -13)](4e3, 5e3);
        }
        return Date.now() - this[t(en, 1229) + "CheckTaskT" + n(rn, 1350)] >= 60 * this[e(un, on) + t(an, 1211) + "ute"] * 1e3;
      }
      function e(t, n) {
        return le(n - -1304, t);
      }
      if (2 === this.runType) {
        var r = Date[function (t, n) {
          return he(t, n - 897);
        }(724, 747)]() - this["_last" + n(sn, 1584) + "TaskTime"] >= 60 * this["workM" + e(80, cn)] * 1e3;
        this["keywo" + e(24, 106) + "t"][n(1372, 1348) + "h"] && r && (r = !1, this[t(1344, 1239) + "ateToWork"]());
        return r;
      }
      return !0;
    }
  }, {
    key: "cycleContr" + de(-263, -217),
    value: function () {
      function t(t, n) {
        return fe(t - 563, n);
      }
      0 != this[t(749, 853)] && this["initR" + t(617, et) + "e"]();
      0 === this.count && 2 === this.runType && this[i(922, 932) + "ateTo" + u(-111, -33)]();
      if (this[r(rt, 990) + u(-139, -250) + "omple" + r(1064, 1126)]()) {
        var n = 2 === this.runType ? t(649, 564) + t(it, 756) + t(663, 610) + "！" : i(ut, 1085)[t(756, 689) + "t"](this[t(698, 743) + t(705, ot) + i(at, st)], "分钟已完成，退出脚本！");
        this.logger.info(n);
        this[u(-84, -195)](2e3);
        this.alert(u(-165, -279) + "结束", n);
        this.destory();
        return !0;
      }
      if (this[i(886, 810) + r(1042, 999) + t(ct, lt)](id(u(-188, -257) + i(ft, 1065)))) {
        if (u(-146, -249) === i(853, 885)) {
          return gcdovyqugig.trim()[u(-107, -63) + "ce"](/\r$/, "");
        }
        this[u(-247, -252) + "r"].info("关闭“评论”面板...");
        this["sleepByRan" + t(658, 589)](2e3, 3e3);
      }
      0 !== this[r(984, 1091)] && this["switc" + u(-237, -296) + "xt"]({
        reverse: this["getProbabi" + i(878, 829)](this["video" + i(913, 949) + u(-223, -196) + "e"])
      });
      this[t(ht, 651) + u(-119, -49) + r(1047, 1e3)](1e3, 2e3);
      this.count++;
      var e = this["getTimeout" + i(865, 902) + "xt"]();
      function r(t, n) {
        return fe(n - 905, t);
      }
      (this[t(680, 625) + r(vt, 1046) + "e"] || this["isAcc" + i(985, 877) + t(644, 719) + t(627, dt)]) && !id(u(-112, -14) + "avatar")[u(-150, -196) + "s"]() && this[u(-161, -92) + "ByExi" + u(-87, -124)](idEndsWith("desc")) && (this[r(911, 953) + "r"][u(-183, -243)](u(-181, -140) + r(1099, 1162) + "页..."), this[i(883, 887) + "ByRandom"](2e3, 3e3));
      if (this[r(1157, 1140) + u(-199, -210)]()) {
        this[r(pt, 953) + "r"][t(gt, yt)](u(-101, -101) + "立即刷走...");
        return this[u(-68, -166) + "extInterval"](e, !0);
      }
      function i(t, n) {
        return he(n, t - 1030);
      }
      function u(t, n) {
        return fe(t - -295, n);
      }
      this["getProbabi" + i(878, mt)](this[t(783, 878) + u(-58, -13) + "ate"]) && ("xyOAu" === r(1080, 1172) ? (this[t(611, 710) + "r"].log("开始随机“点赞”内容..."), (this["click" + t(657, 708) + "sts"](descContains(u(-69, -4) + "欢")[t(775, kt) + i(834, 781) + t(782, xt)]()) || this["click" + u(-63, 25) + "geAdapter"](Kn)) && (this.likeCount++, this[u(-247, -238) + "r"].info("第".concat(this[r(972, bt) + "ount"], "次随机“点赞”内容！")), this[r(962, At) + "ByRandom"](2e3, 3e3))) : this[r(wt, 1023) + t(621, 641) + "xt"]({
        reverse: this["getProbabi" + u(-169, -271)](this["video" + t(It, 678) + "seRate"])
      }));
      this[u(-162, -205) + "obabi" + r(1056, 1031)](this[u(-75, -87) + u(-173, -80) + i(Ct, Et) + "e"]) && (this[i(St, 831) + "r"][u(-176, -104)]("开始随机“评论”内容..."), this[u(-29, Mt) + i(Bt, 834) + r(Rt, 994)]());
      this.getProbability(this[i(972, zt) + r(Tt, Ot) + u(-166, -173) + "e"]) && (this.logger.log("开始随机“收藏”内容" + t(824, 778)), (this[r(Dt, 1039) + u(-201, -245) + "sts"](descMatches(/未选中，收藏(.*)，按钮/)[i(964, 1068) + "leToUser"]()[i(886, Pt) + r(952, Nt)](!0)) || this[r(951, 1039) + u(-63, -131) + r(jt, 1151) + r(qt, 1130)]("data:image/png;base64,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")) && (this[r(943, 978) + r(1037, 1058) + "nt"]++, this[t(611, 548) + "r"].info("第"[u(-102, -49) + "t"](this.collectCount, i(929, 994) + r(1209, 1110))), this.sleepByRandom(2e3, 3e3)));
      if (this[r(Ft, Ut) + t(Vt, Yt) + "lity"](this["video" + u(-148, -194) + "mendR" + t(Wt, 593)])) {
        if (this[t(697, 643) + "ByExists"](descMatches(/分享(.*)，按钮/)["visib" + u(-213, -191) + i(971, 961)]().clickable(!0)) || this[r(1064, 1039) + "ByIma" + u(-49, -64) + "pter"]("data:image/png;base64,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")) {
          this["sleepByRan" + r(1105, 1e3)](1e3, 2e3);
          (this[t(Kt, 635) + "Mode"] ? this[t(697, 681) + r(Jt, 999) + "sts"](textMatches(/推荐(给朋友)*/)) : this.bubbleClick(textMatches(/推荐(给朋友)*/)["findO" + t(Qt, 714)](), 3)) && (this["recommendC" + u(-190, -138)]++, this[i(800, 835) + "r"].info("第".concat(this[t(687, Lt) + "mendCount"], "次随机“推" + t(609, 673))), this[i(883, 856) + "ByRandom"](2e3, 3e3));
          (this["clickByCol" + r(Ht, 992)]([id(r(1201, 1165)), desc("关闭")["click" + r(873, 960)]()]) || this["click" + t(795, 768) + "geAdapter"](Jn)) && (this[t(611, 524) + "r"][t(682, 712)]("关闭“分享”窗口..."), this["sleep" + t(739, 760) + i(Xt, 955)](2e3, 3e3));
        }
      }
      return this[u(-68, Gt) + "extInterval"](e);
    }
  }, {
    key: he(i, -51) + he(24, -49) + de(-182, -184) + "l",
    value: function () {
      function t(t, n) {
        return he(t, n - 1452);
      }
      var n,
        e,
        r,
        i,
        u,
        o,
        a = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 0,
        s = arguments.length > 1 && 0 !== arguments[1] && arguments[1];
      if (this[t(1507, 1428) + "pController"]) {
        return !0;
      }
      s && this[t(1349, 1292) + "hToNext"]({
        waitTime: this.SHORT_TIME
      });
      this.logger[t(1333, 1286)]((u = -539, o = -561, le(u - -1806, o) + "下一条视频：").concat(a, "ms"));
      this[r = 1092, i = 1049, le(r - -145, i) + (n = 1145, e = nt, de(n, e - 1297)) + "t"](parseInt(a / 1e3));
      return this.cycleController();
    }
  }, {
    key: "stopController",
    value: function () {
      return this.isStopController = !0;
    }
  }, {
    key: "navigateTo" + le(1380, 1287),
    value: function () {
      function t(t, n) {
        return fe(t - 1011, n);
      }
      function n(t, n) {
        return fe(t - 213, n);
      }
      function e(t, n) {
        return le(n - -13, t);
      }
      function r(t, n) {
        return he(n, t - -394);
      }
      var i = arguments[r(-597, -508) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 2;
      this[r(-492, -553) + "oHome"]();
      for (var u = this[e(1469, 1435) + r(-458, -412) + "t"][t(1114, 1029)](), o = !1, a = 0; a < i; a++) {
        if (this["navig" + e(1316, 1396) + "Search"](u)) {
          if (this[n(347, 360) + "ByExists"](text("视频"))) {
            this[n(261, 171) + "r"].log(t(1163, 1266) + r(-471, -401) + ".");
            var s = idEndsWith("desc");
            this[t(1110, 1218) + e(1217, K)] ? this["sleep" + n(389, 432) + n(308, 251)](4e3, 5e3) : (this["sleep" + r(-564, -674) + "rt"](), this["waitF" + n(310, 279) + "ector"](s, {
              timeout: 8e3
            }), this[n(344, 297) + t(1119, J) + "rt"]());
            if (text("搜索结果为空")[r(-527, -631) + "s"]()) {
              this[n(261, 322) + "r"][r(-490, -410)]("关键词“".concat(u, "”搜索结果" + e(Q, L)));
              break;
            }
            if (this[t(1145, 1068) + r(-578, -542) + "sts"](s) || this[t(H, 1236)](.25 * this["devic" + r(-419, -521) + "h"], .3 * this[e(1405, 1358) + "eHeight"])) {
              this[r(-624, -646) + "r"].log(t(X, 1193) + t(1207, 1200));
              this[n(344, 456) + "ByRandom"](3e3, 5e3);
              o = !0;
              break;
            }
          }
          break;
        }
        if (!o) {
          this[t(1191, G) + e(1522, 1432)]();
        }
      }
      o ? (this[r(-624, -614) + "r"][r(-560, -604)](("进入搜索关" + r(-422, -489))[n(406, 493) + "t"](u, n(278, Z) + "！")), this[t(1171, _) + "Check" + e($, 1276) + "ime"] = Date.now()) : this[t(1059, 1162) + "r"][t(1068, 1154)]("进入搜索关键字“"[t(1204, 1249) + "t"](u, t(tt, 1295) + "！"));
      return o;
    }
  }, {
    key: le(1366, 1442) + fe(u, 193) + "Search",
    value: function () {
      var t = 1613;
      function n(t, n) {
        return le(t - -1717, n);
      }
      function e(t, n) {
        return de(t, n - 581);
      }
      function r(t, n) {
        return fe(t - -361, n);
      }
      function i(n, e) {
        return de(e, n - t);
      }
      if ("DpDjR" === e(333, F)) {
        var u = arguments[i(1350, 1250) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
        return u ? (this[e(221, 291) + "r"][i(U, 1446)]((r(-122, -69) + "键字“")[e(355, 436) + "t"](u, n(-441, -382) + ".")), app["startActiv" + r(-139, -141)]({
          action: e(V, 345) + r(-308, -251) + i(1479, 1427) + "action.VIEW",
          data: ("snssd" + r(-93, -45) + n(-471, -445) + "arch?keywo" + r(-302, -392)).concat(u),
          packageName: this[i(1444, 1340) + i(1366, Y)]
        }), this[r(-273, -249) + r(-264, -371) + "ector"](textMatches(/^(综合|视频|直播|用户)$/), {
          timeout: 8e3
        })) : e(375, 310) === r(-159, -227) ? this["isSto" + r(-187, -77) + "roller"] = !0 : (this[n(-473, -388) + "r"].warn("搜索关键字为空..."), !1);
      }
      this.logger.log(n(-470, -464) + r(-224, -115) + n(-260, -326));
      (this[n(-387, -349) + "ByExists"](fyedaxdsbmq(/未选中，收藏(.*)，按钮/)[e(435, W) + r(-279, -351) + "ser"]()[i(1409, 1516) + i(1330, 1435)](!0)) || this["click" + r(-129, -194) + n(-275, -294) + "pter"](nhwxrhoqwgh)) && (this.collectCount++, this.logger.info("第".concat(this[r(-288, -182) + "ctCount"], "次随机“收" + e(501, 448))), this.sleepByRandom(2e3, 3e3));
    }
  }, {
    key: fe(150, 184) + "putText",
    value: function () {
      var t = 1245,
        n = 987;
      function e(t, n) {
        return de(t, n - 657);
      }
      function r(t, e) {
        return fe(e - n, t);
      }
      var i,
        u,
        o,
        a = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
      if (this[l(-578, -518) + e(354, 383)]) {
        return this.setClip(a) && (null === (i = this[c(1082, 1061) + "upHID"]) || 0 === i || null === (u = i[l(-506, -496) + "me"]) || 0 === u || null === (o = u.behavior) || 0 === o ? 0 : o.paste());
      }
      var s = idEndsWith("editor")[e(476, 581) + e(326, 396)]() || className("andro" + e(412, 463) + c(1174, 1111) + "EditT" + e(437, 465)).findOnce() || editable(!0)[r(q, 1249) + r(1050, 1064)]();
      if (!s) {
        return !1;
      }
      function c(n, e) {
        return he(e, n - t);
      }
      function l(t, n) {
        return he(n, t - -399);
      }
      return null == s ? 0 : s.setText(a);
    }
  }, {
    key: de(-96, -160) + le(1312, 1246) + fe(122, 18) + "nt",
    value: function () {
      function t(t, n) {
        return de(n, t - j);
      }
      var n, e, r;
      this["_commentCo" + t(z, 187) + "s"] || (this[t(T, O) + i(56, -19) + u(D, 889) + "s"] = ((null === (n = this[t(57, 24) + u(753, 768) + "ipts"]) || 0 === n ? 0 : n[t(P, 76) + "nt"]) || "").trim().split("\n").map(function (t) {
        return t[n = N, e = 788, u(e, n - 100)]().replace(/\r$/, "");
        var n, e;
      }).filter(Boolean));
      function i(t, n) {
        return he(n, t - 251);
      }
      function u(t, n) {
        return fe(n - 689, t);
      }
      return this["shuff" + i(211, 285) + "ay"](this[u(946, 947) + (e = -22, r = 26, fe(e - -105, r)) + "ntents"])[0] || "";
    }
  }, {
    key: "conte" + le(o, 1405) + de(-138, -249),
    value: function () {
      function t(t, n) {
        return de(t, n - -79);
      }
      function n(t, n) {
        return de(t, n - B);
      }
      function e(t, n) {
        return de(t, n - 674);
      }
      var r = !1,
        i = this["getSh" + e(452, 452) + "Comment"]();
      if (!i) {
        this[e(s, 384) + "r"].warn("评论内容为" + o(447, 554));
        return r;
      }
      if (this[e(412, 470) + "ByCollects"]([id(t(-367, -258)).visibleToUser()[t(-174, -283) + "able"](!0), descMatches(/评论(.*)，按钮/)[o(507, 543) + n(c, 130) + "ser"]()["click" + t(-361, -362)](!0)]) || this[t(-326, -283) + "ByImageAdapter"]("data:image/png;base64,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")) {
        this[o(372, 379) + "r"][o(351, 450)](n(271, l) + e(535, 461));
        this["sleep" + o(609, 507) + "dom"](2e3, 3e3);
        if ((this[t(-391, -283) + n(112, 142) + "sts"](editable(), {
          clickable: !1
        }) || this["clickByExi" + n(149, 256)](textMatches(/^(说点什么|善语结善缘|发条评论|爱评论的人|有爱评论|分享你此刻的想法|有什么想法|期待你的评论)/))) && (this[e(f, h) + t(-317, -241) + "dom"](1e3, 2e3), this["setIn" + e(427, 517) + "xt"](i))) {
          this[e(388, v) + "ByRandom"](1e3, 2e3);
          for (var u = 0; u < 2; u++) if (this[o(481, 430) + o(d, 395)] ? this[o(p, g) + o(y, 425) + t(-189, -209)](text("发送")) : this["bubbl" + n(224, 279) + "k"](text("发送").findOnce(), 3)) {
            r = !0;
            this[o(586, 493) + n(204, 264) + "nt"]++;
            this[t(-322, -369) + "r"][o(340, m)]("第"[o(419, 524) + "t"](this[t(-336, -255) + "ntCount"], n(213, 295)).concat(i, n(210, k) + "！"));
            this.sleepByRandom(2e3, 3e3);
            break;
          }
        }
        this[e(404, 470) + n(147, 142) + "sts"](id("back_" + e(500, 592))) || this[e(x, 470) + n(205, 280) + n(366, b) + "pter"](Jn) ? "rHhAj" !== e(A, w) ? (this[e(I, 384) + "r"][o(404, 450)](o(480, C) + "“评论”窗" + t(-262, -355)), this.back(2e3)) : (this.logger[o(E, 450)](t(-159, -154) + e(467, 502) + "."), this[t(-305, -286) + e(S, 512) + t(-340, -322)](2e3, 3e3)) : (this.logger[n(264, M)]("后退键关闭“评论”窗" + n(126, 110)), this.back(2e3));
      }
      function o(t, n) {
        return le(n - -865, t);
      }
      return r;
    }
  }, {
    key: "beforeDest" + he(-69, -81),
    value: function () {
      var t = 314;
      function n(n, e) {
        return fe(n - t, e);
      }
      this["stopC" + n(478, 422) + n(454, a)]();
    }
  }]);
}(Wn);
function _n(t, n) {
  var e = $n();
  return (_n = function (t, n) {
    return e[t -= 377];
  })(t, n);
}
function $n() {
  var t = ["26bBAWat", "78SkkgRa", "7897310yMZjih", "2296868bYXNSO", "152675fbkgGt", "445893cBVGdp", "5000409HslSot", "4261479CQnwWt", "8971BTAmQS", "88owWSRs"];
  return ($n = function () {
    return t;
  })();
}
function te() {
  var t = ["Mode", "执行“评论", "getRa", "Acces", "TextV", "n.VIE", "存在！", "nuTou", "opup", "Frame", "findB", "sts", "leArr", "Sleep", "ruct", "失败，退出", "back", "BFixN", "essag", "speed", "likeL", "内容进入超", "57128SKqIHw", ">>>准备", "paren", "关键词养号", "ialCo", "作...", "iew", "114ubSPZA", "map", "ByExi", "conte", "visib", "秒...", "scrip", "ior", "wRate", "rCoun", "任务已完成", "lity", "count", "initR", "2473284sxKdWs", "text", "85476UCFDVO", "orPac", "主动刷新主", "oList", "ByIma", "视频模式", "ntScr", "orSel", "内容“", "ntent", "proto", "eDest", "rentA", "top", "trim", "likeC", "     ", "8609160MDRsKI", "此内容已阅", "Layou", "dom", "FAST", "devic", "在...", "exitA", "upHID", "left", "conca", "wCoun", "unt", "imeMa", "0\n宝马m", "dget.", "ontro", "bnEVW", "paste", "workM", "uffle", "oller", "xFoll", "”任务..", "runTy", "ser", "1OoxKxy", "评论框“发", "sFJkN", "omscx", "yword", "oHome", "Searc", "findO", "stopC", "进入内容失", "默认话术", "cycle", "内容详情", "keywo", "TaskT", "据...", "split", "_comm", "断错误..", "desto", "ent", "shRat", "宝马m24", "com.x", "yout", "本次任务已", "extIn", "Name", "backB", "KyhYf", "start", "refre", "imeMi", "Note", "lvjUH", "info", "InPar", "181214SPiOYz", "autho", "ntere", "1830CoUVTm", "isHID", "rds", "eAdap", "SUJwS", "home", "exitM", "搜索关键字", "个内容进入", "ndom", "中...", "_last", "getPr", "mment", "页内容..", "ntCou", "ector", "ingin", "actio", "AppPa", "2017922kQAzui", "ateTo", "isCur", "pSFDs", "读，直接跳", "AbCGY", "uEYUi", "ount", "1494KpcJBV", "oast", "rRate", "/resu", "now", "isAcc", "初始化失败", "imeou", "readT", "ome", "ByRan", "entCo", "call", "inute", "App启动", "backT", "次执行随机", ".xhs", "进入内容“", "SPEED", "3666495RXeulA", "shuff", "ory", "apply", "Check", "内容转化", "转化中..", "Activ", "desc", "ute", "AppNa", "id.in", "ckage", "rdLis", "ntCom", "xNick", "FullP", "video", "Work", "键字“", "click", "inclu", "hToNe", "logge", "jQwPL", "lects", "xhsdi", "obabi", "botto", "tInit", "switc", "vYrBv", "笔记模式", "pCont", "，尝试启动", "ate", "const", "emitT", "“作者主页", "ext", "setTe", "bindN", "nce", "评论框", "confi", "likeR", "lengt", "setCl", "内容入口判", "init", "ntRat", "弹窗...", "”浏览..", "exist", "ment", "启动，等待", "meMin", "bound", "ByCol", "超时，立即", " 初始化失", "pter", "waitF", "behav", "MEDIU", "过...", "able", "log", "cente", "isInH", "andro", "iptID", "terva", "ller", "close", "noteE", "jIWRD", "LDAhD", "word", "leToU", "小红书", "sleep", "关闭阻碍性", "ter", "check", "matri", "首页初始化", "des", "，立即重试", "Relat", "index", "umtim", "稳定中..", "ntKey", "RihCF", "”任务成功", "follo", "isSto", "YmGXA", "eHeig", "搜索结果为", "comme", "EditT", "ForNe", "filte", "navig", "geAda", "oInit", "warn", "次执行进入", "id.wi", "脚本...", "getSh", "”搜索结果", "test", "ipts", "runTi", "ime", "ity", "“关注”操", "repla", "Contr"];
  return (te = function () {
    return t;
  })();
}
function ne(t, n) {
  var e = te();
  return (ne = function (t, n) {
    return e[t -= 124];
  })(t, n);
}
function ee() {
  var t, n;
  try {
    var e = !Boolean[r(-608, -724) + "type"].valueOf[r(-495, -610)](Reflect["const" + (t = 1093, n = 1201, ne(n - 944, t))](Boolean, [], function () {}));
  } catch (t) {}
  function r(t, n) {
    return ne(t - -906, n);
  }
  return (ee = function () {
    return !!e;
  })();
}
{
  !function () {
    var t = 820,
      n = 820,
      e = 816,
      r = 363,
      i = 437;
    function u(t, n) {
      return _n(t - 387, n);
    }
    function o(t, n) {
      return _n(t - i, n);
    }
    function a(t, n) {
      return _n(n - -736, t);
    }
    for (var s = $n();;) try {
      if (715211 === -parseInt(o(817, t)) / 1 * (-parseInt(a(-357, -354)) / 2) + parseInt(o(816, n)) / 3 + -parseInt(a(-346, -351)) / 4 + parseInt(_n(-168 - -554, -166)) / 5 * (parseInt(o(820, 818)) / 6) + -parseInt(o(814, e)) / 7 * (-parseInt(u(768, 766)) / 8) + -parseInt(a(-r, -358)) / 9 + -parseInt(o(821, 818)) / 10) {
        break;
      }
      s.push(s.shift());
    } catch (t) {
      s.push(s.shift());
    }
  }();
  (function () {
    var t = 83,
      n = 88,
      e = 143,
      r = 1212,
      i = 252,
      u = 30,
      o = 668,
      a = 699,
      s = 842,
      c = 667;
    function l(t, n) {
      return ne(n - 312, t);
    }
    function f(t, n) {
      return ne(n - c, t);
    }
    var h = te();
    function v(t, n) {
      return ne(t - -429, n);
    }
    function d(t, n) {
      return ne(t - s, n);
    }
    for (;;) try {
      if (992488 === parseInt(v(-98, -t)) / 1 * (parseInt(v(-38, -n)) / 2) + -parseInt(f(977, 939)) / 3 * (-parseInt(d(1130, 1210)) / 4) + -parseInt(d(1147, 1002)) / 5 + -parseInt(v(-e, -87)) / 6 + -parseInt(f(r, 1086)) / 7 + -parseInt(v(-164, -i)) / 8 * (parseInt(v(-u, 88)) / 9) + -parseInt(l(o, 683)) / 10 * (-parseInt(l(a, 680)) / 11)) {
        break;
      }
      h.push(h.shift());
    } catch (t) {
      h.push(h.shift());
    }
  })();
}
var re = function (t) {
  var e = 218,
    r = 562,
    i = 516,
    u = 698,
    o = 544,
    a = 467,
    s = 953,
    c = 1215,
    l = 605,
    f = 454,
    h = 502,
    v = 681,
    d = 965,
    p = 27,
    g = 45,
    y = 176,
    m = 674,
    k = 923,
    x = 1082,
    b = 1246,
    A = 950,
    w = 1421,
    I = 1681,
    C = 789,
    E = 1207,
    S = 351,
    M = 1065,
    B = 1034,
    z = 898,
    T = 18,
    O = 1066,
    D = 1010,
    P = 6,
    N = 83,
    j = 352,
    q = 432,
    F = 500,
    U = 464,
    V = 130,
    Y = 190,
    W = 94,
    K = 124,
    J = 94,
    Q = 1115,
    L = 82,
    H = 1295,
    X = 1242,
    G = 24,
    Z = 87,
    _ = 237,
    $ = 1230,
    tt = 147,
    nt = 204,
    et = 697,
    rt = 214,
    it = 361,
    ut = 332,
    ot = 297,
    at = 76,
    st = 684,
    ct = 917,
    lt = 787,
    ft = 222,
    ht = 144,
    vt = 248,
    dt = 658,
    pt = 200,
    gt = 44,
    yt = 347,
    mt = 205,
    kt = 74,
    xt = 99,
    bt = 427,
    At = 859,
    wt = 235,
    It = 381,
    Ct = 698,
    Et = 17,
    St = 545,
    Mt = 110,
    Bt = 856,
    Rt = 511,
    zt = 638,
    Tt = 216,
    Ot = 504,
    Dt = 270,
    Pt = 296,
    Nt = 582,
    jt = 331,
    qt = 692,
    Ft = 754,
    Ut = 825,
    Vt = 562,
    Yt = 1189,
    Wt = 438,
    Kt = 944,
    Jt = 668,
    Qt = 623,
    Lt = 542,
    Ht = 1037,
    Xt = 702,
    Gt = 1092,
    Zt = 1263,
    _t = 1143,
    $t = 1015,
    tn = 721,
    nn = 1118,
    en = 1212,
    rn = 1059,
    un = 1110,
    on = 1260,
    an = 916,
    sn = 1278,
    cn = 1206,
    ln = 933,
    fn = 1093,
    hn = 919,
    vn = 826,
    dn = 801,
    pn = 1050,
    gn = 1226,
    yn = 1084,
    mn = 782,
    kn = 927,
    xn = 1604,
    bn = 974,
    An = 1004,
    wn = 160,
    In = 264,
    Cn = 292,
    En = 999,
    Sn = 106,
    Mn = 1036,
    Bn = 347,
    Rn = 890,
    zn = 981,
    Tn = 43,
    On = 967,
    Dn = 244,
    Pn = 895,
    Nn = 914,
    jn = 843,
    qn = 848;
  function Fn(t, n) {
    return ne(n - -960, t);
  }
  function Un(t, n) {
    return ne(n - 102, t);
  }
  function Vn(t, n) {
    return ne(n - -855, t);
  }
  function Yn(t, n) {
    return ne(t - -818, n);
  }
  function Wn() {
    var t,
      e,
      r,
      i,
      u,
      o,
      a,
      s,
      c,
      l,
      f,
      h,
      v,
      d,
      p = 630,
      g = arguments[x(787, 797) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {};
    function y(t, n) {
      return ne(t - 673, n);
    }
    function m(t, n) {
      return ne(t - -536, n);
    }
    function k(t, n) {
      return ne(n - -60, t);
    }
    function x(t, n) {
      return ne(n - p, t);
    }
    n._classCallCheck(this, Wn);
    d = function (t, e, r) {
      var i = 194;
      function u(t, n) {
        return ne(n - -888, t);
      }
      e = n._getPrototypeOf(e);
      return n._possibleConstructorReturn(t, ee() ? Reflect["const" + u(-583, -631)](e, r || [], n._getPrototypeOf(t)[ne(351 - i, 356) + "ructor"]) : e[u(-808, -764)](t, r));
    }(this, Wn, [Object.assign({
      AppName: null !== (t = g.AppName) && 0 !== t ? t : "小红书",
      AppPackage: null !== (e = g["AppPa" + k(42, 73)]) && 0 !== e ? e : "com.x" + m(-148, -121) + ".xhs"
    }, g)]);
    d[m(-371, -350) + "g"] = g;
    null !== (r = g[x(839, 959) + "pe"]) && 0 !== r ? d.runType = r : d.runType = 1;
    null !== (i = g["runTi" + y(850, 727) + "ute"]) && 0 !== i ? d["runTimeMin" + x(905, 760)] = i : d["runTimeMin" + x(905, 760)] = 2;
    d[x(1034, bn) + y(1046, An)] = g.keywords || "宝马m24" + y(992, 1132) + "2";
    d[x(898, 974) + m(-402, -480) + "t"] = d.keywords[k(wn, 287)]("\n")[x(826, 855) + "r"](Boolean)[m(-263, -235)](function (t) {
      return t.trim().replace(/\r$/, "");
    });
    null !== (u = g.workMinute) && 0 !== u ? d[k(271, In) + k(244, 352)] = u : d[k(271, In) + k(244, 352)] = 2;
    null !== (o = g.refreshRate) && 0 !== o ? d["refre" + k(382, Cn) + "e"] = o : d["refre" + k(382, Cn) + "e"] = 5;
    null !== (a = g[k(443, 309) + "rRate"]) && 0 !== a ? d[x(916, En) + "rRate"] = a : d[x(916, En) + "rRate"] = 5;
    null !== (s = g[k(-32, Sn) + "ate"]) && 0 !== s ? d.likeRate = s : d.likeRate = 50;
    null !== (c = g.followRate) && 0 !== c ? d.followRate = c : d.followRate = 20;
    null !== (l = g[k(256, Bn) + x(Rn, 993) + "n"]) && 0 !== l ? d[m(-129, -278) + y(Mn, 996) + "n"] = l : d[m(-129, -278) + y(Mn, 996) + "n"] = 15;
    null !== (f = g["readT" + x(1066, 948) + "x"]) && 0 !== f ? d[k(250, 347) + m(-218, -349) + "x"] = f : d[k(250, 347) + m(-218, -349) + "x"] = 30;
    null !== (h = g[m(-398, -307) + "Comme" + m(-365, -255) + "e"]) && 0 !== h ? d.commentRate = h : d.commentRate = 3;
    null !== (v = g["commentScr" + m(-344, -365)]) && 0 !== v ? d[x(zn, 852) + "ntScriptID"] = v : d[x(zn, 852) + "ntScriptID"] = 0;
    d["comme" + m(-242, -217) + k(140, 176)] = g[k(Tn, 162) + y(On, 924) + "ipts"] || {
      id: 1,
      title: "默认话术",
      content: "您好\n            " + k(279, Dn) + "       各位好\n    " + x(850, 934) + k(357, 244) + "          不错"
    };
    d.count = 0;
    d[y(976, 882) + m(-138, -79)] = 0;
    d[x(955, 847) + k(313, 256) + "t"] = 0;
    d.authorCount = 0;
    d[y(Pn, 786) + "ntCount"] = 0;
    d.noteEntered = [];
    d["isAut" + y(901, Nn)] && d[y(jn, qn)]();
    return d;
  }
  n._inherits(Wn, t);
  return n._createClass(Wn, [{
    key: Fn(-643, -675) + Fn(-737, -748) + "e",
    value: function () {
      function t(t, n) {
        return Fn(t, n - 1831);
      }
      function n(t, n) {
        return Fn(n, t - xn);
      }
      function e(t, n) {
        return Fn(n, t - 1474);
      }
      var r = this;
      function i(t, n) {
        return Un(n, t - -595);
      }
      var u = arguments[n(811, 856) + "h"] > 0 && 0 !== arguments[0] && arguments[0];
      if (!this[n(Ht, 956) + e(814, 901) + "pp"]() && (this.logger[e(Xt, 591)]("当前应用未在前台运行" + t(923, 1026) + n(1025, 925)), !this[n(1005, Gt) + "App"]())) {
        this[i(-116, -51) + t(Zt, 1132) + "e"] = t(_t, 1284) + "失败，退出" + e(746, 768);
        this[t(1041, $t) + "r"].warn(this.exitMessage);
        return this[e(864, 782) + "ry"]();
      }
      if (this.count <= 0 || u) {
        if (!this[e(697, 687) + n(939, 919) + "ector"](id(e(tn, 767)), {
          timeout: 15e3,
          beforeFunc: function () {},
          turnFunc: function () {
            return r["isInH" + function (n, e) {
              return t(e, n - -1256);
            }(23, 17)]();
          }
        })) {
          if (this[n(922, 1046) + "tInitialCount"] >= 3) {
            if (t(nn, 1131) !== e(774, 723)) {
              var o = arguments.length > 0 && arguments[0] !== gsgsdplrjjb ? arguments[0] : "";
              return o ? (this[e(658, 592) + "r"].info(("执行搜索关" + t(1043, 1011)).concat(o, i(-165, -281) + ".")), wovqavtsbxz["start" + e(642, 517) + t(rn, un)]({
                action: "android.intent." + t(1207, on) + n(892, 760) + "W",
                data: ("xhsdiscover://search" + e(an, 876) + "lt?ke" + t(sn, cn) + "=")[n(959, 1067) + "t"](o),
                packageName: this.AppPackage
              }), this["waitF" + i(-198, -222) + "ector"](zwctsgiνrec(/^(全部|综合|问一问)$/), {
                timeout: 8e3
              })) : (this.logger[t(en, 1100)](e(892, 1018) + "为空..."), !1);
            }
            this[t(1384, 1275) + "essibility" + i(-250, -115)] && this[i(-298, -216) + e(760, 852) + "sibility"]();
            this[e(891, 789) + "essage"] = "脚本 ".concat(this.AppName, i(-312, -439) + "败!");
            return this[n(994, 1039) + "ry"](!0);
          }
          this["scrip" + n(794, 929) + i(-224, -176) + "unt"] = (this[n(922, ln) + t(fn, 1021) + e(783, 846) + "unt"] || 0) + 1;
          this["showT" + e(914, 971)]("".concat(this.AppName, e(hn, 975) + e(723, 624) + "..."));
          2 === this["scrip" + i(-343, -221) + "ialCo" + i(-176, -310)] ? this[e(vn, dn) + "llApp2"]() : this[t(1101, 1183) + "pp"]();
          this[i(-291, -365) + "ByRan" + t(pn, 1179)](2e3, 3e3);
          return this[n(929, 917) + "umtime"](!0);
        }
        this.logger.info("App首次" + n(820, vn) + t(gn, yn) + ".");
        this[n(785, vn) + "ByExists"](desc("首页")[e(655, mn) + i(-306, -399)]()) && this[t(896, $t) + "r"].log("刷新首页数" + e(860, kn));
        this[i(-291, -298) + "ByRan" + n(952, 986)](3e3, 6e3);
        return !0;
      }
    }
  }, {
    key: Fn(-672, -755) + Yn(-681, -621) + Fn(-592, -709),
    value: function () {
      if (this["isHID" + n(789, Jt)]) {
        if ("SUJwS" === t(Qt, 677)) {
          return !1;
        }
        this[n(425, 569) + "r"].info("主动刷新主页内容...");
        this[t(467, 504) + "ByRan" + t(523, 610)](3e3, 5e3);
      }
      function t(t, n) {
        return Yn(n - 1120, t);
      }
      function n(t, n) {
        return Vn(t, n - 1280);
      }
      if (this["click" + t(Lt, 576) + "sts"](text("知道了"))) {
        this[n(513, 569) + "r"].info(Fn(119, 214 - 971) + n(660, 597));
        this.sleepByRandom(1e3, 2e3);
      }
    }
  }, {
    key: "checkTaskCompleted",
    value: function () {
      var t = 1190,
        n = 339;
      function e(t, e) {
        return Vn(e, t - n);
      }
      function r(t, n) {
        return Vn(n, t - -37);
      }
      function i(t, n) {
        return Yn(t - 1625, n);
      }
      !this[i(Yt, 1112) + i(932, 887) + "TaskT" + o(Wt, 468)] && (this["_last" + i(932, 917) + "TaskT" + e(-278, -327)] = Date[o(618, 633)]());
      if (1 === this[i(1136, 1159) + "pe"]) {
        return !(this[e(-279, -384) + "meMin" + e(-386, -274)] <= 0) && Date.now() - this["_last" + e(-391, -364) + "TaskT" + r(-654, -633)] >= 60 * this.runTimeMinute * 1e3;
      }
      if (2 === this.runType) {
        var u = Date.now() - this["_lastCheck" + r(-547, -598) + o(588, 468)] >= 60 * this[e(-192, -191) + "inute"] * 1e3;
        this[e(-172, -167) + r(-758, -754) + "t"][i(974, Kt) + "h"] && u && (u = !1, this["navig" + i(1199, 1149) + o(378, 369)]());
        return u;
      }
      function o(n, e) {
        return Fn(n, e - t);
      }
      return !0;
    }
  }, {
    key: Vn(-654, -513) + "Contr" + Fn(-741, -634),
    value: function () {
      function t(t, n) {
        return Yn(n - Vt, t);
      }
      0 != this.count && this[r(721, At) + e(309, 367) + "e"]();
      0 === this.count && 2 === this[u(237, wt) + "pe"] && this[e(378, It) + t(215, 136) + "Work"]();
      if (this[r(641, Ct) + "TaskCompleted"]()) {
        var n = 2 === this.runType ? r(704, 673) + t(Et, 26) + "，退出脚本！" : "任务时长"[r(751, 790) + "t"](this["runTi" + r(613, St) + "ute"], "分钟已完成，退出脚本！");
        this.logger[t(136, Mt)](n);
        this[r(812, Bt)](2e3);
        this.alert(e(530, Rt) + "结束", n);
        this.destory();
        return !0;
      }
      function e(t, n) {
        return Yn(n - 973, t);
      }
      function r(t, n) {
        return Un(n, t - 334);
      }
      this[e(419, 360) + "FullP" + t(2, -5)]();
      0 !== this.count && this[e(190, 306) + r(579, 672) + "xt"]({
        waitTime: this.getRandom(2e3, 3e3)
      });
      this[r(zt, 707) + "ByRan" + u(Tt, 325)](1e3, 2e3);
      this[e(409, 439)]++;
      var i = this["getTimeout" + e(Ot, 379) + "xt"]();
      function u(t, n) {
        return Yn(t - 726, n);
      }
      this[r(819, 743) + u(56, 41) + "lity"](this[u(Dt, 172) + t(-5, 96) + "e"]) && this[e(352, Pt) + u(87, 126) + r(Nt, 673)]([desc("首页")[t(-235, -115) + e(364, 342)](), text("首页")]) && (this.logger[e(394, 521)](e(344, 445) + u(293, jt) + "."), this["sleep" + e(663, 564) + "dom"](3e3, 5e3));
      this["isHID" + e(438, 398)] ? "WaoJk" !== r(655, qt) ? this.checkNoteHID() : this.checkNote() : this["check" + r(800, Ft)]();
      return this["bindN" + r(793, Ut) + r(629, 686) + "l"](i);
    }
  }, {
    key: "checkNoteHID",
    value: function () {
      var t = 1199,
        n = 1087,
        e = 311,
        r = 1168,
        i = 1125,
        u = 1111,
        o = this;
      function a(t, n) {
        return Vn(n, t - 1808);
      }
      var s = textMatches(/(.+)(\d|万|\+)$/)[a(1178, 1246) + "r"](function (s) {
        var c = s.text() || "";
        if (c.includes(":")) {
          return !1;
        }
        function l(t, n) {
          return a(t - -87, n);
        }
        if (/^\s|\s$/[l(1101, 978)](c)) {
          if ("HkEwB" === l(t, n)) {
            var f;
            if (!this[v(e, 261) + "entCo" + d(-212, -296) + "s"]) {
              this["_comm" + l(1276, 1264) + d(-330, -296) + "s"] = ((null === (f = this[l(1088, 1218) + l(1160, 1018) + "ipts"]) || 0 === f ? 0 : f.content) || "")[l(r, 1091)]().split("\n").map(function (t) {
                return t[n = -216, e = -88, l(n - -1384, e)]().replace(/\r$/, "");
                var n, e;
              })[l(1091, 1138) + "r"](euxuzoqymje);
            }
            return this["shuff" + d(-484, -338) + "ay"](this[h(i, u) + "entContents"])[0] || "";
          }
          return !1;
        }
        if (/关注|消息|-/[d(-310, -358)](c)) {
          return !1;
        }
        function h(t, n) {
          return a(n - -190, t);
        }
        if (c[d(-485, -451) + "des"](o["curre" + d(-405, -379) + h(921, 962)])) {
          return !1;
        }
        function v(t, n) {
          return a(t - -990, n);
        }
        if (o[d(-524, -397) + "ntered"][v(105, 182) + "des"](c)) {
          return !1;
        }
        function d(t, n) {
          return a(n - -1546, t);
        }
        return !0;
      }).find();
      function c(t, n) {
        return Vn(t, n - 383);
      }
      for (var l = function () {
          var t = s[f],
            n = t[h(tt, nt)]() || t[h(305, 272)]() || "";
          if (!n) {
            return h(163, 92) === v(-145, -136) ? (o[r(-636, -490) + "r"][r(-446, -446)](h(187, 247) + i(et, 762) + "."), 0) : !ijmgschdjgj[h(rt, it) + v(80, 223) + "d"].includes(ayulenkwrvh[v(-161, -225)]() || txcqezahtjm.text() || "");
          }
          if (o["noteE" + r(-175, -264) + "d"]["inclu" + v(-82, -54)](n)) {
            o.logger[r(-555, -446)]("此内容已阅读，直接跳" + r(-417, -448));
            return 0;
          }
          o[h(162, 132) + "r"].info(r(-107, -217).concat(n, "”"));
          var e = t[v(-112, 0) + "s"]();
          if (!o[r(-487, -493)](e[h(ut, ot)] - 150, e[h(207, 296) + "rY"]())) {
            o.logger.warn(h(358, 363) + "败：", e);
            return 0;
          }
          function r(t, n) {
            return a(n - -1587, t);
          }
          o.logger[v(at, 167)]("第".concat(o.noteEntered[r(-357, -467) + "h"] + 1, r(-380, -255) + i(st, 540) + "."));
          if (!o.waitForSelector(textMatches(/^(关注|已关注|说点什么).*/), {
            timeout: 8e3
          })) {
            o[i(467, 557) + "r"][v(-61, -133)]("进入内容失败：", e);
            return 0;
          }
          function i(t, n) {
            return a(n - -540, t);
          }
          o["noteE" + r(-171, -264) + "d"].push(n);
          var u = !!o[i(730, 666) + "yImag" + i(ct, lt) + h(ft, 103)]("data:image/png;base64,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"),
            c = !u;
          u ? o[i(573, 557) + "r"].info("视频模式") : c && o[r(-348, -490) + "r"][r(-353, -268)](r(-603, -481));
          o[v(-88, -33) + "ByRandom"](2e3, 3e3);
          var l = o.getRandom(o[r(-285, -227) + "imeMin"], o[h(425, 534) + "imeMax"]);
          function h(t, n) {
            return a(t - -935, n);
          }
          function v(t, n) {
            return a(t - -1243, n);
          }
          o.logger[v(-102, -51)](h(ht, 127)[i(707, 728) + "t"](l, "秒..."));
          o.forEachTime(l, function (t) {
            var n, e;
            function r(t, n) {
              return v(n - -455, t);
            }
            u && 0 !== t && t % 15 == 0 && (o[function (t, n) {
              return h(n - -970, t);
            }(-685, -801) + "hToNext"](), o["sleep" + (n = -208, e = -273, i(e, n - -1030) + "dom")](3e3, 5e3));
            if (c) {
              var a = t >= 2 && o.getProbability(30);
              o[r(-640, -594) + r(-682, -602) + "xt"]({
                reverse: a
              });
              o["sleep" + r(-265, -336) + "dom"](3e3, 5e3);
            }
            o[r(-512, -543)](1e3);
          });
          o.getProbability(o.authorRate) && o[r(-491, -493) + r(-243, -360) + "sts"](textMatches(/^(关注|已关注)$/), {
            setPoint: function (t, n) {
              return [t - 200, n];
            }
          }) && (o[h(387, 246) + "rCount"]++, o.logger.info("第".concat(o[i(711, 782) + "rCount"], h(vt, 381) + h(177, 99) + h(191, 121) + ".")), o[v(-132, -162) + "imeout"](o[i(653, dt) + "ndom"](5, 10)), o[r(-484, -375)](2e3));
          o["getPr" + v(-142, -59) + "lity"](o[r(-617, -468) + h(174, 203)]) && (u ? o[i(574, 554) + r(-491, -342) + v(-63, -48) + "pter"]("data:image/png;base64,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") : o["click" + r(-274, -342) + "geAda" + h(pt, 144)]("data:image/png;base64,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") || o[r(-514, -493) + r(-458, -342) + r(-284, -407) + r(-528, -452)]("data:image/png;base64,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")) && (o.likeCount++, o.logger.info("第".concat(o["likeC" + r(-330, -236)], "次执行随机“点赞”操" + i(803, 683))), o.sleepByRandom(2e3, 3e3));
          o["getPr" + r(-531, -486) + "lity"](o["follo" + i(780, 693)]) && o.clickByExists(text("关注")) && (v(gt, 50) === r(-417, -300) ? (o[v(-73, -217) + h(334, yt) + "t"]++, o[i(557, 557) + "r"][v(76, mt)]("第".concat(o["follo" + h(334, 337) + "t"], i(975, 828) + v(-50, kt) + v(-20, -47))), o["sleep" + r(-295, -225) + i(701, 721)](2e3, 3e3)) : tghckccxrwv[r(-364, -490) + "r"][i(794, 779)]("笔记模式"));
          o.getProbability(o[v(-68, -133) + h(189, xt) + "e"]) && o[r(-541, -429) + "ForCo" + h(402, 293)]() && (o["comme" + h(404, 350) + "nt"]++, o.logger.info("第".concat(o["comme" + h(404, 344) + "nt"], h(433, 494) + "“评论”操作...")), o["sleep" + h(bt, 325) + i(696, 721)](2e3, 3e3));
          o.backToList();
        }, f = 0; f < s[c(-318, -305) + "h"]; f++) l();
    }
  }, {
    key: Yn(-613, -750) + Vn(-544, -491),
    value: function () {
      var t = 693,
        n = 382,
        e = 687,
        r = 356,
        i = 83,
        u = this,
        o = 2 === this.runType,
        a = o ? className("android.widget." + c(354, q) + s(-169, -287))["visibleToU" + c(F, 515)]()[h(1116, 1020) + "r"](function (t) {
          var n,
            e = 140;
          function r(t, n) {
            return h(t, n - -1033);
          }
          function i(t, n) {
            return h(n, t - e);
          }
          function o(t, n) {
            return l(t, n - -1208);
          }
          if (![i(1126, 1008) + "id.widget." + c(89, -2) + "iveLa" + i(1290, 1330), "andro" + r(-23, -7) + r(16, L) + i(1187, H) + i(X, 1309) + "t"][c(21, G) + c(Z, 97)](null === (n = t[o(-654, -632) + "t"]()) || 0 === n ? 0 : n["class" + c(_, 223)]())) {
            return !1;
          }
          var a = (t[o(-677, -612)]() || "")[i(1237, $)]();
          function c(t, n) {
            return s(n, t - 437);
          }
          return !(!a || ["全部"]["inclu" + o(-645, -691)](a) || /^\d+$/.test(a)) && !u["noteE" + o(-566, -529) + "d"][o(-852, -757) + "des"](a);
        }).find() : className(h(979, 986) + "id.wi" + s(-209, -238) + "FrameLayout").descMatches(/^(视频|笔记|直播).+/)[l(606, 585) + "leToUser"]().filter(function (t) {
          function n(t, n) {
            return h(t, n - -1208);
          }
          return n(72, -17) === n(-17, -17) ? !u[n(-135, -217) + (i = Q, o = 1049, l(o, i - 436)) + "d"].includes(t[e = 592, r = 557, h(e, r - -367)]() || t.text() || "") : (rfrtwdsrllb.logger.warn(n(-1, -73) + "败：", avyzxttjoph), 0);
          var e, r, i, o;
        }).find();
      function s(t, n) {
        return Fn(t, n - 402);
      }
      function c(t, n) {
        return Un(t, n - i);
      }
      function l(t, n) {
        return Un(t, n - 207);
      }
      var f = function () {
        var t = 480,
          i = 174,
          l = 358,
          f = a[v],
          h = f[b(-619, -740)]() || f[b(-461, -481)]() || "";
        if (!h) {
          if ("uEYUi" === m(-739, -594)) {
            u.logger[A(-68, 12)]("内容入口判断错误...");
            return 0;
          }
          this[m(-927, -840) + "hToNext"]({
            waitTime: this[A(202, 69) + b(-368, -378)](2e3, 3e3)
          });
        }
        if (u["noteE" + m(-515, -621) + "d"][m(-799, -849) + "des"](h)) {
          u[b(-604, -490) + "r"].log(A(220, V) + "读，直接跳过...");
          return 0;
        }
        u.checkFullPopup();
        var d = o ? descMatches(/^分享(.+)/)[m(-925, -817) + "s"]() : /^视频/[A(184, 59)](h),
          p = o ? !d : /^笔记/[I(-710, -651)](h),
          g = /^直播/[I(-708, -651)](h),
          y = p ? "笔记" : d ? "视频" : g ? "直播" : "未知";
        function m(t, n) {
          return c(t, n - -1176);
        }
        u.logger[A(41, Y)]("[".concat(y, "]: 进入" + I(-497, -590)).concat(h, "”"));
        u.setMenuTouchable(!1);
        var k = f.bounds(),
          x = k[m(-781, -842) + "m"] <= u[m(-654, -681) + m(-811, -771) + "ht"] / 2;
        if (!u.click(u[m(-861, -746) + "ndom"](k[I(-747, -697) + "rX"]() - 50, k.centerX() + 50), x ? k[A(121, -27) + "m"] - 1 : k[m(-796, -690)] + 1) && !u["click" + A(109, 3) + I(-766, -740)]([desc(h), f])) {
          u["setMe" + m(-751, -741) + "chable"](!0);
          u.logger[m(-877, -762)](m(-656, -651) + "败：", f);
          return 0;
        }
        function b(t, n) {
          return c(n, t - -933);
        }
        u["setMe" + I(-727, -636) + "chable"](!0);
        u[I(-609, -742) + "r"][b(-382, -281)]("第"[b(-433, -358) + "t"](u.noteEntered.length + 1, "个内容进入" + I(-660, -759) + "."));
        if (!u[A(-41, 7) + I(-545, -591) + I(-501, -499)](id(b(-405, -480)), {
          timeout: 8e3,
          turnFunc: function () {
            function t(t, n) {
              return A(n, t - l);
            }
            return id(t(541, e) + "utton")[t(r, 253) + "s"]() || descMatches(/^(返回|关闭|评论框)$/).clickable()[n = -538, u = -542, I(u, n - i) + "s"]();
            var n, u;
          }
        })) {
          u.logger[I(-512, -657)](m(-735, -727) + "时！");
          u.backToHome();
          return 0;
        }
        function A(t, e) {
          return s(t, e - n);
        }
        u.noteEntered.push(h);
        u["sleepByRan" + A(108, 132)](2e3, 3e3);
        var w = u[I(-695, -641) + A(W, 204)](u[I(-519, -479) + "imeMin"], u.readTimeMax);
        function I(t, n) {
          return c(t, n - -1071);
        }
        u[A(-34, -32) + "r"].log("内容转化".concat(w, I(-726, -609)));
        u.forEachTime(w, function (n) {
          var e,
            r,
            i = 1010;
          function o(t, n) {
            return b(t - 380, n);
          }
          d && 0 !== n && n % 15 == 0 && (u.switchToNext(), u.sleepByRandom(3e3, 5e3));
          if (p) {
            if ("vYrBv" !== I(-247, -338 - 396)) {
              return !1;
            }
            var a = n >= 2 && u.getProbability(30);
            u[function (t, n) {
              return A(t, n - -122);
            }(-170, -147) + "hToNext"]({
              reverse: a
            });
            u[o(-166, -258) + o(41, 59) + (e = 432, r = t, I(r, e - i))](3e3, 5e3);
          }
          u.sleep(1e3);
        });
        u[I(-548, -681) + "FullPopup"]();
        u["getPr" + m(-884, -843) + b(-465, -347)](u[A(255, 193) + "rRate"]) && u[m(-891, -850) + "ByCol" + A(-14, -30)]([descMatches(/^作者.+$/), id("matri" + A(62, -40) + "NameView")[b(-472, -372) + I(-584, -686) + A(133, 154)]()]) && (u[A(108, 193) + "rCount"]++, u.logger.info("第".concat(u["autho" + b(-467, -438) + "t"], A(-31, 54) + "“作者主页”浏览...")), u.sleepByRandom(5e3, 1e4), u.back(2e3));
        u["getPr" + I(-682, -738) + "lity"](u.likeRate) && u[m(-731, -850) + m(-857, -812) + A(-155, -30)]([descMatches(/^点赞.+$/)[b(-537, -541) + b(-381, -318) + m(-513, -640)](1), id(b(-485, -392) + "ayout")[m(-807, -715) + "leToU" + m(-565, -661)]()]) && (u.likeCount++, u[b(-604, -505) + "r"].info("第".concat(u[I(-563, -583) + m(-658, -593)], I(-414, -471) + "“点赞”操" + A(K, J))), u["sleepByRan" + m(-736, -683)](2e3, 3e3));
        if (u["getPr" + I(-664, -738) + "lity"](u[A(28, 41) + "wRate"]) && u["click" + m(-794, -812) + "lects"]([id(b(-542, -426) + m(-672, -664) + "owView")["visib" + b(-548, -493) + "ser"](), text("关注")["visibleToU" + b(-418, -410)]()])) {
          if ("RihCF" !== I(-538, -671)) {
            duyromqfoνk[b(-604, -506) + "r"].log(A(120, 130) + I(-350, -491) + "过...");
            return 0;
          }
          u["follo" + I(-629, -570) + "t"]++;
          u[A(-32, -32) + "r"][b(-382, -481)]("第"[b(-433, -315) + "t"](u[I(-812, -669) + "wCount"], m(-653, -576) + b(-508, -411) + A(70, W)));
          u[I(-794, -684) + m(-569, -582) + "dom"](2e3, 3e3);
        }
        u["backT" + m(-756, -700)]();
      };
      function h(n, e) {
        return Un(n, e - t);
      }
      for (var v = 0; v < a[h(867, 962) + "h"]; v++) if (0 === f()) {
        if ("mqpNS" !== s(-228, -360)) {
          break;
        }
        var d, p, g;
        if (this.setClip(pqcνqsgfnbm)) {
          null === (d = this["start" + c(631, 498)]) || 0 === d || null === (p = d.runtime) || 0 === p || null === (g = p["behav" + c(460, U)]) || 0 === g || g[l(684, 632)]();
        }
      }
    }
  }, {
    key: "getSh" + Yn(-493, -355) + "Comment",
    value: function () {
      var t;
      this["_comm" + e(-512, -494) + "ntents"] || ("OJVHU" === e(-562, -653) ? (fsvkfpqomxt[e(-771, -725) + e(-779, -823) + "xt"](), zbepozvqezz[e(-720, -582) + r(511, 406) + e(-614, -616)](3e3, 5e3)) : this[e(-574, -571) + "entContents"] = ((null === (t = this[n(235, 251) + n(303, 323) + "ipts"]) || 0 === t ? 0 : t[n(366, 304) + "nt"]) || "")[n(j, 331)]().split("\n").map(function (t) {
        return t.trim()[function (t, n) {
          return i(t - 1371, n);
        }(1197, 1319) + "ce"](/\r$/, "");
      })[r(208, 222) + "r"](Boolean));
      function n(t, n) {
        return Yn(n - 847, t);
      }
      function e(t, n) {
        return Fn(n, t - 38);
      }
      function r(t, n) {
        return Yn(n - 815, t);
      }
      function i(t, n) {
        return Vn(n, t - 440);
      }
      return this[i(5, -100) + "leArray"](this._commentContents)[0] || "";
    }
  }, {
    key: "checkForCo" + Fn(-475, -576),
    value: function () {
      var t = 267;
      function n(t, n) {
        return Fn(n, t - 641);
      }
      var e = this,
        r = !1;
      function i(t, n) {
        return Yn(n - -95, t);
      }
      function u(t, n) {
        return Vn(t, n - 437);
      }
      var o = this[a(-434, -321) + n(P, -133) + "Comment"]();
      function a(t, n) {
        return Yn(n - 264, t);
      }
      return o ? this.clickByCollects([desc(u(-236, -254)), className("EditText"), className("android.widget." + i(-607, -690) + "ext"), editable(!0), textMatches(/(.?)说点什么(.*)/)]) ? (!this.waitForSelector(id("[输入框]"), {
        timeout: 3e3,
        turnFunc: function () {
          function n(t, n) {
            return a(n, t - 708);
          }
          function r(t, n) {
            return u(n, t - -443);
          }
          return e.isHIDMode ? text("发送").exists() : text("发送").exists() && className(r(-670, -554) + r(-630, -736) + n(474, 330) + "EditT" + r(-701, -615))[n(328, t) + "s"]();
        }
      }) && (this[i(-750, -769) + "r"][i(-566, -684)]("等待输入框" + i(-764, -733) + "重试！"), this[n(-57, -118) + n(-63, -172)]()), this.logger.log("评论回复内容：" + o), this["speed" + a(-311, -298)](this[i(-467, -495)][i(-606, -728) + "M"]), this["conte" + i(-717, -778) + "ment"](o) && ("yNHaE" !== n(46, N) ? r = !0 : this.exitApp()), r) : (this[n(-175, -250) + "r"].warn("评论框不存" + a(-317, -243)), r) : (this.logger[a(-372, -325)]("评论内容为空..."), r);
    }
  }, {
    key: "conte" + Un(204, 237) + Un(412, 277),
    value: function () {
      function t(t, n) {
        return Un(n, t - 628);
      }
      function n(t, n) {
        return Yn(t - 645, n);
      }
      function e(t, n) {
        return Fn(t, n - 289);
      }
      function r(t, n) {
        return Vn(t, n - 1517);
      }
      var i = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : "";
      if (!i) {
        this.logger[t(959, M)]("内容评论内容不能为空！");
        return !1;
      }
      if (this[r(897, B) + "Mode"]) {
        var u, o, a;
        if (this[n(-5, -115) + "ip"](i)) {
          null === (u = this["start" + r(z, 975)]) || 0 === u || null === (o = u.runtime) || 0 === o || null === (a = o[t(914, 905) + n(106, 8)]) || 0 === a || a[e(-199, -348)]();
        }
      } else {
        var s = className("EditT" + e(-597, -511))[t(1068, 1204) + e(-647, -508)]() || className(n(T, 149) + "id.widget.EditT" + r(813, 822))[r(O, 1e3) + "nce"]() || editable(!0)[r(1123, 1e3) + e(-617, -508)]();
        if (null != s && s[n(-12, -80) + "xt"](i) || input(i)) {
          this["speed" + n(83, 14)](this.SPEED[n(136, 8)]);
        }
      }
      return this[e(-628, -530) + r(D, 936) + "sts"](text("发送")) ? (this[n(-29, -100) + "r"].info(e(-562, -427) + "回复”成功！"), !0) : (this[n(-29, -146) + "r"][n(56, 162)](n(159, 109) + "送”按钮不" + e(-562, -422)), !1);
    }
  }, {
    key: Yn(-656, -610) + "extInterval",
    value: function () {
      var t = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 0;
      function n(t, n) {
        return Un(n, t - 815);
      }
      var e = arguments.length > 1 && 0 !== arguments[1] && arguments[1];
      function r(t, n) {
        return Yn(t - 849, n);
      }
      if (this[i(-799, -772) + "pController"]) {
        return !0;
      }
      function i(t, n) {
        return Fn(t, n - -30);
      }
      function u(t, n) {
        return Yn(t - 1275, n);
      }
      e && this[i(-804, -839) + "hToNext"]({
        waitTime: this.SHORT_TIME
      });
      this[i(-775, -846) + "r"][r(397, 294)]((n(1183, E) + "下一页面内容：")[i(-706, -675) + "t"](t, "ms"));
      this["emitT" + u(863, 977) + "t"](parseInt(t / 1e3));
      return this[u(799, 826) + r(273, S) + n(1243, 1181)]();
    }
  }, {
    key: "stopContro" + Un(e, 296),
    value: function () {
      return this["isSto" + (t = -108, n = -82, Fn(t, n - 724) + "roller")] = !0;
      var t, n;
    }
  }, {
    key: Fn(-773, -734) + Yn(-426, -517) + "Work",
    value: function () {
      var t = arguments[e(1077, 1058) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : 2;
      this.backToHome();
      var n = this[e(1239, 1235) + "rdList"].shift();
      function e(t, n) {
        return Un(t, n - C);
      }
      this["currentKey" + e(1010, 1090)] = n;
      var r = !1;
      function i(t, n) {
        return Vn(t, n - 1386);
      }
      function u(t, n) {
        return Fn(n, t - I);
      }
      for (var o = 0; o < t; o++) {
        if (this[i(m, 757) + "ateToSearch"](n)) {
          this[u(k, 1025) + i(x, 940) + "dom"](3e3, 5e3);
          if (text(e(b, 1112) + "空")[e(A, 1065) + "s"]()) {
            this[u(865, 924) + "r"][i(795, 760)]("关键词“".concat(n, a(-307, -326) + "为空！"));
            break;
          }
          r = !0;
          break;
        }
        if (!r) {
          if ("GvVOf" === e(1264, 1213)) {
            return !1;
          }
          this[u(1135, 1007) + "oHome"]();
        }
      }
      function a(t, n) {
        return Yn(t - 277, n);
      }
      r ? (this[a(-397, -517) + "r"].info("进入搜索关键字“"[i(713, 846) + "t"](n, u(937, 789) + "！")), this[e(1293, 1273) + i(708, 656) + "TaskTime"] = Date[e(w, 1294)]()) : this.logger.error("进入搜索关键字“".concat(n, "”任务失败！"));
      return r;
    }
  }, {
    key: Yn(-592, -713) + Yn(-426, -436) + Yn(-481, -561) + "h",
    value: function () {
      function t(t, n) {
        return Vn(n, t - 485);
      }
      function n(t, n) {
        return Yn(n - 1507, t);
      }
      var e = arguments[t(-203, -129) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : "";
      if (!e) {
        this[t(-226, -255) + "r"][n(d, 918)](n(1014, 1067) + "为空...");
        return !1;
      }
      function r(t, n) {
        return Un(t, n - -313);
      }
      function i(t, n) {
        return Un(t, n - -498);
      }
      this[r(-185, -67) + "r"].info(("执行搜索关" + r(p, -71))[i(-37, -81) + "t"](e, r(117, 117) + "."));
      app[i(-84, -35) + "Activity"]({
        action: r(-118, -20) + t(-238, -287) + "tent." + t(19, 107) + "n.VIEW",
        data: (t(-223, -130) + "scover://search/result?ke" + t(-35, -156) + "=")[i(40, -81) + "t"](e),
        packageName: this["AppPa" + i(-174, -263)]
      });
      return this[i(-103, -213) + r(183, 84) + r(g, y)](textMatches(/^(全部|综合|问一问)$/), {
        timeout: 8e3
      });
    }
  }, {
    key: "isInHome",
    value: function () {
      return text("发现")[function (t, n) {
        return Yn(n - 1803, t);
      }(1058, 1159) + "s"]();
    }
  }, {
    key: Un(r, i) + Vn(-523, -519),
    value: function () {
      var t = this,
        n = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 2e3,
        e = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : 5,
        r = arguments[i(1084, s) + "h"] > 2 ? arguments[2] : 0;
      function i(t, n) {
        return Fn(n, t - 1877);
      }
      this[function (t, n) {
        return Yn(t - 1213, n);
      }(578, 457) + i(1206, c) + "kage"](this[i(1307, 1328) + "ckage"], 5e3) && this.sleepByRandom(1e3, 2e3);
      return this.backTo(function () {
        return t[n = -817, e = -711, i(e - -1818, n) + function (t, n) {
          return Vn(t, n - -909 - 1266);
        }(15, -90)]();
        var n, e;
      }, {
        sleep: n,
        limit: e,
        callback: function () {
          function n(t, n) {
            return i(n - -617, t);
          }
          t["check" + n(341, 437) + n(535, 551)]();
          t["clickByExi" + n(l, 554)](text("退出")) && t[n(f, h) + n(v, 709) + "dom"](2e3, 3e3);
          r && r();
        }
      });
    }
  }, {
    key: "backToList",
    value: function () {
      var t = 247,
        n = 142,
        e = 1229,
        r = 1310,
        i = 1295,
        u = 281,
        s = 1020,
        c = 1029,
        l = 243,
        f = 948,
        h = arguments.length > 0 && 0 !== arguments[0] ? arguments[0] : 2e3,
        v = arguments[function (t, n) {
          return Yn(t - 94, n);
        }(-557, -412) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : 5;
      function d(t, n) {
        return Yn(t - f, n);
      }
      function p(t, n) {
        return Yn(n - a, t);
      }
      var g = arguments[d(297, 162) + "h"] > 2 ? arguments[2] : 0;
      return 1 === this[p(-33, -22) + "pe"] ? this["backT" + p(-50, -15)](h, v, g) : this[d(o, 423) + "o"](function () {
        return textMatches(/^(搜索|全部)$/).exists();
      }, {
        sleep: h,
        limit: v,
        callback: function () {
          var o = 225;
          function a(t, n) {
            return d(t - -716, n);
          }
          function f(t, n) {
            return p(t, n - o);
          }
          function h(t, n) {
            return d(n - 687, t);
          }
          function v(t, n) {
            return d(n - -706, t);
          }
          if ("pSFDs" !== a(-192, -196)) {
            var y,
              m,
              k,
              x,
              b,
              A,
              w,
              I,
              C,
              E,
              S,
              M,
              B,
              z,
              T = arguments.length > 0 && arguments[0] !== eksνphxjvtr ? arguments[0] : {};
            ikdbqxsrklg(this, ykdhtbwzhtq);
            (z = vdotpguiixn(this, ugxνavswwqo, [gupyfpkyyra.assign({
              AppName: null !== (y = T[f(149, 5) + "me"]) && 0 !== y ? y : a(-385, -423),
              AppPackage: null !== (m = T[a(-196, -126) + "ckage"]) && 0 !== m ? m : v(-199, -222) + "ingin" + a(-170, -314)
            }, T)]))[a(-421, -472) + "g"] = T;
            null !== (k = T.runType) && 0 !== k ? z.runType = k : z.runType = 1;
            null !== (x = T[v(-196, -339) + "meMinute"]) && 0 !== x ? z[a(-349, -468) + "meMin" + a(-456, -506)] = x : z[a(-349, -468) + "meMin" + a(-456, -506)] = 2;
            z["keywo" + f(337, t)] = T.keywords || v(-337, -223) + "0\n宝马m2";
            z["keywo" + h(982, 951) + "t"] = z[a(-242, -375) + f(n, 247)].split("\n").filter(djaythννnzq)[f(129, 147)](function (t) {
              return t.trim()[n = 211, e = 207, a(n - 556, e) + "ce"](/\r$/, "");
              var n, e;
            });
            null !== (b = T[a(-262, -307) + "inute"]) && 0 !== b ? z["workM" + h(1193, e)] = b : z["workM" + h(1193, e)] = 2;
            null !== (A = T[v(-346, -214) + "shRate"]) && 0 !== A ? z[a(-224, -190) + "shRate"] = A : z[a(-224, -190) + "shRate"] = 5;
            null !== (w = T["autho" + a(-185, -180)]) && 0 !== w ? z[h(r, 1186) + h(i, 1218)] = w : z[h(r, 1186) + h(i, 1218)] = 5;
            null !== (I = T["likeR" + a(-430, -473)]) && 0 !== I ? z[a(-420, -441) + a(-430, -472)] = I : z[a(-420, -441) + a(-430, -472)] = 50;
            null !== (C = T[v(-508, -359) + "wRate"]) && 0 !== C ? z[a(-369, -436) + v(-349, -296)] = C : z[a(-369, -436) + v(-349, -296)] = 20;
            null !== (E = T[a(-179, -148) + v(-283, -213) + "n"]) && 0 !== E ? z[f(222, u) + "imeMin"] = E : z[f(222, u) + "imeMin"] = 15;
            null !== (S = T.readTimeMax) && 0 !== S ? z.readTimeMax = S : z.readTimeMax = 30;
            null !== (M = T[v(-530, -438) + "Comme" + v(-492, -405) + "e"]) && 0 !== M ? z[v(-236, -354) + "ntRate"] = M : z[v(-236, -354) + "ntRate"] = 3;
            null !== (B = T.commentScriptID) && 0 !== B ? z[h(1134, 1039) + "ntScriptID"] = B : z[h(1134, 1039) + "ntScriptID"] = 0;
            z[h(1150, 1039) + "ntScr" + f(-3, 110)] = T["comme" + h(s, 1111) + a(-350, -412)] || {
              id: 1,
              title: v(-251, -235),
              content: "您好\n  " + f(223, 178) + h(1144, 1121) + "            各位好\n                        不错"
            };
            z[h(c, 1101)] = 0;
            z.likeCount = 0;
            z["follo" + a(-270, -333) + "t"] = 0;
            z[f(273, l) + "rCount"] = 0;
            z["comme" + a(-200, -228) + "nt"] = 0;
            z[f(32, 70) + "ntered"] = [];
            z.isAutoInit && z.init();
            return z;
          }
          if (g) {
            g();
          }
        }
      });
    }
  }, {
    key: "befor" + Fn(-762, -661) + Vn(-568, -434),
    value: function () {
      function t(t, n) {
        return Fn(n, t - -28);
      }
      function n(t, n) {
        return Un(n, t - u);
      }
      "jIWRD" === n(997, 1107) ? this[n(1139, 1059) + function (t, n) {
        return Un(t, n - -809);
      }(-349, -386) + n(994, 983)]() : tkaytjvasfs[t(-844, -920) + "r"].info(t(-695, -674));
    }
  }]);
}(Wn);
function ie(t, n) {
  var e = ue();
  return (ie = function (t, n) {
    return e[t -= 156];
  })(t, n);
}
function ue() {
  var t = ["10SKfWPF", "66007248ayfYyW", "4286892WDzcoY", "1368RUpgGb", "129692UYFBtF", "1206710RlaQbp", "116249HMfIQN", "472PVWJuh", "8364096wMJcUk", "179CUQxCm", "111NSQRXM", "11Dpbdmu"];
  return (ue = function () {
    return t;
  })();
}
function oe(t, n) {
  var e = ae();
  return (oe = function (t, n) {
    return e[t -= 306];
  })(t, n);
}
function ae() {
  var t = ["7uQsmWM", "6327891zptXkT", "493934CMwpFi", "8280767BcKShS", "8ocmvtY", "12XpBnwP", "5535630aWPgNC", "4WCagfW", "2266900IPfvVv", "1czzjah", "1137246ZkKZqJ", "878439ropNoc"];
  return (ae = function () {
    return t;
  })();
}
{
  !function () {
    var t = 900,
      n = 135,
      e = 139,
      r = 336,
      i = 327,
      u = 119,
      o = 137;
    function a(t, n) {
      return ie(n - -491, t);
    }
    function s(t, n) {
      return ie(n - 731, t);
    }
    var c = ue();
    function l(t, n) {
      return ie(t - -291, n);
    }
    for (;;) try {
      if (961067 === parseInt(s(t, 898)) / 1 * (-parseInt(s(889, 892)) / 2) + -parseInt(l(-n, -e)) / 3 * (parseInt(ie(540 - 378, 539)) / 4) + parseInt(a(-r, -333)) / 5 * (-parseInt(a(-330, -331)) / 6) + parseInt(a(-332, -i)) / 7 * (-parseInt(s(898, 896)) / 8) + -parseInt(l(-125, -u)) / 9 + parseInt(a(-330, -328)) / 10 * (parseInt(l(-134, -o)) / 11) + parseInt(s(894, 890)) / 12) {
        break;
      }
      c.push(c.shift());
    } catch (t) {
      c.push(c.shift());
    }
  }();
  (function () {
    var t = 258,
      n = 977,
      e = 983,
      r = 980,
      i = 307,
      u = 61;
    function o(t, n) {
      return oe(n - -52, t);
    }
    function a(t, n) {
      return oe(n - 668, t);
    }
    for (var s, c, l, f, h = ae();;) try {
      if (385268 === parseInt(a(975, 976)) / 1 * (-parseInt(a(982, 981)) / 2) + -parseInt((l = 617, f = 615, oe(l - i, f))) / 3 * (-parseInt(o(255, 254)) / 4) + -parseInt((s = 368, c = 367, oe(s - u, c))) / 5 + parseInt(o(t, 257)) / 6 * (parseInt(a(982, 979)) / 7) + -parseInt(a(n, e)) / 8 * (parseInt(a(979, r)) / 9) + parseInt(a(980, 985)) / 10 + -parseInt(o(258, 262)) / 11 * (-parseInt(o(264, 264)) / 12)) {
        break;
      }
      h.push(h.shift());
    } catch (t) {
      h.push(h.shift());
    }
  })();
}
var se = Object.freeze({
  __proto__: null,
  DYLaunch: Zn,
  RednoteLaunch: re
});
function ce() {
  var t = ["Pause", "essag", "hook_", "bindR", "initi", "Down", "MM-dd", "执行...", "getIt", "exit", "fig", "stand", "e_up", "1099399QjbUux", "ownAl", "DIR_P", "trigg", "481496EFeZwX", "conca", "ule", "date", "”自动开始", "versi", "onKey", "time", "runti", "3806456EfUUDP", " Erro", "[onTi", "upCon", "Item", "handl", "local", "308616lGQCXc", "yInte", "desto", "nkxfU", "ihiUJ", "volum", "er.on", "logge", "warn", "e_dow", "error", "stopA", "脚本初始化", "setTh", "obser", "27MEnQOm", "exitM", "lengt", "init", "YLuSi", "next", "readE", "rcept", "7761460sKItAY", "onTim", "2njdZua", "troye", "kXnHT", "9030222ZtEkqr", "yyyy-", "DYLau", "messa", "emit", " hh:m", "shutD", "主动停止脚", "pPaus", "veKey", "1160331ZzRJNs", "isDou", "alize", "recur", "1.0", "m:ss", "onNam", ".log"];
  return (ce = function () {
    return t;
  })();
}
function le(t, n) {
  return ve(t - -247, n);
}
!function () {
  var t = 251,
    n = 6,
    e = 300,
    r = 135,
    i = 93;
  function u(t, n) {
    return ve(n - -463, t);
  }
  var o = ce();
  function a(t, n) {
    return ve(t - -359, n);
  }
  function s(t, n) {
    return ve(t - -57, n);
  }
  for (;;) try {
    if (926516 === -parseInt(s(t, 262)) / 1 + parseInt(a(-n, -20)) / 2 * (parseInt(s(309, 292)) / 3) + parseInt(u(-124, -151)) / 4 + parseInt(s(294, e)) / 5 + -parseInt(a(-3, -6)) / 6 + parseInt(u(-144, -r)) / 7 + -parseInt(s(264, 295)) / 8 * (-parseInt(u(-i, -120)) / 9)) {
      break;
    }
    o.push(o.shift());
  } catch (t) {
    o.push(o.shift());
  }
}();
var fe = new n.LocalStorage(n.packageName),
  he = function () {};
function ve(t, n) {
  var e = ce();
  return (ve = function (t, n) {
    return e[t -= 292];
  })(t, n);
}
function de(t, n) {
  return ve(t - -310, n);
}
var pe,
  ge = {
    trigger: function (t, n) {
      var e = 243,
        r = 465,
        i = 556,
        u = 199;
      function o(t, n) {
        return ve(n - -126, t);
      }
      function a(t, n) {
        return ve(t - u, n);
      }
      try {
        o(253, 221) === o(e, 229) ? (csxuybqkdld["shutD" + o(203, 183) + "l"](), xjbctclνerl[function (t, n) {
          return ve(n - -804, t);
        }(-464, -r) + "ll"](), scctνprgmib.trigger("isDes" + a(553, i) + "d"), frlexasmnνw()) : pe[a(559, 581)](t, n);
      } catch (t) {
        console[o(209, 212)](function (t, n) {
          return ve(n - -380, t);
        }(-79, -54) + "er.trigger:", t.message);
      }
    },
    on: function (t, n) {
      var e = 966,
        r = 948,
        i = 259;
      function u(t, n) {
        return ve(t - -75, n);
      }
      try {
        pe.on(t, n);
      } catch (t) {
        console[u(263, 241)](function (t, n) {
          return ve(n - 622, t);
        }(e, r) + u(i, 245) + ":", t.message);
      }
    }
  };
function ye(t, n) {
  return ve(n - 243, t);
}
function me(t, n) {
  return ve(t - -841, n);
}
var ke = fe.getItem("start" + de(14, -8) + de(-5, -42), {});
fe[ye(586, 546) + "em"]("cdkey" + me(-516, -506), {});
var xe,
  be = fe.getItem("ROOT_" + me(-531, -557) + "ATH", "/"),
  Ae = function () {
    var t = arguments[a(1132, 1104) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : a(1093, 1081) + "ard",
      n = arguments[a(1132, 1109) + "h"] > 1 && 0 !== arguments[1] ? arguments[1] : me(908 - 1379, 919),
      e = new Date(),
      r = e.getFullYear(),
      i = e.getMonth() + 1;
    function u(t, n) {
      return le(t - 342, n);
    }
    var o = e.getDate();
    function a(t, n) {
      return de(t - 1097, n);
    }
    i < 10 ? i = "0" + i : i = i;
    o < 10 ? o = "0" + o : o = o;
    return "".concat(be, "logs/").concat(n, "/")[u(408, 418) + "t"](t, "-")[function (t, n) {
      return ye(t, n - -951);
    }(-405, -395) + "t"](r).concat(i).concat(o, u(389, 365));
  };
function we() {
  var t = 448,
    e = 393,
    r = 903,
    i = 406,
    u = 375,
    a = 585,
    s = 32,
    c = 12,
    l = 318,
    f = 279,
    h = 77,
    v = 207,
    d = 586,
    p = 292,
    g = 887;
  function y(t, n) {
    return ye(n, t - -803);
  }
  var m = arguments[S(1319, 1284) + "h"] > 0 && 0 !== arguments[0] ? arguments[0] : {},
    k = arguments.length > 1 && 0 !== arguments[1] ? arguments[1] : {},
    x = m.AppName,
    b = m["versi" + y(-267, -263) + "e"] || m[y(-243, -224) + "on"] || k[E(-639, -671) + "on"] || n.versionName,
    A = m.AppLaunch,
    w = Object.assign({
      name: x,
      version: b,
      ROOT_DIR_PATH: be,
      logFilePath: Ae(x, b)
    }, k),
    I = new A(w);
  function C(t, n) {
    return de(n - 1140, t);
  }
  function E(t, n) {
    return de(n - -678, t);
  }
  function S(t, n) {
    return me(n - 1780, t);
  }
  I[y(-219, -191) + E(-603, -639) + "nv"](!0);
  I["setExecuti" + E(-600, -636) + "e"](0);
  I[C(1139, 1165) + "r"].info(C(1170, 1170) + "成功...");
  I[y(-263, -292) + S(1271, 1243)] = function () {
    function t(t, n) {
      return y(n - 1157, t);
    }
    I[t(916, 941) + t(g, 893) + "e"] && alert(I.exitMessage);
    Ie();
  };
  xe = threads.start(function () {
    function t(t, n) {
      return y(t - 272, n);
    }
    function n(t, n) {
      return y(n - 488, t);
    }
    function e(t, n) {
      return C(t, n - -84);
    }
    function r(t, n) {
      return E(t, n - 956);
    }
    1 === I[t(s, c) + "meMode"] && (events.setKeyInterceptionEnabled("volum" + n(213, 235), !0), events["setKe" + n(251, 257) + r(350, l) + "ionEnabled"](n(f, 261) + e(1057, 1083) + "n", !0), events[e(1088, 1088) + t(h, 88)](), events.onKeyDown("volume_up", function () {
      toastLog(function (t, e) {
        return n(e, t - -690);
      }(-399, -361) + "本运行！");
      try {
        I[function (t, n) {
          return r(n, t - 32);
        }(330, p) + "ry"]();
      } catch (t) {}
      Ie();
    }), events[n(v, 246) + e(1058, 1046)]("volume_down", function () {
      function t(t, n) {
        return r(n, t - 254);
      }
      I["isApp" + t(517, 477) + "d"] ? toast("继续运行脚本！") : toast("暂停运行脚本！");
      I["setAp" + t(d, 596) + "ed"](!I.isAppPaused);
    }));
    setInterval(he, 3e3);
  });
  var M = function () {
    function n(t, n) {
      return E(n, t - 382);
    }
    function o(t, n) {
      return C(t, n - -257);
    }
    function s(t, n) {
      return y(n - a, t);
    }
    function c(t, n) {
      return C(t, n - -739);
    }
    try {
      if ("zWpLh" === o(866, 905)) {
        try {
          νidxbxaycmx[c(t, 437)]();
        } catch (t) {
          gvxiswomseh[o(874, 909)](s(320, 324) + s(387, e) + o(r, 895) + "r: " + t[s(366, 384) + "ge"]);
          jqfguanwuzx.error(t);
        }
      } else {
        I[n(-260, -243)]();
      }
    } catch (t) {
      console[c(i, 427)](c(u, 390) + "alize Error: " + t[n(-247, -286) + "ge"]);
      console[n(-268, -251)](t);
    }
  };
  w.recur && 1 == w.modeType ? (I[y(-262, -284) + "untime"](I.bindRuntimeConfig), function (t, e) {
    var r = 568,
      i = 599,
      u = 344,
      a = 345,
      s = 26;
    o[d(-283, -319)][d(-338, -307) + "Time"]();
    var c = o.parse[p(148, 175)]().on(t)[p(98, 85)](),
      l = o.setTimeout(function () {
        return e && e();
      }, c),
      f = n.formatTime(o["sched" + h(356, 349)](c)[d(-275, -286)](1), d(-287, -277) + d(-312, -333) + d(-307, -273) + v(r, 585));
    function h(t, n) {
      return me(t - 883, n);
    }
    function v(t, n) {
      return le(t - 523, n);
    }
    function d(t, n) {
      return de(n - -324, t);
    }
    function p(t, n) {
      return de(t - 89, n);
    }
    console.log((v(i, 566) + "mer]: 脚本将于“").concat(f, d(-341, -318) + h(u, a)));
  }(w.recur, function () {
    return M();
  })) : M();
}
function Ie() {
  function t(t, n) {
    return de(t - 1246, n);
  }
  n.killThread(xe);
  Ce && clearInterval(Ce);
  try {
    threads[t(1298, 1331) + "ownAll"]();
    engines.stopAll();
    ge[t(1247, 1263) + "er"]("isDestroyed");
    exit();
  } catch (t) {}
}
{
  events.on("startup", function (t, n) {
    function e(t, n) {
      return le(n - -717, t);
    }
    pe = n;
    var r = ke[e(-626, -597) + "yin"];
    we({
      AppName: r ? "抖音" : "小红书",
      AppLaunch: r ? se[e(-622, -606) + "nch"] : se.RednoteLaunch
    }, ke);
  });
  events.on("exit", function () {
    Ie();
  });
}
var Ce = setInterval(he, 3e3);