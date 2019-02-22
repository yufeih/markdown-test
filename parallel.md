# Agenda

- multithreading
- task
- parallel
- async

- performance

---

Stephen Toub

https://blogs.msdn.microsoft.com/pfxteam/

---

# Threading

## ThreadPool

## Multithread Problems

- Mutating shared state
- Out of order execution

## Synchronization Primitives

- Interlocked
- MemoryBarrier

- lock (Moniter)
- Mutex
- SemaphoreSlim
- ReaderWriterLockSlim
- SpinLock/SpinWait

## Thread Local Storage

- [ThreadStatic] / ThreadLocal<T>

---

# Task

## Task Parallel Library (TPL)

- Parallel.For/ForEach and friends
- Task

## ~~TPL data flow~~

https://github.com/dotnet/corefx/issues/34233

## ~~Parallel LINQ (PLINQ)~~

---

# async

It does not come for free

> Taking a synchronous operation and making it asynchronous will invariably degrade the performance of that one operation, as it still needs to accomplish everything that the synchronous operation did, but now with additional constraints and considerations

https://msdn.microsoft.com/en-us/magazine/hh456402.aspx

- SynchronizationContext / ConfigureAwait(false) / Wait()
- ExecutionContext
