					                                        Git and Gihub


					                                  

<:GIT:>

1>> বর্তমানে কোন file এ আছি = pwd (enter)
2>> file এ কি কি আছ তা দেখার জন্য = ls -a 	(-a দিলে hidden file সহ দেখাবে)
3>> এক file ভেতরে ঢুকতে চাইলে = cd directory-name (enter)
4>> এক file বাহিরে আসতে চাইলে = cd ../  (enter)
5>> directory create করার জন্য = mkdir directory-name (enter)
6>> directory delete করার জন্য = rmdir directory-name (enter)
7>> file create করার জন্য = touch index.html (enter)
8>> file delete করার জন্য  = rm index.html (enter0)
9>> file এর মধ্যে কিছু লেখতে চাইলে = echo "MD Zakir Hossain"> index.html (enter)
10>> file এর মধ্যে কি লেখা আছে তা দেখার জন্য = cat index.html (enter)
11>> gitbas cleare করার জন্য = clear or ctrl+l (এল)
12>> file কোন অবস্থায় আছে সেটা দেখার জন্য = git status




						Working directory >>>>> stage = add .
							
 অনেক ভাবে Working directory থেকে stage এ তুলা যায় তার মধ্যে এইটা best
1>> যে folder এ আছি সেই folder এর সব file কে stage তুলতে চাইলে = git add . (enter)



						Working director <<<<< stage
1>> stage থেকে Working director ফিরে যেতে চাইলে = git Reset (enter)



						stage >>>>> Local repository = commit -m"any message"
1>> stage থেকে Local repositoryতে নিতে চাইলে =
				git commii -m "I have changed" ( যে কোনো একটা মেসেজ দিয়ে দিলে ভালো হয় )
2>> local repository তে কতগোলো এ্যাপ্লিকেশন আছে তা দেখার জন্য =	git log or (enter)
							      = git log --oneline (enter)

					
 
						Working director <<<<< Local repository

1>> commit করার পরে আবার Working director যেতে চাইলে = git reset --soft HEAD^ (যে fileটা commit করেছি সেই fileটা undo হয়ে stageএ চলে আসবে)
						      = git reset -- heard HEAD^ (UNDO হয়ে working directoryতে চলে যাবে সাথে সাথে লেখা সহ মুছে যাবে)
						      = git reset --HEAD^ (UNDO হবে সাথে সাথে working directory তে চলে যাবে)




<:GITHUB:>


						Local repository >>>>>> remote repository push -u origin branch-name

1>> Local repo থেকে github এর কোনো branch এ নিতে চাইলে = git pust -u


	

									 
==>>computere একটা folder create করতে হবে অথবা
        github এ একটি repositiory(folder) create করতে হবে github এর repository বা folder টা যদি আমাদের computere আনতে চাই 
        তাহলে github থেকে url copy করে এনে  git bash গিয়ে লেখতে হবে =
                                                                      git clone(url copy past) enter

 এখন computerer folder অথবা github থেকে নিয়ে আসা folder যেটাতেই কাজ করতে চাই   initialization করতে  হবে
 initialization মানে হলো folder এর দিকে সবসময় চেয়ে থাকবে কোথায় পরিবর্তন হয়েছে  কি পরিবর্তন হয়েছে 
                                                                              git init (enter) দিলেই initialization folder create হয়ে যাবে















								

	





		






										Branch--শাখা

1>> আমাদের এ্যাপ্লিকেশনে ( github ) কয়টা branch আছে তা দেখার জন্য =
							git branch
2>> New branch create করতে চাইলে =
			git branch developement (developement নামে একটা নতুন branch create করেছি )নতুন branch create করলে main branch
			এর সব কিছু copy হয়ে নতুন branchএ চলে যাবে
3>> এক branch থেকে অন্য branchএ যেতে চাইলে  =
					git checkout developement
4>> এক branch এর file  অন্য branch এ নিয়ে আসতে চাই প্রথমে create করা branch এ গিয়ে merge করতে হবে main branch এর সাথে =
											git merge main -m "যে কোনো মেসেজ"
আবার checkout করে main branch গিয়ে create করা branch এর সাথে merge করতে হবে 


																														
5>> main branch & developement branch দুইটাইতেই যদি modify করি তাহলে developement branch এর সাথে main branch Auto merge হবে না 													
			সেই ক্ষেত্রে দুইজনে ফোনে কথা বলে যেকোনো একটা file ঠিক করতে হবে
			



								Local repositiory >>>>> Remote = push

1>> Local থেকে Remote এ নিতে চাইলে = 
			git push origin main ( main মানে main branch এ নিতে চাচ্ছি আর origin মানে হলো remote )





							 Local repositiory <<<<<< Remote Local = fetch/pull

1>> remote এর কোনো file এ  modify করেছি এবং Local এ আনতে চাচ্ছি =
					git fetch এখন git status দিলে শধু changes টা দেখতে পারব কিন্তু কোনো file দেখতে পারব না 
	দেখার জন্য আবার =
			git merge করতে হবে 
	


2>> remote file গোলোকে  merge করে একসাথে নিয়ে আসতে চাইলে =
			git pull তাহলে আর নতুন করে git merge করতে হবে না 
		এবং 
		কী কী modify করেছি সেগোলোও দেখতে পারবো


