function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.206.205.75:4216",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 67.43.228.254:25771",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 72.207.113.97:4145",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 113.183.72.33:8080",
        "SOCKS 15.168.235.57:12185",
        "SOCKS 88.87.69.112:1081",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 4.213.180.179:3128",
        "SOCKS 36.7.252.165:3256",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}