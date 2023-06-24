/** (사용예시)
const iterations = 1000000;
const testValue = 5.1;

const isIntegerExecutionTime = measurePerformance(() => {
  isInteger(testValue);
}, iterations);

const numberIsIntegerExecutionTime = measurePerformance(() => {
  Number.isInteger(testValue);
}, iterations);

console.log('isInteger 실행 시간(ms):', isIntegerExecutionTime);
console.log('Number.isInteger 실행 시간(ms):', numberIsIntegerExecutionTime);
*/
export default function measurePerformance(callback, iterations) {
  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    callback();
  }

  const end = performance.now();
  return end - start;
}
