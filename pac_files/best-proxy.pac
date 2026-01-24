function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.72:5719",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 36.255.98.178:6100",
        "SOCKS 103.48.68.67:83",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 36.255.98.169:7936",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 146.235.19.84:10907",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 94.156.236.221:8888",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 36.255.98.160:15080",
        "SOCKS 83.219.243.223:12046",
        "SOCKS 45.166.93.113:999",
        "SOCKS 95.163.153.116:41222",
        "SOCKS 196.250.239.229:8787",
        "SOCKS 94.130.24.194:3534",
        "SOCKS 152.70.236.84:1080",
        "SOCKS 202.62.50.52:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}