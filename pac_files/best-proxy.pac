function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.62.50:1088",
        "SOCKS 185.93.89.165:4072",
        "SOCKS 103.214.9.99:1080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 103.148.212.250:1080",
        "SOCKS 67.43.236.19:25371",
        "SOCKS 185.93.89.182:12359",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 144.91.78.34:20269",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}