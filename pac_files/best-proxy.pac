function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.204:11829",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 62.60.131.204:5091",
        "SOCKS 36.255.98.184:4149",
        "SOCKS 62.60.131.205:4859",
        "SOCKS 178.22.31.205:1081",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 36.255.98.177:12156",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 5.199.166.243:9114",
        "SOCKS 195.133.9.209:80",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 62.60.131.204:4104",
        "SOCKS 62.60.131.253:4005",
        "SOCKS 36.255.98.165:4925",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}