function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.54.197.50:21232",
        "SOCKS 123.54.197.53:21223",
        "SOCKS 123.54.197.20:20096",
        "SOCKS 123.54.197.19:21027",
        "SOCKS 150.241.83.23:1080",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 123.54.197.16:22137",
        "SOCKS 27.124.9.2:5555",
        "SOCKS 123.54.197.25:20856",
        "SOCKS 123.54.197.25:21869",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 86.54.42.173:32768",
        "SOCKS 123.54.197.20:21409",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 123.54.197.19:20888",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 123.54.197.20:21090",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 222.71.131.131:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}