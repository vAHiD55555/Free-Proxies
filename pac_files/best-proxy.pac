function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.246.62:1080",
        "SOCKS 45.74.31.30:4102",
        "SOCKS 103.210.161.8:1080",
        "SOCKS 45.74.31.30:4137",
        "SOCKS 150.129.115.253:6667",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 143.198.205.96:1080",
        "SOCKS 195.19.50.126:1080",
        "SOCKS 185.222.138.237:1080",
        "SOCKS 79.111.118.99:1080",
        "SOCKS 47.238.134.126:8004",
        "SOCKS 186.219.212.53:7080",
        "SOCKS 45.74.31.30:5067",
        "SOCKS 174.138.162.35:8865",
        "SOCKS 45.74.31.30:14680",
        "SOCKS 72.195.114.169:4145",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 45.194.41.16:8080",
        "SOCKS 15.204.235.27:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}