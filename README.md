# Unexpected NaN Result with undefined in function handling null

This bug demonstrates an unexpected behavior in JavaScript when handling undefined values within a function explicitly designed to manage null values. The function `foo` intends to return 0 if either `a` or `b` is null, performing addition otherwise. However, when an undefined value is passed, it yields NaN instead of 0, which is unexpected given the handling of null values.

## Bug

The `bug.js` file contains the function `foo` and test cases highlighting this issue.  The unexpected `NaN` result occurs due to the loose comparison and type coercion in JavaScript.