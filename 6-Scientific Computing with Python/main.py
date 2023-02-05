###2
# Conditional Execution

x = 5
if x>2 :
    print ('Bigger than 2')
    print('Still bigger')
print ('Done with 2') 

for i in range(5) :
    print (i)
    if i > 2 :
        print ('Bigger than 2')
    print ('Done with i',i)
print ('All done')

###3
#More conditional Structures

#The try/except Structure
#You surround a dangerous section of code with "try" and except
#If the code in the TRY works - the except is skipped
#If the code in the TRY fails - it jumps to the except section

astr = 'Hello Bob'
try:
    istr = int(astr)
except:
    istr= -1

print ('first',istr)

astr = '123'
try:
    istr = int(astr)
except:
    istr = -1

print('Second',istr)

#Another example of an user getting the program in trouble
rawstr = input('Enter a number:')
try:
    ival = int(rawstr)
except:
    ival = -1

if ival>0:
    print('Nice work')
else:
    print('Not a number')

###4-###5
#Python Functions and creating them

#There are two kind of functions
#-Built in func print() input() type() float() int() max() min()...
#and the ones defineed by the user

###6
#Loops and Iterations
#Repeated Steps
n = 0
while True:
    if n == 3:
        break
    print(n)
    n = n + 1
#Breaking out of a loop
#The break statemend ends the current loop and jumps 
#out of the statement immediately following the loop
#It is like a loop test that can happen anywhere in 
#the body if the loop

#The CONTINUE statement end the current iteration and jumps
#to the top of the loop and starts the next iteration

while True:
    line = input('> ')
    if line[0] == '#' :
        continue
    if line == 'done' :
        break
    print(line)
print ('Done')

###7
#Iterations: Definite Loops

###8
#Iterations: Loop Idioms

smallest = None
print("Before:", smallest)
for itervar in [3, 41, 12, 9, 74, 15]:
    if smallest is None or itervar < smallest:
        smallest = itervar
    print("Loop:", itervar, smallest)
print("Smallest:", smallest)

###9
#Iterations: More Patterns
##Python has the operator IS that can be used in logical expresions
#Implies "is the same as" (including type)
#Similar to, but stronger than ==
#IS NOT also is a logical operator
#Generally use IS only on BOOLEAN and NONE

###10
#Strings in Python

###11
#Intermediate Strings

#Slicing Strings

s='Monty Python'
print(s[0:4])
#Mont
print(s[6:20])
#Python

#We can also look at any continous section of a string using a COLON OPERATOR
#The second number is one beyond the end of the slice-"up to but not including"
#If the second number is beyond the end of the string, it stops at the end

#If we leave off the first number or the last number of the slice it is
#assumed to be the beginning or end of the string respectively

print(s[:2])
#Mo
print(s[8:])
#thon
print(s[:])
#Monty Python

#dir() shows all the possible functions that can be applied to that constant

#Searching a String
#We use the FIND() function to seatch for a substring within another string

#FIND() finds the first occurrence of the substring
#If the substring is not found, FIND() returns -1

#UPPER() or LOWER() doesnt modify the original constant, it creates a new instance of it


#SEARCH and REPLACE

#The REPLACE() function is like a "seatch and replace" operation in a word processor
#It replaces ALL OCCURRENCES of the SEARCH STRING
#with the REPLACEMENT STRING
greet="Hello Bob"
nstr=greet.replace('o','x')
# Hellx Bxb

#Stripping WHITESPACE

#Sometimes we want to take a string and remove whitespace at
#the beginning and/or end

#LSTRIP() and RSTRIP() remove whitespace at the left or right
#STRIP() removes both beginning and ending whitespace

#PREFIXES
#STARTSWITH() gives a boolean response

###12
#Reading Files

##Open a File
#Before we can read the contents of the file, we must tell python
#wich file we are going to work with and what we will be doing with the file

#This is done with the open() function

#open() return a "file handle" - a variable used to perform operations on the file

#similar to "File->Open" in  word processor

#Using Open()
#handle=open(filename,mode)

#mode is optional and should be "r" if we are planning to read the file
# and 'w' if we are going to write to the file

###13
#Files as a Sequence

#Searching through a file #But with a problem, the new lines at the end added by print()
fhand = open("")
for line in fhand:
    if line.startswith('From:'):
        print(line)

#Searching file but fixing the new line problem
fhand = open("")
for line in fhand:
    line= line.rstrip()  #Para eliminar el \n al final de cada oracion
    if line.startswith('From:'):
        print(line)

#Skipping with CONTINUE
fhand = open("")
for line in fhand:
    line= line.rstrip()  #Para eliminar el \n al final de cada oracion
    if not line.startswith('From:'):
        continue
    print(line)

