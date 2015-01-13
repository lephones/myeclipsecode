	function getcode(uid){
		// var uid = "aaa";
		var dx = "Decompiling this copyrighted software is a violation of both your license agreement and the Digital Millenium Copyright Act of 1998 (http://www.loc.gov/copyright/legislation/dmca.pdf). Under section 1204 of the DMCA, penalties range up to a $500,000 fine or up to five years imprisonment for a first offense. Think about it; pay for a license, avoid prosecution, and feel better about yourself."
		
		
		var date = new Date();
		var year = date.getFullYear() + 3;
		var day = date.getDate()-1;
		var month = date.getMonth()+1;
		var m_string = month < 10 ? "0" + month.toString():month.toString();
		
		var y_string = year.toString().substr(2, 2);
		var verTime = "-"+y_string+m_string+day+0;
	
		
		var type="YE3MP-";
		
		//µÃµ½need 
		var s= uid.substr(0,1);
		var need=s + type + '300' + '005'+verTime;
		
		dx = need + dx + uid;
		
		var suf = decode(dx);
		
		var code = need + suf;
		
		return change(code);
	}
	
	function decode(s) {
	var i = 0;
	var ac = s.split("");
	var j = 0;
	var k = ac.length;
	
	while (j < k) {
		i = 31 * i + s.charCodeAt(j);
		i = i &0xFFFFFFFF;

		j++;
	}
	
	return Math.abs(i);
	}
	
	function getBytes(string) {  
        var bytes = new Array();  
        for(var i = 0; i < string.length; i++){  
             bytes.push(string.charCodeAt(i));  
        }  
        return bytes;  
    } 
	
	function change(s){
		var abyte0= getBytes(s);
		var ac=new Array();
		
		var i=0;
		var k=abyte0.length;
	
		while (i<k){
			var j=abyte0[i];
			
			if((j>=48) && (j<=57)){
				j=(j-48+5) % 10 +48;
			}else if((j>=65) && (j<=90)){
				j = (j - 65 + 13) % 26 + 65;
			}else if ((j >= 97) && (j <= 122)){
        		j = (j - 97 + 13) % 26 + 97;
			}
			ac[i]= String.fromCharCode(j);
			i++;
		}
		return ac.join("");
	}