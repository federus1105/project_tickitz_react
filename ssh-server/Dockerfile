FROM ubuntu:24.04

#update Repo dan install SSH Server
RUN apt-get update && apt-get install openssh-server -y
# Menambahkan directory /run/sshd
RUN mkdir -p /run/sshd
# Membuat user non-root
RUN useradd -m -d /home/federus -s /usr/bin/bash federus
#copy public key dari client ke server
COPY ssh_access_key.pub  /home/federus/.ssh/authorized_keys
# Security Hardening 
RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin no/' /etc/ssh/sshd_config
RUN sed -i 's/#PubKeyAuthentication no/PubKeyAuthentication yes/' /etc/ssh/sshd_config
    

CMD ["/usr/sbin/sshd","-D", "-e"]