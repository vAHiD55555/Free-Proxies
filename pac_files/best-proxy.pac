function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.250.56.98:19190",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 31.172.67.250:3128",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 47.83.8.7:18080",
        "SOCKS 177.19.167.242:80",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 37.120.133.137:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}