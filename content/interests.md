---
title: "Interests"
img: "/img/interests.jpg"
date: "2024-01-17"
draft: false
---

Some interests of Michael's include:

- Programming 
- Web Development (Frontend and Backend)
- Application Development
- Cloud Computing
- Operating Systems (GNU+Linux is a favourite)
- Computer Building/Tinkering

Michael's favourite programming languages lately includes:

**Go**

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
    msgArr := []string{
        "H", "e", "l", "l", "o", 
        " ", 
        "W", "o", "r", "l", "d", "!"
    }
	msg := strings.Join(msgArr, "")

	fmt.Println(msg)
    // => Hello World!
}
```

**Clojure**

```clojure
(require '[clojure.string :as clo-str])

(def msg 
    (-> [
        "H" "e" "l" "l" "o" 
        " " 
        "W" "o" "r" "l" "d" "!"
        ]
        clo-str/join))

(defn -main []
    (println msg))
;; => Hello World!
```

**TypeScript**

```typescript
function main() {
    const msgArr = new Array(
        "H", "e", "l", "l", "o", 
        " ", 
        "W", "o", "r", "l", "d", "!"
    );

    console.log(msgArr.join());
    // => Hello World!
}
```
