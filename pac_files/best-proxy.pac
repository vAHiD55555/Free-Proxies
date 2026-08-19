function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.49.224.243:1080",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 43.135.179.129:7890",
        "SOCKS 195.19.55.74:1080",
        "SOCKS 173.249.20.169:9060",
        "SOCKS 185.133.239.244:32784",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 3.128.83.74:17000",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 78.85.139.146:1080",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 95.31.16.116:1081",
        "SOCKS 201.165.172.3:1080",
        "SOCKS 47.250.211.53:1080",
        "SOCKS 178.128.82.131:10808",
        "SOCKS 185.248.179.99:8080",
        "SOCKS 185.49.110.155:1080",
        "SOCKS 81.70.62.145:15163",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 135.181.150.19:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}