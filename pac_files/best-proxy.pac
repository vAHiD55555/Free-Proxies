function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.121.48.221:38711",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 103.82.23.118:6199",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 162.223.89.83:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}