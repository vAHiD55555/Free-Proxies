function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.5.21:60349",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 203.76.98.21:45958",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 62.60.131.178:6080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 62.60.131.197:4502",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 88.99.30.148:5051",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 59.6.25.118:3128",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 64.227.131.240:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}