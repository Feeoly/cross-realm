# cross-realm
This repository was driven by a bug from access PDFJS' object across iframe in ie, the console output 'Object doesn't support Symbol(Symbol.iterator)'.

index.html: Reactive PDFViewerApplication object, run code in ie, you will notice the error it reported 'Object doesn't support Symbol(Symbol.iterator)'.

symbol.html: give an example of the cross-real symbol issue.


Symbol related resources:<br>

https://exploringjs.com/es6/ch_symbols.html#sec_symbols-crossing-realms

https://stackoverflow.com/questions/56246800/global-symbol-registry-and-cross-realm-symbols

https://github.com/zloirock/core-js/issues/834


