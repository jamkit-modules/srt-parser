# srt-parser

SRT 포맷의 텍스트를 파싱하는 모듈

## Examples

```js
const srt = require("srt-parser");
const text = "" +
    "1\n" +
    "00:00:00,498 --> 00:00:02,827\n" +
    "- Here's what I love most\n" +
    "about food and diet.\n" +
    "\n" +
    "2\n" +
    "00:00:02,827 --> 00:00:06,383\n" +
    "We all eat several times a day,\n" +
    "and we're totally in charge\n" +
    "\n" +
    "3\n" +
    "00:00:06,383 --> 00:00:09,427\n" +
    "of what goes on our plate\n" +
    "and what stays off.";

const captions = srt.parse(text);
```

## API References

#### `parse(text)`
SRT 텍스트를 파싱한다.

- **Parameters**:
  - `text` (string) - 파싱할 SRT 텍스트

- **Returns**: `Array<Caption>` - SRT의 각 캡션(`Caption`) 객체의 배열

- **Caption**:
  - `number` (string) - 캡션 번호
  - `begin-time` (string) - 캡션의 시작 시간. HH:MM:DD.SSS 형식
  - `end-time` (string) - 캡션의 끝 시간. HH:MM:DD.SSS 형식
  - `caption` (string) - 캡션 내용
