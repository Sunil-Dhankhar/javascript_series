//  @@@@@@@@@@@@@@ Library Functions @@@@@@@@@@@@@@@@@@@

// we have discussed here underscore library and lodash library functions which are similar and which are different

// @@@@@@@@@@@ Lodash Functions  @@@@@@@@

/* 📦 */ Collections (Arrays & Objects)
_.each, _.map, _.filter, _.reduce, _.find, _.findLast, _.includes

_.every, _.some, _.reject, _.size, _.countBy, _.groupBy, _.keyBy

_.shuffle, _.sample, _.sampleSize, _.forEachRight

/* 🧮 */ Arrays
_.chunk, _.compact, _.concat, _.difference, _.differenceBy, _.differenceWith

_.drop, _.dropRight, _.dropWhile, _.dropRightWhile, _.fill

_.findIndex, _.findLastIndex, _.first (_.head), _.last, _.indexOf, _.lastIndexOf

_.flatten, _.flattenDepth, _.flattenDeep, _.uniq, _.uniqBy, _.uniqWith

_.intersection, _.intersectionBy, _.intersectionWith

_.union, _.unionBy, _.unionWith, _.xor, _.xorBy, _.xorWith

_.pull, _.pullAll, _.pullAllBy, _.pullAllWith, _.pullAt, _.remove

_.slice, _.sortedIndex, _.sortedIndexBy, _.sortedIndexOf, _.sortedLastIndex, _.sortedLastIndexBy, _.sortedLastIndexOf, _.sortedUniq, _.sortedUniqBy

_.take, _.takeRight, _.takeWhile, _.takeRightWhile, _.without

/* 🧩 */ Objects
_.assign, _.assignIn, _.defaults, _.merge, _.mergeWith

_.get, _.set, _.setWith, _.has, _.hasIn, _.unset

_.keys, _.keysIn, _.values, _.valuesIn, _.entries, _.entriesIn

_.fromPairs, _.toPairs, _.toPairsIn, _.invert, _.invertBy, _.pick, _.pickBy, _.omit, _.omitBy, _.mapKeys, _.mapValues, _.transform

/* 🧠 */ Functions (Higher-order, Utilities)
_.after, _.before, _.bind, _.bindKey, _.curry, _.curryRight, _.partial, _.partialRight

_.debounce, _.throttle, _.once, _.memoize, _.negate, _.flip, _.rearg, _.rest, _.spread, _.ary, _.ary, _.unary, _.before, _.after, _.wrap, _.overArgs

/* 🧮 */ Lang & Util
_.clone, _.cloneDeep, _.cloneWith, _.isEqual, _.isNil, _.isEmpty, _.isArray, _.isPlainObject, _.toArray, _.toInteger, _.toNumber, _.toString, _.toSafeInteger, _.toFinite

/* ✒️ */ String
_.camelCase, _.kebabCase, _.snakeCase, _.startCase, _.upperCase, _.lowerCase, _.upperFirst, _.lowerFirst,

_.trim, _.trimStart, _.trimEnd, _.pad, _.padStart, _.padEnd, _.repeat, _.replace, _.split, _.startsWith, _.endsWith, _.truncate, _.deburr

/* 🎛️ */ Seq / Chaining
_().chain(), _.tap, _.thru, _.value, _.commit

/* 🎲 */ Math, Number & Misc
_.random, _.sum, _.sumBy, _.mean, _.meanBy, _.max, _.maxBy, _.min, _.minBy, _.round, _.clamp, _.floor, _.ceil, _.add, _.subtract, _.multiply, _.divide, _.range, _.rangeRight, _.uniqueId, _.now, _.times, _.stubTrue, _.stubFalse, _.stubArray, _.stubObject, _.stubString


//  @@@@@@@@@@@@@@@  Underscore Function   @@@@@@@@@@@@@@@@@

