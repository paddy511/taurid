# $stringHandler

#### METHOD

>#### 1. ***getLength()***
	


- arguments: 

		1. str
		    
			type: string
	

- return
		
		number

- describe
		
		get the real length of the string.(汉字算2个字符, 英文算一个字符)


>#### 2. ***cutstr()***
	


- arguments: 
		
		1. str
		    
			type: string
			
			des: the string that you want to cut.
	
		2. length
			
			type: number

- return
		
		string
		
		des: the string that has be cut.

- describe
		
		if the string length less than the length that you required, it will return the string. 
		or it will return the string that has be cut and add the suffix of '...'  
