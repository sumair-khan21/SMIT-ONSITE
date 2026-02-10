// docker
// docker se hum apne application ko containerize karte hain, jisse hum apne application ko easily deploy kar sakte hain aur usko alag alag environment mein run kar sakte hain bina kisi compatibility issue ke.

// docker ke kuch important commands hain:
// 1. docker build -t <image-name> .  // is command se hum apne application ka docker image banate hain
// 2. docker run -p <host-port>:<container-port> <image-name>  // is command se hum apne docker image ko run karte hain aur usko host machine ke port se map karte hain
// 3. docker ps  // is command se hum currently running containers dekh sakte hain
// 4. docker stop <container-id>  // is command se hum kisi running container ko stop kar sakte hain
// 5. docker rm <container-id>  // is command se hum kisi stopped container ko delete kar sakte hain

// docker ke kuch important concepts hain:
// 1. Dockerfile: is file mein hum apne application ke liye instructions likhte hain, jisse docker image banate hain
// 2. Image: docker image ek template hota hai jisse hum container banate hain
// 3. Container: docker container ek running instance hota hai jo docker image se banta hai
// 4. Volume: docker volume ek persistent storage hota hai jo container ke data ko store karta hai, jisse hum data loss se bach sakte hain

// docker ke kuch advantages hain:
// 1. Portability: docker images ko hum easily kisi bhi environment mein run kar sakte hain bina kisi compatibility issue ke
// 2. Scalability: docker containers ko hum easily scale kar sakte hain, jisse hum apne application ki performance improve kar sakte hain
// 3. Isolation: docker containers apne environment mein run karte hain, jisse hum apne application ko alag alag environment mein run kar sakte hain bina kisi conflict ke
// 4. Efficiency: docker images lightweight hoti hain, jisse hum apne application ko fast deploy kar sakte hain aur usko efficiently run kar sakte hain

// docker ke kuch use cases hain:
// 1. Microservices architecture: docker containers ko hum microservices architecture mein use kar sakte hain, jisse hum apne application ko modularize kar sakte hain
// 2. Continuous Integration/Continuous Deployment (CI/CD): docker images ko hum CI/CD pipelines mein use kar sakte hain, jisse hum apne application ko automate kar sakte hain
// 3. Development environment: docker containers ko hum development environment mein use kar sakte hain, jisse hum apne application ko easily test kar sakte hain aur usko debug kar sakte hain
// 4. Legacy application migration: docker containers ko hum legacy applications ko modernize karne ke liye use kar sakte hain, jisse hum apne application ko easily migrate kar sakte hain

// https://agentfactory.panaversity.org/docs/AI-Cloud-Native-Development/docker-for-ai-services
// https://agentfactory.panaversity.org/docs/AI-Cloud-Native-Development/docker-for-ai-services/docker-installation-and-setup
// https://www.notion.so/Docker-Beginner-Guide-Express-js-302eb965516a80829bebd7386fbe1317

// jb ap apni application ko continaer m rap krte hain then wo container kisi dosray ka sath share nhi kr sakhte
// conitner agr kisi dosray container ke sath share krna chahte hain to uske liye image create krna pdta hai phr image share krte hain docker hub se dosra user image pull krke apne container m use kr skta hai
// docker desktop
// docker desktop ek application hai jo windows aur macOS ke liye available hai, jisse hum apne machine par docker ko easily manage kar sakte hain. is application se hum apne docker images, containers, volumes, aur networks ko easily dekh sakte hain aur manage kar sakte hain. docker desktop ke kuch features hain:
// docker desktop on krte hain toh ek VM on ho jati hy jisme docker run hota hai jb tk docker desktop on rhega tb tk wo VM on rhega aur usme docker run hoga
// docker desktop ke through hum apne docker images ko easily build kar sakte hain, run kar sakte hain, aur manage kar sakte hain. is application se hum apne docker containers ko easily start, stop, aur delete kar sakte hain. docker desktop ke through hum apne docker volumes ko easily create, delete, aur manage kar sakte hain. is application se hum apne docker networks ko easily create, delete, aur manage kar sakte hain. docker desktop ke through hum apne docker settings ko easily configure kar sakte hain, jisse hum apne docker environment ko customize kar sakte hain. docker desktop ke through hum apne docker logs ko easily dekh sakte hain, jisse hum apne containers ke logs ko monitor kar sakte hain. docker desktop ke through hum apne docker stats ko easily dekh sakte hain, jisse hum apne containers ke resource usage ko monitor kar sakte hain. docker desktop ke through hum apne docker
// docker desktop k kuch important features hain:
// GUI (Graphic User Interface): docker desktop ek user-friendly GUI provide karta hai, jisse hum apne docker environment ko easily manage kar sakte hain. is application se hum apne docker images, containers, volumes, aur networks ko easily dekh sakte hain aur manage kar sakte hain.
// Integration with WSL 2: docker desktop windows par WSL 2 (Windows Subsystem for Linux) ke sath integrate hota hai, jisse hum apne docker environment ko easily manage kar sakte hain aur usko linux ke sath seamlessly use kar sakte hain.
// Kubernetes support: docker desktop kubernetes ko support karta hai, jisse hum apne kubernetes clusters ko easily manage kar sakte hain aur usko docker ke sath seamlessly use kar sakte hain.
// Automatic updates: docker desktop automatically updates hota hai, jisse hum apne docker environment ko hamesha latest version par rakh sakte hain aur usko secure aur efficient bana sakte hain.
// Resource management: docker desktop resource management features provide karta hai, jisse hum apne docker containers ke resource usage ko easily monitor kar sakte hain aur usko optimize kar sakte hain. is application se hum apne containers ke CPU, memory, aur disk usage ko easily dekh sakte hain aur usko manage kar sakte hain. docker desktop ke through hum apne containers ke resource limits ko easily set kar sakte hain, jisse hum apne application ki performance ko optimize kar sakte hain. docker desktop ke through hum apne containers ke resource usage ko easily monitor kar sakte hain, jisse hum apne application ki performance ko improve kar sakte hain. docker desktop ke through hum apne containers ke resource usage ko easily analyze kar sakte hain, jisse hum apne application ki performance bottlenecks ko identify kar sakte hain. docker desktop ke through hum apne containers ke resource usage ko easily optimize kar sakte hain, jisse hum apne application ki performance ko enhance kar sakte hain.

// image ek tarha ka blue print hota hy jisme apke application ke sare dependencies aur configuration hoti hai jisse apka application run krta hai
// jb ap image create krte hain toh wo image ek tarha ka template hota hai jisse apke application ke sare dependencies aur configuration hoti hai jisse apka application run krta hai
// jb ap image create krte hain toh wo image ek tarha ka template hota hai jisse apke application ke sare dependencies aur configuration hoti hai jisse apka application run krta hai
// jb ap image create krte hain toh wo image ek tarha ka template hota hai jisme apke application ke sare dependencies aur configuration hoti hai jisse apka application run krta hai

// https://www.notion.so/Docker-Beginner-Guide-Express-js-302eb965516a80829bebd7386fbe1317