#Using IT to select LINES
fhand = open("")
for line in fhand:
    line= line.rstrip()  #Para eliminar el \n al final de cada oracion
    if not '@uct.ac.za' in line:
        continue
    print(line)

#Bad files names
fname = input('Enter the file name:  ')
try:
    fhand = open(fname)
except:
    print('File cannot be opened:',fname)
    quit() #Si no pongo este quit, va a seguir ejecutando lo que sigue y se va a romper mas abajo el programa

count=0
for line in  fhand:
    if line.startswith('Subject:'):
        count = count + 1
print('There were',count,'subject lines in',fname)


###14
#Python Lists

#Slice

t=[9,41,12,3,74,15]
t[1:3]
#[41,12]
t[:4]
#[9,41,12,3]
t[3:]
#[3,74,15]
t[:]
#Toda la lista con dir("type list") para ver todos los comandos

#To add elements we use APPEND method

#Is something in a list?
some = [1,9,21,19,16]
9 in some
#True
15 in some
#False

#List are in order
#A list can be sorted, sort() means "sort yourselve"
#Creando una variable afuera del loop es otra forma de hacer esto
#en cuestion de uso de memoria esta forma usa MAS, ya que tiene que almacenar todos los valores
#En cambio la otra lo va remplazando en el trascurso del loop

numlist = list()
while True :
    inp = input("Enter a number: ")
    if inp == "done" : break
    value = float(inp)
    numlist.append(value)
average = sum(numlist) / len(numlist)
print("Average:", average)

##15
#Strings and Lists

#split() encuentra los espacios y devuelve las partes
#si le pasas un parametro para encontrar cuando separar los valores ej split(";")

#Ejemplo de abrir archivo y imprimir determinado dato

fhand = open("archivo.txt")
for line in fhand:
    line= line.rstrip()
    if not line.startswith("From ") : continue
    words = line.split()
    print(words[2])

##16 
#Python Dictionaries
purse = dict()
purse["money"] = 12
purse["candy"] = 3
purse["tissues"] = 75
print(purse["candy"])
#3
purse["candy"] = purse["candy"] + 2
#candy ahora va a tener 5

#La diferencia entre LIST() y DICT() es la key, en las listas es 0 1 2, mientras que en dict los accedes con "nombre" de los datos

##17
#Dictionaries: Common Applications

#The GET() method for dictionaries
#Para remplazar
#if name in counts:
#   x = counts[name]
#else :
#   x = 0

#Puedo usar get()
#Simplified counting with the GET()

counts = dict()
names = ["csev", "cwen", "csev","zqian","cwen"]
for name in names :
    counts[name] = counts.get(name,0) + 1 #If new se setea a 1
print(counts)
# {'csev':2, 'zqian':1 , 'cwen':2}

###18
#Dictionaries and Loops

#Retrieving lists of Keys and Values
jjj={'csev':2, 'zqian':1 , 'cwen':2}
#Usando jjj.keys()
#Devuelve {'csev', 'zqian' , 'cwen'}
#Usando jjj.values()
#[2 , 1 , 2]
#Usando jjj.items()
#[('csev':2) , ('zqian':1) , ('cwen':2)]

#TWO INTERATION VARIABLES

for aaa,bbb in jjj.items():
    print(aaa,bbb)


name = input("Enter a file:")
handle= open(name)

counts=dict()
for line in handle:
    words= line.split()
    for word in words:
        counts[words] = counts.get(word,0) + 1

bigcount = None
bigword = None
for word,count in counts.items():
    if bigcount is None or count > bigcount:
        bigword = word
        bigcount = count

print (bigword,bigcount)

###19
#The Tuples Collection

#Tuples are another kind of sequence that functions much 
#like a list they have elements wich are indexed starting at 0

#Sorting list of TUPLES
#We can take advantage of the ability to sort a list of tuples
#to ger a sorted version of a dictionary
#First we sort the dictionary bu the key using the ITEMS() method and SORTED() function

#Sort by values instead of key
#If we could construct a list of tuples of the form (value,key)
#we could sort by value

#We do this with a FOR lop that creates a list of tuples
#Almacenamos en un array los valores flipeados, en vez de (k,v) lo hago como (v,k)

lst = []
for key, val in counts.items():
    newtup = (val, key)
    lst.append(newtup)
lst = sorted(lst, reverse=True) #el reverse true hace que los values mas grandes estén primero
print(lst)

##The top 10 most common words
fhand= open("romeo.txt")
count= dict()
for line in fhand:  #Voy por cada plabra de cada fila
    words = line.split()
    for word in words:
        count[word] = counts.get(word, 0) + 1

lst = list()
for key, val in counts.items():
    newtup = (val,key)
    lst.append(newtup) #Voy a tener una lista de TUPLES

