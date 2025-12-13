function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.22:31797",
        "SOCKS 149.88.71.86:8080",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 187.111.144.102:8080",
        "SOCKS 60.249.94.59:3128",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 40.172.223.148:80",
        "SOCKS 183.80.54.224:1080",
        "SOCKS 51.38.155.24:46069",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}