/* 🧮 Arrays
_.first / _.head / _.take — Pehla element ya pehle n elements

_.initial — Last element ko hata ke baaki elements

_.last — Last element ya last n elements

_.rest / _.tail / _.drop — Pehla element hata ke baaki

_.compact — Falsy values hatao ([false, 0, '', null, undefined])

_.flatten — Nested arrays ko ek flat array mein badlo

_.without — Specific values hatao

_.union — Do ya zyada arrays ka union (unique values)

_.intersection — Do ya zyada arrays ke common elements

_.difference — Pehle array ke elements hatao jo dusre array mein hain

_.uniq — Duplicate elements hatao (unique list)

_.zip — Multiple arrays ko grouped elements mein badlo

_.unzip — _.zip ka reverse

_.object — Pairs se object banao

_.indexOf — Element ka index nikalna

_.lastIndexOf — Element ka last index nikalna

_.sortedIndex — Sorted array mein element insert karne ka index dhoondhna

_.range — Range of numbers banate hain

🔄 Collections (Array & Object)
_.each / _.forEach — Collection ke har element par iterate karna

_.map — Collection ke elements transform karna

_.reduce / _.foldl — Collection ko accumulate karna (left to right)

_.reduceRight / _.foldr — Collection ko right se accumulate karna

_.find / _.detect — Pehla matching element dhoondhna

_.filter / _.select — Matching elements filter karna

_.reject — Condition ke opposite elements dhoondhna

_.every / _.all — Sabhi elements condition satisfy karte hain?

_.some / _.any — Kya koi element condition satisfy karta hai?

_.contains — Kya element collection mein hai?

_.invoke — Har element pe function call karna

_.pluck — Objects ke array se property nikalna

_.where — Objects filter karna matching properties ke basis par

_.findWhere — Pehla matching object dhoondhna

_.max — Maximum value dhoondhna

_.min — Minimum value dhoondhna

_.shuffle — Random order mein elements dikhana

_.sample — Random element nikalna

_.sortBy — Collection ko sort karna

_.groupBy — Collection ko groups mein todna

_.indexBy — Key-based indexing karna

_.countBy — Elements ka count nikalna groups ke hisaab se

_.size — Collection ka size nikalna

🛠️ Objects
_.keys — Object ke keys ka array nikalna

_.allKeys — Object ke keys including inherited ones

_.values — Object ke values ka array nikalna

_.mapObject — Object ke values transform karna

_.pairs — Object ko [key, value] pairs mein convert karna

_.invert — Keys aur values ko swap karna

_.functions / _.methods — Object ke function keys nikalna

_.extend — Objects ko merge karna (properties copy karna)

_.extendOwn / _.assign — Sirf own properties copy karna

_.findKey — Object mein key find karna jo value satisfy karti hai

_.pick — Object ke kuch properties pick karna

_.omit — Object ke kuch properties hataana

_.defaults — Default properties assign karna

_.clone — Shallow copy banana

_.tap — Chain mein side effect dena

_.has — Check karna ki object mein property hai ya nahi

🧠 Functions (Function Utilities)
_.bind — Function ko kisi context mein bind karna

_.bindAll — Multiple functions ko bind karna

_.partial — Partial application karna

_.memoize — Result cache karna

_.delay — Function ko delay se call karna

_.defer — Function ko asap delay ke sath call karna

_.throttle — Function call ko limited frequency pe rakhna

_.debounce — Function call ko wait karna jab tak user ruk jaye

_.once — Function ko sirf ek baar chalana

_.after — Function tab chalana jab n baar call ho chuka ho

_.before — Function n baar se zyada na chalayein

_.wrap — Function ko wrap karna

_.negate — Predicate function ka opposite banana

_.compose — Functions ko right to left compose karna

_.restArguments — Variable arguments handle karna

🔍 Utility Functions
_.identity — Value ko waise hi return karna

_.constant — Constant value return karna

_.noop — Kuch nahi karta function

_.property — Object ki property access karna

_.propertyOf — Property ki value dena object se

_.matcher / _.matches — Predicate function banata hai

_.times — Function ko n baar chalana

_.random — Random number generate karna

_.now — Current timestamp dena

_.escape — HTML characters escape karna

_.unescape — HTML characters unescape karna

_.result — Property ya function return karna

_.uniqueId — Unique IDs generate karna

_.template — JavaScript template banane ke liye

🔄 Chaining
_.chain — Chainable wrapper banana

.value() — Chain se final result lena

🔍 Type Checking (Predicates)
_.isEqual — Deep equality check karna

_.isEmpty — Empty check karna

_.isElement — DOM element check karna

_.isArray — Array check karna

_.isObject — Object check karna

_.isArguments — Arguments object check karna

_.isFunction — Function check karna

_.isString — String check karna

_.isNumber — Number check karna

_.isFinite — Finite number check karna

_.isBoolean — Boolean check karna

_.isDate — Date object check karna

_.isRegExp — Regular expression check karna

_.isNaN — NaN check karna

_.isNull — Null check karna

_.isUndefined — Undefined check karna */



