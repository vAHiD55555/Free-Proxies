function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 172.104.4.144:9050",
        "SOCKS 203.189.152.49:1080",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 120.77.203.0:443",
        "SOCKS 8.219.148.250:1011",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 102.36.127.53:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 128.140.76.145:18762",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 146.190.64.18:20202",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}