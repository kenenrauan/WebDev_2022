n = int(input())
for i in range(n + 1):
    if 2 ** i > n: break
    print(2 ** i, end=' ')