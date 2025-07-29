function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.147.221.11:8888",
        "SOCKS 58.186.110.243:16000",
        "SOCKS 114.80.36.254:3081",
        "SOCKS 27.79.138.237:16000",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 15.161.42.78:3128",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 95.179.221.141:443",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 207.174.30.91:1080",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 34.131.101.112:3128",
        "SOCKS 114.80.39.130:3081",
        "SOCKS 43.224.8.116:6667",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}