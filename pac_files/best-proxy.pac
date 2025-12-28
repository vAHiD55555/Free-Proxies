function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.91.78.34:20269",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 62.60.131.193:14573",
        "SOCKS 194.28.61.21:1080",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 45.144.234.129:52957",
        "SOCKS 24.37.120.42:1080",
        "SOCKS 203.189.136.18:1080",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 47.81.14.7:3128",
        "SOCKS 120.92.211.211:7890",
        "SOCKS 67.43.228.250:32883",
        "SOCKS 203.189.150.93:1080",
        "SOCKS 185.210.85.26:56981",
        "SOCKS 221.202.27.194:10811",
        "SOCKS 51.158.124.167:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}