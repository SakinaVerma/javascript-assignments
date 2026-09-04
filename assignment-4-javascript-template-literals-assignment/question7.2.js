let temperature = 25;

console.log(
  `Weather: ${temperature > 30 ? 'Hot' : temperature > 20 ? 'Warm' : 'Cool'}`
);

console.log(`Temperature: ${temperature}°C`);

//Output : Weather: Warm
//         Temperature: 25°C