lst = sorted(lst, reverse=True)

for val,key in lst[:10]:
    print(key,val)

##Other way of doing the above
c = { 'a':10, 'b':1, 'c':22}
print( sorted( [ (v,k) for k,v in c.items() ] ) )
#[(1, 'b'), (10, 'a'), (22, 'c')]


###20
###Regular Expressions
##Before you can use regular expression in your program, you
##must import the library using ""import re""
# regex.png para ver que hace los simbolos

#You can use re.search() to see if a string matches a regular
#expression, similar to using the find() method for strings

#You can use re.findall() to extract portions of a string that match your regular expression
#similar to a combination if find() and slicing: var[5:10]

import re

hand = open("mbox-short.txt")
for line in hand:
    line = line.rstrip()
    if re.search('^From:',line):
        print(line)

#Wild-Card Characters
#The DOT character matches any character
#If you add the ASTERISK character, the character is "any number of times"
# for example '^X.*' busca una linea que empiece con X y que le sigan mas caracteres desp


#EJ '^X-\S+' algo que empiece con X- y que no le siga un espacio vacio y termine con :

###21
#Matching and Extracting Data

import re
s = 'A message from csev@umich.edu to cwen@iupui.edu about meeting @2PM'
lst = re.findall('\\S+@\\S+', s)
print(lst)

##['csev@umich.edu', 'cwen@iupui.edu']

##Warning : GREEDY Matching
#The REPEAT characters (* and +) push OUTWARD in both directions
#(greedy) to match the largest possible string

# [^F(First character in the match is an F).+(One or more characters):(last character in the match is a :)]
# Esto de arriba te devolvería la respuesta mas larga posible
# En caso de "From: Using the : characters"
# Devolvería ['From: Using the :']
# Para evitar esto debo usar el Non-Greedy
# [^F(first character innthe match is an F).+?(One or more characters but not greedy):(last character in the match is an :)]

###22
#Networking with Python

#TPC (Transport Control Protocol)

#Sockets in PYTHON
#Python has built.in support for TCP Sockets
import socket
mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect( ('data.pre4e.org'), 80)
#                  HOST             PORT

###23
#Networking Protocol

#HTTP - Hypertext Transfer Protocol
#The dominant Application Layer Protocol is the set of rules to allow
#browsers to retrieve web documents from servers over the internet

#Getting Data From The Server

###24
#Networking: Write a Web Browser

#An HTTP Request in Python
import socket
mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect( ('data.pre4e.org'), 80)
#Hastá aca el SV no devuelve nada, solo establecí la coneccion
cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\n\n'.encode()
mysock.send(cmd)
#Acá envia la solicitud y veo si quiero
#Recibir la info o no con el LOOP
while True:
    data = mysock.recv(512)
    if (len(data) < 1):
        break
    print(data.decode())
mysock.close()

###25
#Networking: Text Processing

#Each character is represented by a number between 0 and 256 stored in 8 bits of memory
#We refer to "8 bits of memory" as a "byte" of memory
#the ORD() function tells us the numeric value of a simple ASCII character

##Python 3 and Unicode
#In python3, all strings internally are UNICODE
#Working with string variables in python programs
#and reading data form files usually "just works"

#When we talk to a network resource using sockets
#or talk to a database we have to encode and decode data(usually to UTF-8)

###26
#Networking: Using urllib in Python

#Using utllib in Python
#since http is so common, we have a library that does all the socket work for us and 
#makes web pages look like a file

import urllib.request, urllib.parse, urllib.error

fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
for line in fhand:
    print(line.decode().strip())

#Or like a file
counts = dict()
for line in fhand:
    words = line.decode().split()
    for word in words:
        counts[word] = counts.get(word,0) + 1
print(counts)

###27
#Networking: Web Scraping with Python

#When a program or script pretends to be a browser and retrievs
#web page, looks at those we pages, extracts information, and 
#then looks at mor web pages

#search engines scrape web pages - we call this "spidering the web" or "web crawling"

#The easy way -Beautiful Soup
#you could do string searches the hard way
#or use the free sorfware library called BeautifulSoap from crummy.com

import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup

url = input('Enter - ')
html = urllib.request.urlopen(url).read()
soup = BeautifulSoup(html, 'html.parser')

# Retrieve all of the anchor tags
tags = soup('a')
for tag in tags:
    print(tag.get('href', None))

###28
#Using Web Services

#Data on the web

###29
#Web Services: XML

#eXtensible Markup Language
#Primary purpose is to help information systems SHARE STRUCTURES DATA

#It started as a simplified subset of the Standar Generalized Markup Language(SGML)
#,and is designed to be a relatively human-legible

