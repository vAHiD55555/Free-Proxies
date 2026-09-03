function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 217.142.139.207:8085",
        "SOCKS 144.126.197.184:1088",
        "SOCKS 103.160.68.143:80",
        "SOCKS 65.21.252.66:10811",
        "SOCKS 107.191.44.214:1081",
        "SOCKS 91.103.120.49:443",
        "SOCKS 220.135.64.124:11080",
        "SOCKS 120.133.82.62:44182",
        "SOCKS 94.249.187.135:1080",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 47.243.197.73:9050",
        "SOCKS 178.214.201.74:7080",
        "SOCKS 180.180.175.11:8080",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 151.185.59.41:8080",
        "SOCKS 151.241.30.177:1080",
        "SOCKS 92.205.186.129:1080",
        "SOCKS 45.74.31.30:35620",
        "SOCKS 104.161.23.122:5037",
        "SOCKS 194.163.174.78:1084",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}