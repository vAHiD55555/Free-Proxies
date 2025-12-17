function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.242.6.193:1011",
        "SOCKS 58.147.186.226:8097",
        "SOCKS 202.40.178.230:64564",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 45.166.93.113:999",
        "SOCKS 128.140.76.145:23822",
        "SOCKS 154.236.177.105:1976",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 104.206.98.154:3128",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 172.211.197.17:8080",
        "SOCKS 216.218.249.28:8181",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 103.172.42.111:8080",
        "SOCKS 115.127.107.106:1080",
        "SOCKS 51.15.133.214:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}