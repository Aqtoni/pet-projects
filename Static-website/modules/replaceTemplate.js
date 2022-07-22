module.exports = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  
  if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  return output;
}

/* This code is a function that takes two parameters, temp and product. 
It replaces all instances of 
{%PRODUCTNAME%}, {%IMAGE%}, {%PRICE%}, {%FROM%}, {%NUTRIENTS%}, {%QUANTITY%}, {%DESCRIPTION%, and {%ID%}, 
with the corresponding values from the product parameter. 
If the product is not organic, it also replaces the instance of {NOT_ORGANIC} with 'not-organic'. Finally, it returns the output. */