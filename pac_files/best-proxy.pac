function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.152.142:1080",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 94.231.192.70:1080",
        "SOCKS 38.158.83.241:999",
        "SOCKS 115.127.107.106:1080",
        "SOCKS 87.229.205.227:8080",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 43.163.124.13:20000",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 202.62.52.20:1080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 124.248.164.156:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}