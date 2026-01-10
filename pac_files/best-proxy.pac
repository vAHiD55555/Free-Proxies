function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.38.21:57114",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 157.175.147.228:10011",
        "SOCKS 109.120.135.230:2030",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 15.168.235.57:12185",
        "SOCKS 47.83.112.49:1080",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 157.230.220.25:4857",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 72.10.160.171:19063",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 205.185.116.159:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}