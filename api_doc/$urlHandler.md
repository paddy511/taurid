# $urlHander

#### METHOD

>#### 1. ***joinUrlAndQuery()***

- arguments: 

		1. url
		    
			type: string

			e.g.: "www.example.com\helloworld"

		2. query
			
			type: object
	
			e.g.: 
			
			{
				qn: 1,		
				qs: "hello"
			}
- return
		
		string

		e.g. : "www.example.com\helloworld?qn=1&qs=hello"

- describe
		
		this method will change query object to a query string and append to url.

>#### 2. ***getQueryFromUrl()***

- arguments: 

		1. url
		    
			type: string

			e.g.: "www.example.com\helloworld?qn=1&qs=hello"

- return
		
		object

		e.g. : 
			{
				qn: 1,		
				qs: "hello"
			}

- describe
		
		this method get query parma from the url you passed.
		if have not, it will return { }.

>#### 3. ***getSlashParmaFromLast()***

- arguments: 

		1. url
		    
			type: string

			e.g.: "www.example.com\helloworld"
		
		2. lastIndex
		
			type: number[optional] (default: 0)

			e.g. 0

- return
		
		string

		e.g. : "helloworld"

- describe
		
		this method get query parma from the url by index between slash

>#### 4. ***getCurrentQuery()***

- arguments: 
			
			null

- return
		
		object

- describe
		
		like getQueryFromUrl(), the url is *window.location.href*.

>#### 5. ***getCurrentSlashParmaFromLast()***

- arguments: 
			
		1. lastIndex
		
			type: number[optional] (default: 0)

- return
		
		string

- describe
		
		like getSlashParmaFromLast(), the url is *window.location.href*.