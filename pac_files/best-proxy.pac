function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.160.66.130:5555",
        "SOCKS 58.56.179.162:3382",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 119.81.71.27:80",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 159.8.114.37:80",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 179.96.28.58:80",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 221.202.27.194:10809",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 62.60.131.186:5178",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 200.59.186.177:999",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 125.141.133.49:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}