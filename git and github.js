                                        Git and Gihub
                                  git & github = SubmitEvent


					  
==>>computere একটা folder create করতে হবে অথবা
        github এ একটি repositiory(folder) create করতে হবে github এর repository বা folder টা যদি আমাদের computere আনতে চাই 
        তাহলে github থেকে url copy করে এনে  git bash গিয়ে লেখতে হবে =
                                                                      git clone(url copy past) enter

 এখন computerer folder অথবা github থেকে নিয়ে আসা folder যেটাতেই কাজ করতে চাই   initialization করতে  হবে
 initialization মানে হলো folder এর দিকে সবসময় চেয়ে থাকবে কোথায় পরিবর্তন হয়েছে  কি পরিবর্তন হয়েছে 
                                                                              git init (enter) দিলেই initialization folder create হয়ে যাবে





                                          Folder or File create

1>> git এ নতুন folder create করতে চাইলে =
                                    mkdir myFolder (folder er name) (enter), এভাবে যত খুশি ইচ্ছা folder create করা যাবে
2>>  file create করতে চাইলে = 
				touch demo.html (enter)
				touch demo.css (enter)
				touch demo.js (enter)
				touch demo.txt ect (enter) এভাবে যত খুশি ইচ্ছা file create করা যাবে



				
			Folder and file details

1>> আমরা কোন folder এ আছি তা দেখার জন্য =
				pwd (enter) 
2>> ১ folder সামনে বা ভেতরে যেতে চাইলে  = 
				cd myFolder (folder er name)	(enter)					
3>> ১ folder পিছনে যেতে চাইলে  = 
				cd ../ (enter)
4>> কতটা file আছে তা দেখতে চাইলে =
				ls (enter)
5>> কোন কোন folder এ পরিবর্তন হয়েছে বা ডিটেলস দেখতে চাইলে =
				git status (enter)
6>> terminal full হয়ে গেলে সব লেখা মুছার জন্য =
				clear (enter)




						Working director >>>>> stage = add
					
1>> যা আছে সবকিছুকে stageএ তুলতে চাইলে ( দুইভাবে তুলা যায়)
				git add --all (enter)
				git add -A (enter)
									 
2>> যে folder এ আছি সেই folder এর সব file কে stage তুলতে চাইলে =
				git add . (enter) (it's best practice)
3>> নতুন file create করলে সেটা stage উঠবে কিন্তু Delete করা কোনো file stageএ উঠবে না  =
				git add *(enter)
3>> কোনো ইন্ডেভেজুয়াল file কে stage তুলতে চাইলে (one.txt কে শুধু stage এ তুলতে চাচ্ছি)
				git add one.txt (enter)
4>> myFolder ভেতরে গিয়ে তুলতে চাইলে three.txt file কে stage তুলতে চাচ্ছি 
				git add myFolder/three.txt (enter)
				
5>> txt বা png বা jpg এই ধরনের যত file থাকে সব fileকে একসাথে stageএ তুলতে চাইলে =
				git add *.txt বা png বা jpg 



					Working director <<<<< stage

1>> stage থেকে Working director ফিরে যেতে চাইলে =
				git Reset (enter)





					stage >>>>> Local repository = commit

1>> stage থেকে Local repositoryতে নিতে চাইলে =
				git commii -m "I have changed" ( যে কোনো একটা মেসেজ দিয়ে দিলে ভালো হয় )
2>> local repository তে কতগোলো এ্যাপ্লিকেশন আছে তা দেখার জন্য =
								 git log
								 git lot --online






									Delete এর ব্যবহার

1>> stage তুলার পর যদি কোনো file Delete করে ফেলি এবং git reset দিয়ে git status দিলে শুধু Delete হওয়া file দেখাবে কিন্তু Delete হওয়া file টা ফিরে আসবেনা 
	যদি folder এ file সহ ফিরিয়ে আনতে চাই =
					git reset --hard

	


								Remove এর ব্যবহার
1>> //file টা Delete করবে এবং সাথে সাথে stageএ তুলে দিবে = git rm two.txt
2>> //একটা folder এর ভেতরে যত গোলো folder বা file আছে সবকিছু remove করতে চাইলে =  git rm -r Folder (r এর ফুল মেনিং recourcif)
3>> // আগে modify করে পরে   = git rm two.txt দিলে আর remove করতে দিবে না, আগে changeটা commit করে পরে remove করতে হবে 
	সেই ক্ষেত্রে আমি যদি remove করতেই চাই তাহলে = git rm two.txt -f (f এর ফুল মেনিং forch)
	
4>> // আগে modify করে পরে = git rm --cached two.txt দিয়ে git status দিলে changeটে দেখাবে stageএ উঠে গেছে কিন্তু fileটা ডিলেট হয় নি



						Working director <<<<< Local repository

1>> commit করার পরে আবার Working director যেতে চাইলে = git reset HEAD~
