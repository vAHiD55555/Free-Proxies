function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.20.192.194:15311",
        "SOCKS 103.12.161.222:1080",
        "SOCKS 45.168.244.16:8080",
        "SOCKS 103.151.30.49:1080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 185.93.89.183:5052",
        "SOCKS 160.20.146.24:8080",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 121.165.169.217:8080",
        "SOCKS 54.154.27.41:357",
        "SOCKS 152.53.36.101:11734",
        "SOCKS 61.49.87.3:80",
        "SOCKS 43.133.32.76:1777",
        "SOCKS 173.44.175.226:3128",
        "SOCKS 185.93.89.143:9084",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 160.19.18.99:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}