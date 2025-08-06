function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 95.47.239.65:3128",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 173.209.63.70:8192",
        "SOCKS 212.175.61.30:8080",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 65.108.203.36:28080",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 140.238.184.182:3128",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 83.222.184.87:3128",
        "SOCKS 93.183.125.11:3128",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 72.195.34.42:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}