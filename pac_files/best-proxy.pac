function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 74.103.66.15:80",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 36.255.98.167:4144",
        "SOCKS 62.60.131.178:9080",
        "SOCKS 157.90.207.48:5122",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 5.199.166.243:9114",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 72.214.108.67:4145",
        "SOCKS 62.60.131.253:5031",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 62.60.131.205:4844",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 62.60.131.205:4266",
        "SOCKS 36.255.98.167:4504",
        "SOCKS 62.60.131.253:4949",
        "SOCKS 36.255.98.167:7773",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 36.255.98.154:7090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}