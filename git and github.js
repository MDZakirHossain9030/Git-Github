					                                        Git and Gihub


					                                  

<:GIT:>

// todo: git এর গল্প
1>> কোথায় আছি ==> pwd
2>> এখানে কি কি আছে ==> ls -a
3>> আরেকটু ভেতরে ঢুকি ==> cd (dir name)
4>> সেখান থেকে বাহিরে চলে আসি ==> cd ../
5>> একটা ঘর বানায় ==> mkdir(dir name)
6>> ঘরটা ভেঙ্গে দিলাম ==> rmdir(dir name)
7>> রুম বানালাম ==> touch.index (যেকোনো file create করা যাবে)
8>> রুমের ভেতর কিছু রাখলাম ==> echo "MD Zakir Hossain">index.html
9>> রুমের ভেতর কি আছে সেটা দেখতে চাচ্ছি ==> cat index.html
10>> রুমটাকেও ভেঙ্গে দেবো ==> rm index.html
11>> দারোয়ান রাখবো বাড়ি ঘর দেখে রাখার জন্য ==> git init
12>> দারোয়ান আমাকে জানাবে বাড়ি ঘরের কি অবস্থা ==> git status 
13>> সবকিছু মন থেকে বাদ দেওয়ার জন্য ==> clear or ctrl+l (এল)



1>> বর্তমানে কোন file এ আছি = pwd (enter)
2>> file এ কি কি আছ তা দেখার জন্য = ls -a 	(-a দিলে hidden file সহ দেখাবে)
3>> এক file ভেতরে ঢুকতে চাইলে = cd directory-name (enter)
4>> এক file বাহিরে আসতে চাইলে = cd ../  (enter)
5>> directory কে git directory করতে চাইলে = git init
6>> directory create করার জন্য = mkdir directory-name (enter)
7>> directory delete করার জন্য = rmdir directory-name (enter)
8>> file create করার জন্য = touch index.html (enter)
9>> file delete করার জন্য  = rm index.html (enter0)
10>> file এর মধ্যে কিছু লেখতে চাইলে = echo "MD Zakir Hossain"> index.html (enter)
11>> file এর মধ্যে কি লেখা আছে তা দেখার জন্য = cat index.html (enter)
12>> gitbas cleare করার জন্য = clear or ctrl+l (এল)
13>> file কোন অবস্থায় আছে সেটা দেখার জন্য = git status




						Working directory >>>>> stage = git add .
							
						Working director <<<<< stage = git Reset(enter)




						stage >>>>> Local repository = commit -m "any message"

1>> local repository তে কতগোলো এ্যাপ্লিকেশন আছে তা দেখার জন্য =	git log or (enter)
							      = git log --oneline (enter)

					
						Working director <<<<< Local repository

2>> commit করার পরে আবার Working director যেতে চাইলে = git reset --soft HEAD^ (যে fileটা commit করেছি সেই fileটা undo হয়ে stageএ চলে আসবে)
						      = git reset -- heard HEAD^ (UNDO হয়ে working directoryতে চলে যাবে সাথে সাথে লেখা সহ মুছে যাবে)
						      = git reset --HEAD^ (UNDO হবে সাথে সাথে working directory তে চলে যাবে)
						     





<:BRANCH:>
1>> কতটা branch আছে তা দেখার জন্য = git branch (enter)
2>> new branch create করতে চাইলে = git baranch branch-name (enter)
3>> এক branch থেকে অন্য branch এ যাওয়ার জন্য = git checkout branch-name 	(যে branch এ যেতে চাচ্ছি সেই branch এর নামে)
4>> branch delete করার জন্য  = git branch -d branch-name (main branch গিয়ে অন্য branch delete করতে হবে)
5>> এক branch এর লেখা অন্য branch এ নিতে চাইলে মানে marge করতে চাইলে = git merge main -m "যে কোনো মেসেজ" (main branch এ গিয়ে marge করতে হবে তার মানে অন্য branch এর লেখা marge করে main branch এ আনতে চাচ্ছি)
6>> main branch & developement branch দুইটাইতেই যদি modify করি তাহলে developement branch এর সাথে main branch Auto merge হবে না 													
			সেই ক্ষেত্রে দুইজনে ফোনে কথা বলে যেকোনো একটা file ঠিক করতে হবে 










				
<:GITHUB:>

						Local repository >>>>>> remote repository = push -u origin (branch-name)
1>> Local থেকে Remote এ নিতে চাইলে = git push -U origin main ( main মানে main branch এ নিতে চাচ্ছি আর origin মানে হলো remote)


							Local repositiory <<<<<< Remote Local = fetch/pull
2>> remote repo গোলোকে merge করে একসাথে নিয়ে আসতে চাইলে = git pull (তাহলে আর নতুন করে git merge করতে হবে না সাথে কী কী modify করেছি সেগোলোও দেখতে পারবো)
		

	
==>>computere থেকে কোনো repo local directory তে আনতে চাইলে = git clone(url copy past) 
















								

	





		




			



								