#XML Terminology
#-TAGS indicate the beginning and ending of elements
#-ATTRIBUTES - Keyword/value pairs on the opening tag of XML
#-SERIALIZE / De-SERIALIZE - Convert data in one program into a 
#common format that can be stores and/or transmitted between
#systems in a programming language-independent manner

###30 
#Web Services: XML Schema

#XSD XML Schema (W3C spec)
#It is often called "W3C Schema" because "Schema" is considerated generic
#More commonly it is called XSD because the file names end in .xsd

#XSD Structure
#-xc:element
#-xs:sequence
#-xc:complexType
#Example
import xml.etree.ElementTree as ET

data = '''
<person>
  <name>Chuck</name>
  <phone type="intl">
    +1 734 303 4456
  </phone>
  <email hide="yes" />
</person>'''

tree = ET.fromstring(data)
print('Name:', tree.find('name').text) #Chuck
print('Attr:', tree.find('email').get('hide'))#yes

#Another
input = '''
<stuff>
  <users>
    <user x="2">
      <id>001</id>
      <name>Chuck</name>
    </user>
    <user x="7">
      <id>009</id>
      <name>Brent</name>
    </user>
  </users>
</stuff>'''

stuff = ET.fromstring(input)
lst = stuff.findall('users/user')#2 tags, ya que hay 2 users
print('User count:', len(lst))

for item in lst:
    print('Name', item.find('name').text)
    print('Id', item.find('id').text)
    print('Attribute', item.get('x'))

###31
#Web Services: JSON

import json

data = '''
{
  "name" : "Chuck",
  "phone" : {
    "type" : "intl",
    "number" : "+1 734 303 4456"
   },
   "email" : {
     "hide" : "yes"
   }
}'''

info = json.loads(data)
print('Name:', info["name"])
print('Hide:', info["email"]["hide"])

##
data = '''
[
  { "id" : "001",
    "x" : "2",
    "name" : "Chuck"
  } ,
  { "id" : "009",
    "x" : "7",
    "name" : "Brent"
  }
]'''

info = json.loads(data)
print('User count:', len(info))

for item in info:
    print('Name', item['name'])
    print('Id', item['id'])
    print('Attribute', item['x'])

###32
#Web Services: Service Oriented Approach

#Most non-trivial web applications use services
#They use services from other applications
##Credit Card Charge
##Hotel Reservation Systems
#Services publish the "rules" applications must follow
#to make use of the service(API)

###33
#Web Services: APIs

#Application Program Interface: the API itself is largely abstract in that it specifies an interface
#and controls the behavior of the objets specified in that interface. The software that provides the functionality described
#by an API is said to be an "implementation" of the API. 
#An API is typically defined in terms of the programming language used to build an application.

#Google maps API

import urllib.request, urllib.parse, urllib.error
import json

serviceurl = "https://maps.googleapis.com/maps/api/geocode/json"

while True:
    address = input('Enter location:')
    if len(address) < 1: break

    url = serviceurl + urllib.parse.urlencode({'address' : 'address'})

    print ('Retrieving', url)
    uh = urllib.request.urlopen(url)
    data = uh.read().decode()
    print('Retrieved', len(data), 'characters')

    try:
        js = json.loads(data)
    except:
        js = None

    if not js or 'status' not in js or js('status') != 'OK':
        print('=== Failure To Retrieve ===')
        print(data)
        continue
    
    lat = js["results"][0]["geometry"]["location"]["lat"]
    lng = js["results"][0]["geometry"]["location"]["lng"]
    print('lat', lat, 'lng', lng)
    location = js["results"][0]['formatted_address']
    print(location)

###34
#Web Services: API Rate Limiting and Security

#API Security and Rate Limiting 

#Twitter API
import urllib.request, urllib.parse, urllib.error
#En caso de querer importar modulo de otra carpeta, en este caso no funcionó
#import sys
#sys.path.insert(1,'path\to\file')
import twurl
import json
import ssl

# https://apps.twitter.com/
# Create App and get the four strings, put them in hidden.py

TWITTER_URL = 'https://api.twitter.com/1.1/friends/list.json'

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

while True:
    print('')
    acct = input('Enter Twitter Account:')
    if (len(acct) < 1): break
    url = twurl.augment(TWITTER_URL,
                        {'screen_name': acct, 'count': '5'})
    print('Retrieving', url)
    connection = urllib.request.urlopen(url, context=ctx)
    data = connection.read().decode()

    js = json.loads(data)
    print(json.dumps(js, indent=2))

    headers = dict(connection.getheaders())
    print('Remaining', headers['x-rate-limit-remaining'])

    for u in js['users']:
        print(u['screen_name'])
        if 'status' not in u:
            print('   * No status found')
            continue
        s = u['status']['text']
        print('  ', s[:50])


###35
#Python Objects




