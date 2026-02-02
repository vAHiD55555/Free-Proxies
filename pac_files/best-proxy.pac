function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.62.50:1088",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 36.255.98.182:4017",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 124.248.168.90:1080",
        "SOCKS 104.248.59.38:80",
        "SOCKS 36.255.98.175:4502",
        "SOCKS 62.60.131.197:8079",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 49.13.48.65:9821",
        "SOCKS 36.255.98.163:4124",
        "SOCKS 36.255.98.177:4104",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 178.130.47.129:1082",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 115.127.36.190:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}