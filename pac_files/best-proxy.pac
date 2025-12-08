function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.171.50.169:6688",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 117.74.65.207:80",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 71.168.71.12:8890",
        "SOCKS 5.129.218.95:8080",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 170.233.30.33:4153",
        "SOCKS 87.120.166.178:8080",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 47.243.27.26:1111",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 167.172.239.171:5555",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 159.223.149.191:20202",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}