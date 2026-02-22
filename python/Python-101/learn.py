#fib = 1,1,2,3,5,8,13,21
n = 4
def fib(n):
    if n < 2:
        return 1
    return fib(n - 1) + fib(n - 2)
print(fib(n))

# fib(4)
fib(4-1) + fib(4-2)
(fib(3) + fib(2))
((fib(3-1) + fib(3-2)) + (fib(2-1) + fib(2-2)))
(((fib(2-1) + fib(2-2)) + 1) + (1 + 1))
((1 + 1 + 1) + (1 + 1))
5

fibList = [1, 1]
for i in range(n+1):
    if (i > 1):
        el = fibList[i - 1] + fibList[i - 2]
        fibList.append(el)
print(fibList[n])
