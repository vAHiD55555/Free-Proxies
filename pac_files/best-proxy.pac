function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.6.235.13:5555",
        "SOCKS 209.38.214.48:1080",
        "SOCKS 169.155.50.87:1080",
        "SOCKS 103.76.120.216:1080",
        "SOCKS 194.163.174.78:1089",
        "SOCKS 45.118.146.219:1080",
        "SOCKS 194.163.174.78:1081",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 5.149.208.240:1080",
        "SOCKS 85.113.43.181:1080",
        "SOCKS 195.91.129.101:1337",
        "SOCKS 217.12.215.163:10808",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 66.59.197.62:4000",
        "SOCKS 141.95.112.221:9150",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 59.152.97.233:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 194.163.174.78:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}