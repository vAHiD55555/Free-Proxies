function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.253:4201",
        "SOCKS 36.255.98.181:5411",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 36.255.98.167:4071",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 47.239.176.7:1024",
        "SOCKS 62.60.131.253:19101",
        "SOCKS 62.60.131.204:5882",
        "SOCKS 62.60.131.193:4054",
        "SOCKS 62.60.131.205:4266",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 178.170.43.121:8082",
        "SOCKS 36.255.98.154:4403",
        "SOCKS 36.255.98.154:4251",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 169.63.230.169:8081",
        "SOCKS 62.60.131.204:5394",
        "SOCKS 62.60.131.205:6139",
        "SOCKS 193.56.255.179:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}