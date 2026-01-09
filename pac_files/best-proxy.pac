function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 100.27.183.62:8080",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 198.23.236.47:1111",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 47.237.102.119:1100",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 103.82.23.118:6214",
        "SOCKS 193.56.255.181:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}