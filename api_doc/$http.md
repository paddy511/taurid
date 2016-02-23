# $http



### ATTRS
 

>#### 1. ***contentType***


	 type: string	

	 value: application/x-www-form-urlencoded(default), application/json
	
	 describe: the content type of request header.
	

#### METHOD

>#### 1. ***setContentType()***
	


- arguments: 

		1. _contentType
		    
			type: string
	
			value: application/x-www-form-urlencoded(default), application/json

- return
		
		null


>#### 2. ***send()***
	


- arguments: 
		
		1. options
		    
			type: object
	
			value: 
				{
					url: string,
					method: string,
					data: object,
					responseType: string[default:json],
					timeout: number[default:0]
					headers:[{
						header: string,
						value: string
					}]
				}

- return
		
		promise

- describe
		
		send xhr http request.
		If the http status code start with 3 or 2, it will regard it as success and resolve the data.
		If the http status code start with 4 or 5, it will regard it as error and reject the error.

>#### 3. ***get()***
	


- arguments: 
		
		1. url
		    
			type: string
	
		2. options [optional]	
		     
			type: object
			
			value: 
				{
					responseType: string[default:json],
					timeout: number[default:0]
					headers:[{
						header: string,
						value: string
					}]
				}	

- return
		
		promise

- describe
		
		same as send method.

>#### 4. ***delete()***
	


- arguments: 
		
		1. url
		    
			type: string
	
		2. options [optional]	
		     
			type: object
			
			value: 
				{
					responseType: string[default:json],
					timeout: number[default:0]
					headers:[{
						header: string,
						value: string
					}]
				}	

- return
		
		promise

- describe
		
		same as send method.

>#### 5. ***post()***
	


- arguments: 
		
		1. url
		    
			type: string
		
		2. data
		   
			type: object
	
		3. options [optional]	
		     
			type: object
			
			value: 
				{
					responseType: string[default:json],
					timeout: number[default:0]
					headers:[{
						header: string,
						value: string
					}]
				}	

- return
		
		promise

- describe
		
		same as send method.

>#### 6. ***patch()***
	


- arguments: 
		
		1. url
		    
			type: string
		
		2. data
		   
			type: object
	
		3. options [optional]	
		     
			type: object
			
			value: 
				{
					responseType: string[default:json],
					timeout: number[default:0]
					headers:[{
						header: string,
						value: string
					}]
				}	

- return
		
		promise

- describe
		
		same as send method.
