---
title: Bitwise Operators & Number Systems
module: 3
---

## Number Systems

Number systems used in daily life and programming are often referred to by their 'base'. The 'base' of a number system indicates the number of digits used in that system.   

For example, humans use "Base 10", and our available 10 digits are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.  

By convention, the values of each number are determined by "positional notation", meaning that WHERE the number sits in comparison to it's neighbors is determinate of it's value.   

Take the number 943.   

```
__9__ __4__ __3__ = 9*10^2 + 4*10^4 + 3*10^0 = 900 + 40 + 3 = 943
10^2  10^1  10^0
(100)  (10)   (1)
```

### BINARY

What even IS binary?  

Compared to our familiar Decimal system, computers use Binary - `bi` meaning `two`, which is a base 2 number system.  

#### How Computers Work (Kind Of)

Backing up a bit, let's talk about how computers work. From a relatively high level, computers are made up of tiny storage locations.    

These storage locations ultimately control the flow of electricity in the form of circuits, the storage locations acting as 'gates'.   

Each storage location has one of two states - high voltage, or low voltage. To represent these states programmers use the numbers 1 or 0 -  which is why binary is so convenient.  

```
1 Storage Unit = 1 Binary Digit = 1 Bit  
8 Bits = 1 Byte  
#bits/word = "Word Length" of a computer  

ie: 32-bit, 64-bit (full-word, double-word).  
```

#### Back To Binary

```
__1__ __1__ __0__ __0__ __1__
 2^4   2^3   2^2   2^1   2^0
```