/*  @@@@@@@@@@@@@@@@@  Common Functions in Lodash and Underscore.js  @@@@@@@@@@@@@
        | Function     | Description                                                     |
        | ------------ | --------------------------------------------------------------- |
        | `_.each`     | Loop over array or object (also `_.forEach` in Lodash)          |
        | `_.map`      | Create a new array by transforming each item                    |
        | `_.filter`   | Filter items based on a condition                               |
        | `_.find`     | Find first item matching a condition                            |
        | `_.where`    | Find all items matching a partial object                        |
        | `_.pluck`    | Extract property values from array of objects                   |
        | `_.reduce`   | Reduce array to a single value                                  |
        | `_.reject`   | Opposite of filter (return items **not** matching)              |
        | `_.every`    | Check if **all** items pass a condition                         |
        | `_.some`     | Check if **any** item passes a condition                        |
        | `_.contains` | Check if collection contains a value (`includes` in Lodash)     |
        | `_.first`    | Get first element of array                                      |
        | `_.last`     | Get last element of array                                       |
        | `_.rest`     | Get all except first (called `tail` in Lodash)                  |
        | `_.indexOf`  | Find index of a value in array                                  |
        | `_.uniq`     | Remove duplicates from array                                    |
        | `_.without`  | Return array without specific values                            |
        | `_.extend`   | Copy properties from source to destination (like Object.assign) |
        | `_.clone`    | Shallow copy of object or array                                 |
        | `_.isEqual`  | Deep equality check                                             |
        | `_.isEmpty`  | Check if collection is empty                                    |
        | `_.keys`     | Get array of object keys                                        |
        | `_.values`   | Get array of object values                                      |
        | `_.pick`     | Pick specific properties from object                            |
        | `_.omit`     | Omit specific properties from object                            |
        | `_.has`      | Check if object has a property                                  |
        | `_.now`      | Get current timestamp                                           |
        | `_.throttle` | Limit how often a function is called (performance)              |
        | `_.debounce` | Delay function until stopped calling                            |
*/


/*   @@@@@@@@  🧩 Functions in Underscore.js but NOT in Lodash:  @@@@@@@@@@@@@@@@@

| Function      | Description                                                                     |
| ---------------------- | ---------------------------------------------------------------------- |
| `_.chain(obj).tap(fn)` | Allows tapping into a method chain (Lodash mein removed, use `thru`)   |
| `_.compose`            | Function composition: Right-to-left function call chaining             |
| `_.wrap`               | Wrap a function inside another function                                |
| `_.matcher`            | Returns a function that checks if an object matches the given attrs    |
| `_.matchesProperty`    | (Similar exists in Lodash but not same signature as Underscore)        |
| `_.unzip`              | Only works slightly differently than Lodash’s version                  |
| `_.functions`          | Returns function names from an object (Lodash mein `_.functionsIn`)    |
| `_.object`             | Converts arrays into objects (`_.fromPairs` in Lodash)                 |
| `_.isArguments`        | Lodash mein hai, but newer versions rely on `isArrayLikeObject`        |
| `_.partialRight`       | Partial application from right side (Removed in newer Lodash versions) |
| `_.result`             | Lodash mein bhi hai, but behavior thoda different ho sakta hai         |
| `_.all`                | Alias for `every` in Underscore (Lodash ne `all` alias hata diya)      |
| `_.any`                | Alias for `some` (Lodash ne ye alias bhi hata diya)                    |
| `_.contains`           | Lodash ne ise `_.includes` se replace kar diya                         |
| `_.pluck`              | Deprecated in Lodash (use `map(obj, 'prop')` instead)                  |
| `_.indexBy`            | Deprecated in Lodash (use `_.keyBy`)                                   |
| `_.countBy`            | Lodash mein hai, but implementation different ho sakta hai             |
___________________________________________________________________________________________________
 */


/*  ########  Aliases Removed in Lodash:  ##########

    | Underscore Alias | Lodash Equivalent   |
    | ---------------- | ------------------- |
    | `_.all`          | `_.every`           |
    | `_.any`          | `_.some`            |
    | `_.contains`     | `_.includes`        |
    | `_.pluck`        | `_.map(obj, 'key')` |
    | `_.indexBy`      | `_.keyBy`           |

*/

/* @@@@@@@@@@@@@@@@@@@  Lodash-only Functions (Not in Underscore)    @@@@@@@@@@@@@@@@@@@@@@@@@ 

| Lodash Function                             | Description                                           |
| ------------------------------------------- | ----------------------------------------------------- |
| `_.chunk`                                   | Array ko fixed-size chunks mein todta hai             |
| `_.flattenDeep`                             | Deep flatten karta hai (nested arrays)                |
| `_.flattenDepth`                            | Specified depth tak flatten karta hai                 |
| `_.differenceBy`                            | Difference nikaalne ke saath iteratee apply karta hai |
| `_.differenceWith`                          | Custom comparator ke saath difference                 |
| `_.dropRightWhile`                          | Condition ke basis par right se drop karta hai        |
| `_.takeRightWhile`                          | Condition ke basis par right se take karta hai        |
| `_.intersectionBy`                          | Intersect with iteratee                               |
| `_.intersectionWith`                        | Intersect with comparator                             |
| `_.pullAll`, `_.pullAllBy`, `_.pullAllWith` | Specific elements hataata hai (complex logic)         |
| `_.sortedUniq`, `_.sortedUniqBy`            | Sorted array ke unique elements                       |
| `_.unionBy`, `_.unionWith`                  | Union with iteratee / comparator                      |
| `_.xor`, `_.xorBy`, `_.xorWith`             | Symmetric difference (XOR)                            |

*/