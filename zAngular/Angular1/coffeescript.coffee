
======================Array, Loops and Comprehensions
query='1.2.3.abc.ee'
list=query.split('.')
["1", "2", "3", "abc", "ee"]

c1 = (math.cube num for num in list)	
c2 =  for num in list
  math.cube(num)	
  
for key, value of hash
  alert(value)	
for (key in hash) {
  value = hash[key];
  alert(value);
}

result?[attr] for attr in list