Think about the ASCII character codes. 8 bits represent each character in the [ASCII chart](http://www.ascii-code.com/).  

The number 5, for example, is represented by the ASCII code 53, which binary has an 8 bit representation of `00110101`  

#### BitWise Logical Operators aka Gates

What is a [Digital Logic Gate](http://www.ee.surrey.ac.uk/Projects/CAL/digital-logic/gatesfunc/)?  

As the above link mentions, digital logic gates allow us to represent boolean logic in various possible combinations and outcomes. In coding, you've interacted regularly with the boolean operators like `&&`, `||`, `!==` etc. In computer programming, they get more complicated and can be represented using a diagram and a truth table.   

The six most common logic gate operators are `NOT`, `AND`, `OR`, `XOR`, `NAND`, and `NOR`.  

Let's look at a few.  

##### AND ( & )

Performs the AND operation on each pair of bits - returns a 1 only if BOTH of the comparative bits are 1.  

![and diagram](http://www.ee.surrey.ac.uk/Projects/CAL/digital-logic/gatesfunc/graphics/AND.gif)  

Truth Table:  

```
10101 & 11001

  a | b | a AND b
--------------
 1  | 1 |  1
 0  | 1 |  0
 1  | 0 |  0
 0  | 0 |  0
 1  | 1 |  1
```


##### OR ( | )

Performs the OR operation on each pair of bits. Returns a 1 if EITHER of the bits are 1.  

![or diagram](http://www.ee.surrey.ac.uk/Projects/CAL/digital-logic/gatesfunc/graphics/OR.gif)  

Truth Table:  

```
10101 | 11001

  a | b | a OR b
--------------
 1  | 1 |  1
 0  | 1 |  1
 1  | 0 |  1
 0  | 0 |  0
 1  | 1 |  1
```


##### XOR ( ^ ) aka "Exclusive Or"  

Performs the XOR operation on each pair of bits. One of the two operands must be true, but not both.   

![exor diagram](http://www.ee.surrey.ac.uk/Projects/CAL/digital-logic/gatesfunc/graphics/EOR.gif)   

Truth Table:  

```
10101 ^ 11001

  a | b | a XOR b
--------------
 1  | 1 |  0
 0  | 1 |  1
 1  | 0 |  1
 0  | 0 |  0
 1  | 1 |  0
```

##### NOT ( ~ )  

Performs the NOT operator on each bit. Returns an inverted value of the bits.  

![not diagram](http://www.ee.surrey.ac.uk/Projects/CAL/digital-logic/gatesfunc/graphics/NOT1.gif)

Truth Table:  

```
~10101

  a | NOT a
--------------
 1  | 0
 0  | 1
 1  | 0
 0  | 1
 1  | 0
```

There are more gates, such as `NAND`, `NOR`, `EXNOR`, and others that represent circuits of combinations of gates together.  

Using a truth table, convert write out the logical representation of the following bytes. Include the appropriate diagram.  

```
1. 10101010 AND 01010101

2. 10101010 OR 01010101

3. 10101010 XOR 01010101

4. NOT 11001100

5. 11001111 AND 10110110

6. NOT 00010001

7. 11001001 XOR 01100100

8. 11001001 OR 01100100
```

#### Binary --> Decimal  

Setup: Write a list of slots with the powers of 2 & values of the calculation.  

```
___ ___ ___ ___ ___ ___ ___ ___ ___ ___
2^9 2^8 2^7 2^6 2^5 2^4 2^3 2^2 2^1 2^0
512 256 128  64  32  16   8   4   2   1
```

Determine the polynomial value:  

Example:

```
_1_ _0_ _1_
2^2 2^1 2^0
 4   2   1

101 = 1*2^2 + 0*2^1 + 1*2^0 = 4 + 0 + 1 = 5
```


Convert the following numbers from Binary to Decimal.

1. 10100011

2. 101101

3. 110100101010

4. 11001001010

5. 11101111

6. 01000010


#### Decimal --> Binary

Refer to the powers of two slot diagram. Think about each slot like: "this is the 1's place, this is the 16s place" etc.  

Deconstruct the decimal into powers of two.

Find the largest number in the "powers of two" list that is divisible into the given number, then subtract and continue.  

Finally, throw a 1 in the appropriate slot if you've used that value.


Example:

```
114 =   64  +   50
                ---
                32  +   18
                        ---
                        16 + 2

In english, we have: "1-64s-Place, 1-32s-Place, 1-16s-place, 1-2splace"

_1_ _1_ _1_ _0_ _0_ _1_ _0_
2^6 2^5 2^4 2^3 2^2 2^1 2^0
 64  32  16   8   4   2   1

```

Convert the following numbers from Decimal to Binary.


1. 100

2. 25

3. 675

4. 10

5. 81


### HEXADECIMAL

`hexa` meaning 6, `decimal` meaning pertaining to 10.  

#### Decimal --> Hexadecimal


```
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
0 1 2 3 4 5 6 7 8 9  a  b  c  d  e  f
```

```
____ ____ ____ ____
16^3 16^2 16^1 16^0
4096  256   16    1
```

**SETUP**: Refer to the graph of decimals 1-15 to hex and the slots indicating values of 16 to the power of whatever.  

Similarly to how we converted decimal to binary, first find the largest calculation that will fit into decimal.  

Deconstruct the decimal into powers of 16, then map those values onto the list of hexadecimal characters in the slots they belong.  

Example:  

```
Decimal: 2000

The largest value that can go into 2000 from our chart is 256, so we start there. How many times can in go into 2000, and what is left over?

2000 = (7 * 256) + 208
                  -----
                  (13 * 16) + 0

In english, working our way through our available value slots, we have: "7-256's, 13-16s, 0-1s"

Using the hex to decimal value chart, we would get:

__7__ __d__ __0__  ---> 2000(base10) === 7D0(base16)
 16^2  16^1  16^0
  256    16     1

```

Convert the following values from decimal to hexadecimal.

1. 56

2. 158

3. 273

4. 105

5. 171


#### Hexadecimal --> Decimal

Knowing that each digit represents a 16 to the power of it's index, we simply need to grab the decimal representation of the digit, and multiple by 16 to that power.  

Example:

```
Hex: 1B2C

Looking back to our graph of slots of 16 and it's powers:

__1__ __B__ __2__ __C__
 16^3  16^2  16^1  16^0
 4096   256    16     1

Grabbing our decimal values B=11, C=12, so our calculation would look like this:

1B2C = 1*4096 + 11*256 + 2*16 + 12*1  
==> 6,956

```

Convert the following hexadecimal values to decimals.


1. 35

2. 1AA

3. 12

4. 4B

5. FF


#### Binary --> Hexadecimal

Because 16 is a power of 2, this is a super common conversion in computer programming. Under the hood, hexadecimal notation is simply condensed Binary.  

In hex, every group of 4 binary digits (bits!) represents one hexadecimal digit.  

Example:

Binary: `000101101110`

If we break this up into sections of 4 "bits" with their individual decimal representations we have:

```
Binary:     0001 0110 1110
               1    6   14

Hex:           1    6    E

```


Convert the following values in (unsigned) binary to hexadecimal.  


1. 10010001


2. 101010


3. 100110101


4. 1010101001


5. 1100111


You might be thinking "This reminds me of color values that I use all the time in CSS!" Great thought! Let's check it out.   


### RGB --> Hex

Two common ways to represent colors in computer programming are RGB values, and Hexadecimal values.  

RGB values require a set of 3 digits indicating , each from 0-255. Each of these numbers in binary fills 8 bits, or 1 byte.  

In computers, each pixel is represented by one 8-bit byte giving it it's color value.  

Take a second to convert the decimal 255 into binary.   

That's the maximum binary number we can possibly get with 8 bits (with `0000 0000` being the absolutely minimum).  

So let's take `rgb(255, 255, 255)` and convert it into hexadecimal.  

For this example, I'll go decimal --> binary --> decimal representation of each 4 bits --> hex.  

```
Decimal:       255,       255,       255
Binary:     1111 1111, 1111 1111, 1111 1111
4 Bits:      15   15    15   15    15   15
Hex:         F    F     F    F     F     F

==> #FFFFFF (or #FFF in shorthand)             
```

Convert the following rgb values to hexadecimal.  
(BONUS: what is the english color name? (google is OK for that part) )  

```
1. rgb(0, 191, 255)
2. rgb(234, 67, 53)
3. rgb(233, 29, 99)
```


Convert these hex values to rgb  

```
1. #e9c98f
2. #05c2d1
3. #0000ff
```


### NOW DO THIS

[Bitwise Exercises](https://github.com/turingschool/data_structures_and_algorithms/tree/master/bitwise_binary_operators)

### Resources

[Bitwise Operator Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
