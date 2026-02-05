function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.87.82.86:3256",
        "SOCKS 221.224.56.210:10013",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 119.187.146.163:1080",
        "SOCKS 78.12.249.123:5344",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 37.157.217.144:10810",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 171.224.190.8:10002",
        "SOCKS 208.113.152.12:32690",
        "SOCKS 82.77.184.48:80",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 119.81.189.194:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}